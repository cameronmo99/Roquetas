import Link from 'next/link';
import { Waves } from 'lucide-react';
import HeaderNav from './HeaderNav';
import MobileNav from '../MobileNav';
import { ThemeToggle } from '../ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Waves className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">
            Roquetas Explorer
          </span>
        </Link>
        
        <div className="mr-auto hidden md:flex">
            <HeaderNav />
        </div>
        
        <div className="flex flex-1 items-center justify-end md:hidden">
          <ThemeToggle />
          <LanguageSwitcher />
          <MobileNav />
        </div>
        
        <div className="hidden items-center justify-end gap-2 md:flex">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}