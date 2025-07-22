
import { redirect } from 'next/navigation';

// This file is now deprecated and redirects to the new structure.
// The content has been moved to /lessons/lesson/[id]/page.tsx
export default function LessonRootPage({ params }: { params: { id: string } }) {
  redirect(`/si/lessons/lesson/${params.id}`);
}
