
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { courseModules } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CoursePage({ params }: { params: { lang: string } }) {
  return (
    <div className="container mx-auto py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline text-primary">Course Catalogue</h1>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
          Explore our modules. Each one is a step towards mastering English.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseModules.map((module) => (
          <Card key={module.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>Contains {module.lessons.length} lessons</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Explore the foundational concepts of English with this introductory module.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/${params.lang}/course/module/${module.id}`}>
                  View Lessons <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
