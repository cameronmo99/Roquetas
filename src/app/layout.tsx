import type { Metadata, Viewport } from 'next';
import { PT_Sans, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import AddToHomeScreenPrompt from '@/components/AddToHomeScreenPrompt';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-headline',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Roquetas Explorer',
  description: 'Your guide to restaurants, bars, cafes, and events in Roquetas de Mar.',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#3F51B5',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="preload" href="/images/Banner.png?v=2" as="image" />
        <meta name="theme-color" content="#3F51B5" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          poppins.variable,
          ptSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <AddToHomeScreenPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}
