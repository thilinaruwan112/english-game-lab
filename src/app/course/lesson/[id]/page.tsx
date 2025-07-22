
import { redirect } from 'next/navigation';

// This file is now deprecated and redirects to the new structure.
export default function LessonRootPage({ params }: { params: { id: string } }) {
  redirect(`/si/course/lesson/${params.id}`);
}
