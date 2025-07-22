'use client';

import Link from 'next/link';
import { BookOpenCheck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export function Footer() {
  const { language } = useLanguage();
  
  const t = {
    en: {
      description: "A fun and interactive way for Sri Lankan students to master English for their O/L exams and beyond.",
      quickLinks: "Quick Links",
      home: "Home",
      lessons: "Lessons",
      pronunciation: "Pronunciation",
      progress: "Progress",
      support: "Support",
      contact: "Contact",
      faq: "FAQ",
      privacy: "Privacy Policy",
      copyright: "© {year} EnglishGameLab. All rights reserved.",
    },
    si: {
      description: "ශ්‍රී ලාංකික සිසුන්ට O/L විභාගය සහ ඉන් ඔබ්බට ඉංග්‍රීසි ප්‍රගුණ කිරීම සඳහා විනෝදජනක සහ අන්තර්ක්‍රියාකාරී ක්‍රමයක්.",
      quickLinks: "ඉක්මන් සබැඳි",
      home: "මුල් පිටුව",
      lessons: "පාඩම්",
      pronunciation: "උච්චාරණය",
      progress: "ප්‍රගතිය",
      support: "සහාය",
      contact: "සම්බන්ධ වන්න",
      faq: "නිතර අසන ප්‍රශ්න",
      privacy: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
      copyright: "© {year} EnglishGameLab. සියලුම හිමිකම් ඇවිරිණි.",
    }
  }

  const content = t[language] || t.si;

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <Link href={`/${language}`} className="flex items-center gap-2 font-bold text-xl">
              <BookOpenCheck className="h-7 w-7 text-primary" />
              <span className="font-headline">EnglishGameLab</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {content.description}
            </p>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">{content.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${language}`} className="text-sm text-muted-foreground hover:text-primary">{content.home}</Link></li>
              <li><Link href={`/${language}/lessons`} className="text-sm text-muted-foreground hover:text-primary">{content.lessons}</Link></li>
              <li><Link href={`/${language}/pronunciation`} className="text-sm text-muted-foreground hover:text-primary">{content.pronunciation}</Link></li>
              <li><Link href={`/${language}/progress`} className="text-sm text-muted-foreground hover:text-primary">{content.progress}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">{content.support}</h3>
            <ul className="space-y-2">
              <li><Link href={`/${language}/contact`} className="text-sm text-muted-foreground hover:text-primary">{content.contact}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">{content.faq}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">{content.privacy}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>{content.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
}
