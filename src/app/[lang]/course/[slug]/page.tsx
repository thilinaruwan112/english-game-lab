
'use client';
import { Button } from "@/components/ui/button";
import { courseModules } from '@/lib/constants';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Award, BookOpen, Clock, Calendar, BarChart, FileText, UserCheck, Lock, Info, Landmark, Users, ClipboardCheck, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export default function ModulePage({ params }: { params: { slug: string, lang: string } }) {
    const module = courseModules.find(m => m.slug === params.slug);

    if (!module) {
        return <div className="container mx-auto py-12 text-center">Module not found.</div>;
    }

    const highlights = [
        { icon: <BookOpen className="w-8 h-8 text-primary"/>, title: "Comprehensive Curriculum", description: "Learn all aspects of our well-designed program."},
        { icon: <Landmark className="w-8 h-8 text-primary"/>, title: "Hands-on Practice", description: "Gain practical experience through simulated settings."},
        { icon: <Award className="w-8 h-8 text-primary"/>, title: "Recognized Certification", description: "Earn a certificate recognized by industry leaders."}
    ];

    const learningOutcomes = [
        "Understand core principles.",
        "Perform basic calculations.",
        "Manage inventory.",
        "Provide patient counseling.",
        "Follow ethical guidelines.",
        "Use software systems."
    ];

    const assessmentMethods = [
      {
        count: module.lessons.length,
        title: 'Assessments',
        description: 'Evaluations to track your progress.',
        icon: <ClipboardCheck className="w-10 h-10 text-primary"/>
      },
      {
        count: module.lessons.length * 3,
        title: 'Quizzes',
        description: 'Regular quizzes to reinforce your knowledge.',
        icon: <FileText className="w-10 h-10 text-primary"/>
      },
      {
        count: 1,
        title: 'Mid & Final Exam',
        description: 'Hands-on evaluation of your practical skills.',
        icon: <Trophy className="w-10 h-10 text-primary"/>
      },
    ];

    const certificationRequirements = [
        "Complete all course modules.",
        "Participate in learning games.",
        "Pass all tests and the final assignment.",
        "Maintain an average score of 80% or higher."
    ]

    const enrollmentSteps = [
      {
        icon: <FileText className="w-10 h-10 text-primary" />,
        title: 'Complete Application',
        description: 'Fill out the application form on the website.',
      },
      {
        icon: <Lock className="w-10 h-10 text-primary" />,
        title: 'Secure Your Spot',
        description: 'Enrollment is first-come, first-served.',
      },
      {
        icon: <Info className="w-10 h-10 text-primary" />,
        title: 'Contact for Information',
        description: 'For more info, contact our admissions team.',
      },
    ]


    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary text-primary-foreground py-12 md:py-20">
                <div className="container mx-auto px-4">
                     <div className="mb-4">
                        <Link href={`/${params.lang}/course`} className="text-sm inline-flex items-center gap-2 opacity-80 hover:opacity-100">
                           <ArrowLeft className="w-4 h-4"/> Back to Courses
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">{module.title}</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl text-primary-foreground/80">A foundational course designed to equip students with the essential knowledge and skills required for a successful career.</p>
                     <div className="mt-6 flex gap-4">
                        <Button asChild size="lg">
                            <Link href={`/${params.lang}/register`}>Enroll Now</Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary">
                            <Link href="#">Download Syllabus</Link>
                        </Button>
                    </div>
                </div>
            </section>
            
            {/* Main Content */}
            <div className="container mx-auto py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold font-headline mb-4">{module.title}</h2>
                            <p className="text-muted-foreground leading-relaxed">This program covers pharmacology, pharmaceutics, and patient care. It provides a comprehensive understanding of the field, preparing students for real-world challenges in a variety of pharmacy settings. Practical skills are emphasized throughout the course.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {highlights.map(item => (
                                <Card key={item.title} className="bg-secondary/50">
                                    <CardContent className="p-6 text-center">
                                        <div className="mb-4 inline-block bg-primary/10 p-3 rounded-full">{item.icon}</div>
                                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold font-headline mb-6">What You'll Learn</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {learningOutcomes.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold font-headline mb-6">Course Topics</h3>
                            <Accordion type="single" collapsible className="w-full">
                                {module.lessons.map(lesson => (
                                    <AccordionItem value={`item-${lesson.id}`} key={lesson.id}>
                                        <AccordionTrigger className="text-lg font-semibold">{lesson.title}</AccordionTrigger>
                                        <AccordionContent>
                                            This section would contain details about {lesson.title}.
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        
                         <div>
                            <h3 className="text-2xl font-bold font-headline mb-6">Assessment Method for Course</h3>
                            <p className="text-muted-foreground mb-6">Your progress will be evaluated through the following methods:</p>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {assessmentMethods.map(item => (
                                    <Card key={item.title} className="bg-secondary/50 text-center">
                                        <CardContent className="p-6">
                                            {item.icon}
                                            <div className="text-4xl font-bold text-primary mt-4">{item.count}</div>
                                            <h4 className="font-semibold mt-2">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                             </div>
                        </div>

                        <div>
                             <h3 className="text-2xl font-bold font-headline mb-6">Certification for Course</h3>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                 <div>
                                     <p className="text-muted-foreground mb-4">After successfully completing the course and passing all required modules, you will receive an official certificate. To qualify, you must:</p>
                                     <ul className="space-y-3">
                                         {certificationRequirements.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                     </ul>
                                 </div>
                                 <div className="flex justify-center">
                                      <Card className="border-2 border-primary/50 w-64 p-4 text-center bg-secondary/30">
                                         <Award className="w-16 h-16 mx-auto text-primary"/>
                                         <h4 className="font-bold text-lg mt-4">Certificate</h4>
                                         <p className="text-sm text-muted-foreground">Recognized Internationally</p>
                                      </Card>
                                 </div>
                             </div>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <Card className="shadow-lg">
                                <CardHeader className="p-0">
                                    <Image src={module.image} alt={module.title} width={600} height={400} className="rounded-t-2xl object-cover w-full h-48" data-ai-hint={module.hint}/>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="text-3xl font-bold text-primary">LKR {module.price.toLocaleString()}</div>
                                        <Badge variant="destructive">Limited Seats</Badge>
                                    </div>
                                    <div className="space-y-3 text-muted-foreground">
                                        <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary"/><span><b>Duration:</b> 2 Years</span></div>
                                        <div className="flex items-center gap-3"><Calendar className="w-5 h-5 text-primary"/><span><b>Schedule:</b> Weekends, 9 AM - 4 PM</span></div>
                                        <div className="flex items-center gap-3"><BarChart className="w-5 h-5 text-primary"/><span><b>Level:</b> {module.category}</span></div>
                                    </div>
                                    
                                    <div className="mt-6">
                                        <h4 className="font-bold text-lg mb-3">Entry Requirements</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-center gap-2"><UserCheck className="w-4 h-4 text-primary"/><span>GCE Advanced Level (A/L)</span></li>
                                            <li className="flex items-center gap-2"><UserCheck className="w-4 h-4 text-primary"/><span>Minimum of 3 Simple Passes</span></li>
                                        </ul>
                                    </div>

                                    <Button asChild size="lg" className="w-full mt-6">
                                        <Link href={`/${params.lang}/register`}>Enroll Now</Link>
                                    </Button>

                                    <div className="mt-6">
                                        <h4 className="font-bold text-lg mb-3">Materials Provided</h4>
                                         <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary"/><span>Primary study materials</span></li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary"/><span>Tutorials</span></li>
                                            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary"/><span>E-book</span></li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

             {/* How to Enroll Section */}
            <section className="bg-secondary py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold font-headline">How to Enroll</h2>
                    <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">A simple path to starting your new career.</p>
                     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                         {enrollmentSteps.map((step, index) => (
                             <div key={index} className="flex flex-col items-center text-center">
                                 <div className="bg-background rounded-full p-5 border-4 border-secondary shadow-lg mb-4">
                                     {step.icon}
                                 </div>
                                 <h3 className="text-xl font-bold font-headline">{step.title}</h3>
                                 <p className="text-muted-foreground mt-2">{step.description}</p>
                             </div>
                         ))}
                    </div>
                    <div className="mt-12">
                         <h3 className="text-xl font-semibold">Start your career journey today!</h3>
                         <Button size="lg" className="mt-4" asChild>
                           <Link href={`/${params.lang}/register`}>Apply Now</Link>
                         </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
