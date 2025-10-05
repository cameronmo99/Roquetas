'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';

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

export default function MobileNav() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
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
    </div>
  );
}
