
'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { courseModules } from '@/lib/constants';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ModulePage({ params }: { params: { slug: string, lang: string } }) {
    const module = courseModules.find(m => m.id === params.slug);

    if (!module) {
        return <div>Module not found.</div>;
    }

    return (
        <div className="container mx-auto py-8 md:py-12">
            <div className="mb-8">
                <Button asChild variant="outline">
                    <Link href={`/${params.lang}/lessons`}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Catalogue
                    </Link>
                </Button>
            </div>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-headline text-primary">{module.title}</h1>
                <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
                    Here are the lessons for this module.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <ul className="space-y-4 p-2 md:p-4">
                    {module.lessons.map((lesson) => (
                        <li key={lesson.id}>
                            <Link href={`/${params.lang}/lessons/lesson/${lesson.id}`}>
                                <div className="flex items-center p-4 rounded-lg border bg-card hover:bg-primary/5 transition-colors cursor-pointer">
                                    {lesson.completed ? (
                                        <CheckCircle2 className="w-6 h-6 text-green-500 mr-4" />
                                    ) : (
                                        <Circle className="w-6 h-6 text-muted-foreground mr-4" />
                                    )}
                                    <span className="flex-grow text-lg">{lesson.title}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
