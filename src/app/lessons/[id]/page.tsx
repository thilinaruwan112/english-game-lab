import { redirect } from 'next/navigation';

export default function LessonRootPage({ params }: { params: { id: string } }) {
  redirect(`/si/lessons/${params.id}`);
}
