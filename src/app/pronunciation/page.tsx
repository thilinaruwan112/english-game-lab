import { PronunciationChecker } from "@/components/pronunciation-checker";

export default function PronunciationPage() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline text-primary">AI Pronunciation Coach</h1>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
          Record yourself saying the sentence below and get instant feedback from our AI coach.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <PronunciationChecker />
      </div>
    </div>
  );
}
