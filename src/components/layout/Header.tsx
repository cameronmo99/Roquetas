'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Waves } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/businesses', label: 'Businesses' },
  { href: '/events', label: 'Events' },
  { href: '/map', label: 'Map' },
];

export default function Header() {
  const pathname = usePathname();

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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              className="mb-4 flex items-center"
            >
              <Waves className="mr-2 h-6 w-6 text-primary" />
              <span className="font-bold font-headline">Roquetas Explorer</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-label={`Navigate to ${link.label}`}
                            className={cn(
                                'transition-colors hover:text-foreground/80',
                                pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center space-x-2 md:hidden">
            <Waves className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Roquetas Explorer</span>
        </Link>
      </div>
    </header>
  );
}
