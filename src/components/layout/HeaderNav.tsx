'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/businesses', label: 'Businesses' },
  { href: '/events', label: 'Events' },
  { href: '/map', label: 'Map' },
];

interface HeaderNavProps {
  onLinkClick?: () => void;
}

export default function HeaderNav({ onLinkClick }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === link.href ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
