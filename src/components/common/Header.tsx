'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpenCheck, Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/components/theme-switcher';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/lessons', label: 'Lessons' },
  { href: '/pronunciation', label: 'Pronunciation' },
  { href: '/progress', label: 'Progress' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary font-bold" : "text-foreground/60"
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <BookOpenCheck className="h-6 w-6 text-primary" />
            <span className="font-headline">EnglishGameLab</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-start md:justify-center">
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => <NavLink key={link.href} {...link} />)}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end gap-2">
            <ThemeSwitcher />
            <div className='md:hidden'>
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="p-4">
                    <Link href="/" className="flex items-center gap-2 font-bold mb-8">
                      <BookOpenCheck className="h-6 w-6 text-primary" />
                      <span className="font-headline">EnglishGameLab</span>
                    </Link>
                    <div className="flex flex-col space-y-4">
                      {navLinks.map(link => <NavLink key={link.href} {...link} />)}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
