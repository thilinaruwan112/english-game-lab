import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { progressData } from "@/lib/constants";
import { CheckCircle2, Target } from "lucide-react";

export default function ProgressPage() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline text-primary">Your Progress</h1>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
          See how far you've come and what's next on your learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Completed Lessons</CardTitle>
                    <CardDescription>A summary of the lessons you have successfully completed.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Lesson</TableHead>
                                <TableHead className="text-center">Score</TableHead>
                                <TableHead className="text-right">Date Completed</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {progressData.completedLessons.map((lesson, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{lesson.lesson}</TableCell>
                                    <TableCell className="text-center">{lesson.score}</TableCell>
                                    <TableCell className="text-right">{lesson.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Overall Progress</CardTitle>
              <CardDescription>You are {progressData.overallProgress}% through the course.</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progressData.overallProgress} className="w-full" />
              <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                  <span>0%</span>
                  <span>100%</span>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Lessons Completed</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{progressData.completedLessons.length}</div>
                <p className="text-xs text-muted-foreground">out of {progressData.totalLessons} total lessons</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Lessons Remaining</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{progressData.lessonsInProgress}</div>
                <p className="text-xs text-muted-foreground">Keep up the great work!</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
