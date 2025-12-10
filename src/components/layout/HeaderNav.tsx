
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Coffee, GlassWater, Hotel, Building2, UtensilsCrossed, ShoppingBag } from 'lucide-react';

const accommodationComponents: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
  {
    title: 'Hotels',
    href: '/businesses?category=Hotel',
    description: 'Find the perfect hotel for your stay, from luxury resorts to budget-friendly options.',
    icon: <Hotel className="h-4 w-4" />,
  },
  {
    title: 'Apartments',
    href: '/businesses?category=Apartment',
    description: 'Enjoy the comfort and privacy of a self-catering apartment.',
    icon: <Building2 className="h-4 w-4" />,
  },
];

const foodAndDrinkComponents: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
    {
        title: 'Restaurants',
        href: '/businesses?category=Restaurant',
        description: 'Discover the best dining experiences, from local tapas to fine dining.',
        icon: <UtensilsCrossed className="h-4 w-4" />,
    },
    {
        title: 'Bars',
        href: '/businesses?category=Bar',
        description: 'Find lively bars for cocktails, wine, and local atmosphere.',
        icon: <GlassWater className="h-4 w-4" />,
    },
    {
        title: 'Cafes',
        href: '/businesses?category=Cafe',
        description: 'Relax with a great cup of coffee and delicious pastries.',
        icon: <Coffee className="h-4 w-4" />,
    },
    {
        title: 'Takeaways',
        href: '/businesses?category=Takeaway',
        description: 'Grab a quick and tasty meal on the go.',
        icon: <ShoppingBag className="h-4 w-4" />,
    },
];

const navLinks = [
  { href: '/places', label: 'Places' },
  { href: '/events', label: 'Events' },
  { href: '/news', label: 'News' },
  { href: '/transport', label: 'Transport' },
  { href: '/map', label: 'Map' },
  { href: '/contact', label: 'Contact' },
];

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild active={pathname === '/'}>
            <Link href="/" className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Accommodation</NavigationMenuTrigger>
          <NavigationMenuContent>
             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {accommodationComponents.map((component) => (
                 <ListItem
                  key={component.title}
                  href={component.href}
                  title={component.title}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Food &amp; Drink</NavigationMenuTrigger>
          <NavigationMenuContent>
             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {foodAndDrinkComponents.map((component) => (
                <ListItem
                  key={component.title}
                  href={component.href}
                  title={component.title}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild active={pathname.startsWith(link.href)}>
                    <Link href={link.href} className={navigationMenuTriggerStyle()}>
                      {link.label}
                    </Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        ))}

      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string, icon: React.ReactNode }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
