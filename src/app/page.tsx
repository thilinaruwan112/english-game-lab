import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpenCheck, Target, BotMessageSquare, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: <BookOpenCheck className="w-10 h-10 text-primary" />,
    title: 'Structured Lessons',
    description: 'Follow a clear path from basics to advanced topics, designed for O/L students.',
  },
  {
    icon: <Target className="w-10 h-10 text-primary" />,
    title: 'Interactive Exercises',
    description: 'Practice what you learn with engaging quizzes and activities in every lesson.',
  },
  {
    icon: <BotMessageSquare className="w-10 h-10 text-primary" />,
    title: 'AI Pronunciation Coach',
    description: 'Get instant feedback on your spoken English to build confidence.',
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: 'Track Your Progress',
    description: 'See your skills grow and stay motivated with our progress tracking tools.',
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary tracking-tight">
          Pass Your English Exam with Confidence
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          EnglishGameLab offers a friendly, supportive path to success for Sri Lankan students. Our 6-9 month course is specially designed to help you ace the O/L English exam.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/lessons">Start Learning Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
      
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-card p-8 rounded-lg shadow-md">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary">Our Unique Approach</h2>
            <p className="mt-4 text-foreground/80">
              We believe learning English should be fun, not stressful. Our course uses a unique combination of structured lessons and game-like exercises to make learning effective and enjoyable. We focus on the specific challenges faced by Sinhala and Tamil speakers, helping you build a strong foundation and speak with confidence.
            </p>
            <ul className="mt-6 space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-primary" />
                    <span>Friendly, low-pressure environment.</span>
                </li>
                <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-primary" />
                    <span>Focus on practical communication skills.</span>
                </li>
                <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-primary" />
                    <span>Supportive teachers ready to help.</span>
                </li>
            </ul>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image 
              src="https://placehold.co/600x400.png"
              alt="Students learning English"
              layout="fill"
              objectFit="cover"
              data-ai-hint="students learning"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
}
