'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

import { useTheme as useNextTheme } from 'next-themes';

const ThemeContext = React.createContext<
  | {
      theme: string;
      setTheme: (theme: string) => void;
      isDynamic: boolean;
    }
  | undefined
>(undefined);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider {...props}>
            <DynamicThemeProvider>{children}</DynamicThemeProvider>
        </NextThemesProvider>
    )
}


function DynamicThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme: nextTheme, setTheme: setNextTheme } = useNextTheme();
    const [dynamicTheme, setDynamicTheme] = React.useState('light');
    const [mounted, setMounted] = React.useState(false);
    const isDynamic = nextTheme === 'system';

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const getDynamicTheme = () => {
        const hours = new Date().getHours();
        if (hours >= 5 && hours < 8) return 'sunrise'; // Sunrise: 5am - 8am
        if (hours >= 8 && hours < 18) return 'light'; // Day: 8am - 6pm
        if (hours >= 18 && hours < 21) return 'sunset'; // Sunset: 6pm - 9pm
        return 'dark'; // Night: 9pm - 5am
    };

    React.useEffect(() => {
        if (!mounted || !isDynamic) return;

        const applyTheme = () => {
            const newTheme = getDynamicTheme();
            setDynamicTheme(newTheme);
            const root = window.document.documentElement;
            root.classList.remove('light', 'dark', 'sunrise', 'sunset');
            root.classList.add(newTheme);
        }

        applyTheme();

        const interval = setInterval(applyTheme, 60000); // Check every minute
        return () => clearInterval(interval);

    }, [isDynamic, mounted]);

     React.useEffect(() => {
        if (!mounted || isDynamic) return;
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark', 'sunrise', 'sunset');
        if (nextTheme) {
            root.classList.add(nextTheme);
        }
    }, [nextTheme, isDynamic, mounted]);


    const theme = isDynamic ? dynamicTheme : nextTheme ?? 'light';
    const setTheme = (newTheme: string) => {
        if (newTheme === 'dynamic') {
             setNextTheme('system');
        } else {
             setNextTheme(newTheme);
        }
    }

    const value = { theme, setTheme, isDynamic };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
