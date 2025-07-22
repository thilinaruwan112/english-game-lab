'use client';

import Link from 'next/link';
import { BookOpenCheck } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <BookOpenCheck className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">EnglishGameLab</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EnglishGameLab. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <Link href={`/${language}/contact`} className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
             <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
