'use client';

import Link from 'next/link';
import { Menu, Waves } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from '@/components/ui/sheet';
import HeaderNav from './HeaderNav';

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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
        
        {/* Mobile Nav */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader className="pl-6 text-left">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="sr-only">Main navigation menu for Roquetas Explorer.</SheetDescription>
            </SheetHeader>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                    <HeaderNav onLinkClick={() => setIsSheetOpen(false)} />
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
