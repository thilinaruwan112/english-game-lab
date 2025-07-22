import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle2, Circle } from "lucide-react";
import Link from 'next/link';
import { courseModules } from "@/lib/constants";

export default function LessonsPage({ params }: { params: { lang: string }}) {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline text-primary">Course Content</h1>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
          Here is the full breakdown of your learning journey. Select a module to see the lessons inside.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full" defaultValue="module-1">
          {courseModules.map((module) => (
            <AccordionItem key={module.id} value={module.id}>
              <AccordionTrigger className="text-xl font-headline hover:no-underline">
                {module.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-4 p-4">
                  {module.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <Link href={`/${params.lang}/lessons/${lesson.id}`}>
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
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
