'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpenCheck, Menu, Languages } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { useLanguage } from '@/context/language-context';

const navLinks = [
    { href: '/', label: { en: 'Home', si: 'මුල් පිටුව' } },
    { href: '/lessons', label: { en: 'Courses', si: 'පාඨමාලා' } },
    { href: '/about', label: { en: 'About Us', si: 'අප ගැන' } },
    { href: '/success-stories', label: { en: 'Success Stories', si: 'සාර්ථක කතා' } },
    { href: '/contact', label: { en: 'Contact', si: 'සම්බන්ධ වන්න' } },
    { href: '/register', label: { en: 'Register', si: 'ලියාපදිංචි වන්න' } },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  
  const getLocalizedPath = (path: string) => {
    return `/${language}${path}`;
  }
  
  const getLanguageToggledPath = (newLang: 'en' | 'si') => {
      const pathSegments = pathname.split('/').filter(Boolean);
      if (pathSegments.length > 0 && (pathSegments[0] === 'en' || pathSegments[0] === 'si')) {
          pathSegments[0] = newLang;
      } else {
          pathSegments.unshift(newLang);
      }
      return '/' + pathSegments.join('/');
  }

  const NavLink = ({ href, label }: { href: string; label: {en: string, si: string} }) => {
    const localizedHref = getLocalizedPath(href);
    const isActive = pathname === localizedHref || (href === '/' && pathname === `/${language}`);
    return (
        <Link
          href={localizedHref}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-primary font-bold" : "text-foreground/60"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {label[language]}
        </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={`/${language}`} className="flex items-center gap-2 font-bold">
            <BookOpenCheck className="h-6 w-6 text-primary" />
            <span className="font-headline">EnglishGameLab</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-start md:justify-center">
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => <NavLink key={link.href} href={link.href} label={link.label} />)}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Languages className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  <Link href={getLanguageToggledPath('en')} className="w-full">English</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('si')}>
                  <Link href={getLanguageToggledPath('si')} className="w-full">Sinhala</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                    <Link href={`/${language}`} className="flex items-center gap-2 font-bold mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                      <BookOpenCheck className="h-6 w-6 text-primary" />
                      <span className="font-headline">EnglishGameLab</span>
                    </Link>
                    <div className="flex flex-col space-y-4">
                      {navLinks.map(link => <NavLink key={link.href} href={link.href} label={link.label} />)}
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
