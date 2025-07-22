// src/components/common/WhatsappButton.tsx
'use client';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react'; // Or your preferred icon library
import Link from 'next/link';

// Simple SVG for WhatsApp icon if you don't have it in lucide-react
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

export function WhatsappButton() {
  const whatsappNumber = "+94112345678"; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in your English classes."; // Optional pre-filled message
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </Button>
    </Link>
  );
}
