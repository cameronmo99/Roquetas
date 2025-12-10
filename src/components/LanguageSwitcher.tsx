'use client';

import { useState } from 'react';
import { Languages } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const locales = ['en', 'es', 'ca', 'fr', 'de'];
const languageNames: { [key: string]: string } = {
    en: 'English',
    es: 'Español',
    ca: 'Català',
    fr: 'Français',
    de: 'Deutsch',
};

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState('en');

  // This component is now a placeholder.
  // The i18n functionality has been temporarily removed to fix build errors.
  const handleLocaleChange = (newLocale: string) => {
    console.log('Language change to', newLocale, 'is currently disabled.');
    // In a real implementation, you would use a router to change the locale.
    // e.g., router.push(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change language (disabled)">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={locale} onValueChange={handleLocaleChange}>
          {locales.map((loc) => (
              <DropdownMenuRadioItem key={loc} value={loc}>
                {languageNames[loc] || loc}
              </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
