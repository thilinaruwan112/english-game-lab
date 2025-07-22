import { redirect } from 'next/navigation';

export default function ContactRootPage() {
  // This is a placeholder since direct access is not expected.
  // Redirect to a default language version of the page.
  redirect('/si/contact');
}
