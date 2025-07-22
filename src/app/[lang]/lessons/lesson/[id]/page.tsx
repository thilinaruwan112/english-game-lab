
'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { courseModules } from '@/lib/constants';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function LessonPage({ params }: { params: { id: string, lang: string } }) {
  const lessonId = parseInt(params.id, 10);
  const allLessons = courseModules.flatMap(m => m.lessons);
  const lesson = allLessons.find(l => l.id === lessonId);
  const currentIndex = allLessons.findIndex(l => l.id === lessonId);
  const currentModule = courseModules.find(m => m.lessons.some(l => l.id === lessonId));

  
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  if (!lesson || !currentModule) {
    return <div>Lesson not found.</div>;
  }
  
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;

  const question = {
    text: "Which sentence is correct?",
    options: ["He go to school.", "She are a teacher.", "They play football.", "I is happy."],
    correctAnswer: "They play football."
  };

  const checkAnswer = () => {
    if (selectedAnswer === question.correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto container py-8">
        <div className="mb-8">
            <Button asChild variant="outline">
                <Link href={`/${params.lang}/lessons/module/${currentModule.id}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lessons
                </Link>
            </Button>
        </div>
      <h1 className="text-4xl font-bold font-headline text-primary mb-2">{lesson.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">Welcome to your lesson. Read the content and complete the exercise below.</p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lesson Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>This is a placeholder for the lesson content. In a real application, this area would contain text, images, and videos explaining the concepts for "{lesson.title}".</p>
          <p>For example, if this were a grammar lesson, we might explain verb conjugations and provide examples.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Interactive Exercise</CardTitle>
          <CardDescription>Test your knowledge with this quick question.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-semibold mb-4">{question.text}</p>
          <RadioGroup onValueChange={setSelectedAnswer}>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`q1-o${index}`} />
                <Label htmlFor={`q1-o${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
          {isCorrect !== null && (
            <Alert variant={isCorrect ? "default" : "destructive"} className="mt-4 bg-green-100 dark:bg-green-900 border-green-400 dark:border-green-700">
               <AlertTitle>{isCorrect ? "Correct!" : "Not Quite"}</AlertTitle>
               <AlertDescription>
                 {isCorrect ? "Great job! You selected the right answer." : `The correct answer is "${question.correctAnswer}". Keep trying!`}
               </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={checkAnswer} disabled={!selectedAnswer}>Check Answer</Button>
        </CardFooter>
      </Card>

      <div className="flex justify-between mt-8">
        {prevLesson ? (
          <Button asChild variant="outline">
            <Link href={`/${params.lang}/lessons/lesson/${prevLesson.id}`}><ArrowLeft className="mr-2 h-4 w-4" /> Previous Lesson</Link>
          </Button>
        ) : <div />}
        {nextLesson ? (
          <Button asChild>
            <Link href={`/${params.lang}/lessons/lesson/${nextLesson.id}`}>Next Lesson <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        ) : <div />}
      </div>
    </div>
  );
}
