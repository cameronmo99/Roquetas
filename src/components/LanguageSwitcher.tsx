'use client';

import { useLocale } from 'next-intl';
import { Link } from 'next-intl/navigation';
import { usePathname } from 'next/navigation';
import { Languages } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { locales } from '@/i18n';

const languageNames: { [key: string]: string } = {
    en: 'English',
    es: 'Español',
    ca: 'Català',
    fr: 'Français',
    de: 'Deutsch',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={locale}>
          {locales.map((loc) => (
            <Link href={pathname} locale={loc} key={loc} passHref>
              <DropdownMenuRadioItem value={loc}>
                {languageNames[loc] || loc}
              </DropdownMenuRadioItem>
            </Link>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
