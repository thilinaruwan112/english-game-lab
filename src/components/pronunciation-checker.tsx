'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Mic, StopCircle, Loader2, AlertCircle } from 'lucide-react';
import { getPronunciationFeedback, type PronunciationFeedbackOutput } from '@/ai/flows/pronunciation-feedback';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

export function PronunciationChecker() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog.");
  const [feedback, setFeedback] = useState<PronunciationFeedbackOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

  const startRecording = async () => {
    setError(null);
    setFeedback(null);
    setAudioDataUri(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = () => {
          setAudioDataUri(reader.result as string);
        };
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setError("Could not access microphone. Please check your browser permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleSubmit = async () => {
    if (!audioDataUri) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No audio recorded. Please record your pronunciation first.",
      });
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setFeedback(null);

    try {
      const result = await getPronunciationFeedback({ audioDataUri, text });
      setFeedback(result);
    } catch (err) {
      console.error("Error getting feedback:", err);
      setError("An error occurred while getting feedback. Please try again.");
      toast({
        variant: "destructive",
        title: "AI Error",
        description: "Failed to get pronunciation feedback from the server.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Pronunciation Practice</CardTitle>
        <CardDescription>Read the sentence below clearly into your microphone.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="text-lg text-center p-4"
          aria-label="Text to pronounce"
        />

        <div className="flex justify-center">
          {!isRecording ? (
            <Button onClick={startRecording} size="lg">
              <Mic className="mr-2 h-5 w-5" />
              Start Recording
            </Button>
          ) : (
            <Button onClick={stopRecording} size="lg" variant="destructive">
              <StopCircle className="mr-2 h-5 w-5" />
              Stop Recording
            </Button>
          )}
        </div>
        
        {error && (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {audioDataUri && !isLoading && (
          <div className="text-center">
            <p className="text-sm text-green-600 font-medium">Recording complete. Ready for feedback.</p>
            <audio src={audioDataUri} controls className="mt-2 mx-auto" />
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center justify-center text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p className="mt-2">Analyzing your pronunciation...</p>
          </div>
        )}

        {feedback && (
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle>Feedback from your Coach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{feedback.feedback}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={!audioDataUri || isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          Get Feedback
        </Button>
      </CardFooter>
    </Card>
  );
}
