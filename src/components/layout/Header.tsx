import Link from 'next/link';
import { Waves } from 'lucide-react';
import HeaderNav from './HeaderNav';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Waves className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Roquetas Explorer
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <HeaderNav />
          </nav>
        </div>
        
        <MobileNav />
        
        <Link href="/" className="flex items-center space-x-2 md:hidden">
            <Waves className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Roquetas Explorer</span>
        </Link>
      </div>
    </header>
  );
}
