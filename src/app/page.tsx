import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpenCheck, Target, BotMessageSquare, BarChart3, Star, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const features = [
  {
    icon: <BookOpenCheck className="w-8 h-8 text-primary" />,
    title: 'Structured Lessons',
    description: 'Follow a clear path from basics to advanced topics, designed for O/L students.',
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: 'Interactive Exercises',
    description: 'Practice what you learn with engaging quizzes and activities in every lesson.',
  },
  {
    icon: <BotMessageSquare className="w-8 h-8 text-primary" />,
    title: 'AI Pronunciation Coach',
    description: 'Get instant feedback on your spoken English to build confidence.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: 'Track Your Progress',
    description: 'See your skills grow and stay motivated with our progress tracking tools.',
  },
];

const testimonials = [
    {
        name: "Kavya Perera",
        role: "O/L Student",
        avatar: "https://placehold.co/100x100.png",
        testimonial: "EnglishGameLab made learning English so much fun! The lessons are easy to follow, and the AI coach really helped my pronunciation. I feel much more confident for my exam.",
    },
    {
        name: "Nimal Silva",
        role: "Parent",
        avatar: "https://placehold.co/100x100.png",
        testimonial: "I signed up my son for this course, and the improvement has been amazing. The platform is well-designed, and the progress tracking helps me see how he's doing.",
    },
    {
        name: "Fathima Rizwan",
        role: "O/L Student",
        avatar: "https://placehold.co/100x100.png",
        testimonial: "I used to be scared of speaking English, but the interactive exercises and friendly environment here changed everything. I highly recommend it to all my friends!",
    }
]

export default function Home() {
  return (
    <div className="space-y-24">
      <section>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary tracking-tight">
                    Pass Your English Exam with Confidence
                </h1>
                <p className="text-lg text-foreground/80">
                    EnglishGameLab offers a friendly, supportive path to success for Sri Lankan students. Our 6-9 month course is specially designed to help you ace the O/L English exam.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/lessons">Start Learning Now</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image 
                src="https://placehold.co/600x400.png"
                alt="Happy students learning"
                layout="fill"
                objectFit="cover"
                data-ai-hint="happy students"
                />
            </div>
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-3xl font-bold font-headline text-primary">Key Features</h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">Everything you need to succeed in one place.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-6">
              <div className="mb-4 bg-primary/10 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 w-full rounded-lg overflow-hidden">
            <Image 
              src="https://placehold.co/600x400.png"
              alt="Teacher helping a student"
              layout="fill"
              objectFit="cover"
              data-ai-hint="teacher student"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary">Our Unique Approach</h2>
            <p className="mt-4 text-foreground/80">
              We believe learning English should be fun, not stressful. Our course uses a unique combination of structured lessons and game-like exercises to make learning effective and enjoyable. We focus on the specific challenges faced by Sinhala and Tamil speakers, helping you build a strong foundation and speak with confidence.
            </p>
            <ul className="mt-6 space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1" />
                    <span><span className="font-semibold">Friendly Environment:</span> A low-pressure space to learn and grow.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1" />
                    <span><span className="font-semibold">Practical Skills:</span> Focus on communication for real-life situations.</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1" />
                    <span><span className="font-semibold">Expert Support:</span> Our supportive teachers are always ready to help.</span>
                </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold font-headline text-primary">What Our Students Say</h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">Real stories from students who have found success with us.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="portrait" />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                <CardDescription>{testimonial.role}</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Quote className="w-8 h-8 text-primary/20 mb-2" />
                        <p className="text-foreground/80 italic">{testimonial.testimonial}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground text-center p-12 rounded-lg">
        <h2 className="text-3xl font-bold font-headline">Ready to Start Your Journey?</h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Join hundreds of other students and take the first step towards mastering English.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/lessons">Get Started for Free</Link>
          </Button>
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
