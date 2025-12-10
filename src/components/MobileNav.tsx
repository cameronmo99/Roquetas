'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Hotel, Building2, UtensilsCrossed, GlassWater, Coffee, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const accommodationLinks = [
  { href: '/businesses?category=Hotel', label: 'Hotels', icon: <Hotel className="h-4 w-4" /> },
  { href: '/businesses?category=Apartment', label: 'Apartments', icon: <Building2 className="h-4 w-4" /> },
];

const foodAndDrinkLinks = [
  { href: '/businesses?category=Restaurant', label: 'Restaurants', icon: <UtensilsCrossed className="h-4 w-4" /> },
  { href: '/businesses?category=Bar', label: 'Bars', icon: <GlassWater className="h-4 w-4" /> },
  { href: '/businesses?category=Cafe', label: 'Cafes', icon: <Coffee className="h-4 w-4" /> },
  { href: '/businesses?category=Takeaway', label: 'Takeaways', icon: <ShoppingBag className="h-4 w-4" /> },
];

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/places', label: 'Places' },
  { href: '/events', label: 'Events' },
  { href: '/news', label: 'News' },
  { href: '/transport', label: 'Transport' },
  { href: '/map', label: 'Map' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      onClick={handleLinkClick}
      className={cn(
        'flex items-center p-2 text-lg font-medium rounded-md hover:bg-accent',
        pathname === href ? 'bg-accent/80' : ''
      )}
    >
      {children}
    </Link>
  );

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open navigation menu">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-xs p-0">
          <SheetHeader className="border-b p-4 text-left">
            <SheetTitle className="font-headline">Roquetas Explorer</SheetTitle>
            <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
          </SheetHeader>
          <div className="h-full overflow-y-auto p-4">
            <nav className="flex flex-col gap-1">
              <NavLink href="/">Home</NavLink>

              <Accordion type="multiple" className="w-full">
                <AccordionItem value="food-drink" className="border-b-0">
                  <AccordionTrigger className="p-2 text-lg font-medium rounded-md hover:bg-accent hover:no-underline [&[data-state=open]]:bg-accent/80">
                    Food &amp; Drink
                  </AccordionTrigger>
                  <AccordionContent className="pl-4">
                    <div className="flex flex-col gap-1 pt-2">
                        {foodAndDrinkLinks.map((link) => (
                            <NavLink key={link.href} href={link.href}>
                                {link.icon}
                                <span className="ml-2">{link.label}</span>
                            </NavLink>
                        ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="accommodation" className="border-b-0">
                  <AccordionTrigger className="p-2 text-lg font-medium rounded-md hover:bg-accent hover:no-underline [&[data-state=open]]:bg-accent/80">
                    Accommodation
                  </AccordionTrigger>
                  <AccordionContent className="pl-4">
                    <div className="flex flex-col gap-1 pt-2">
                        {accommodationLinks.map((link) => (
                            <NavLink key={link.href} href={link.href}>
                                {link.icon}
                                <span className="ml-2">{link.label}</span>
                            </NavLink>
                        ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {mainLinks.slice(1).map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
