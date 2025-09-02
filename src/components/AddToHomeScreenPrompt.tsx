'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Define the BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}


export default function AddToHomeScreenPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show the custom prompt
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }
    // Hide our custom prompt
    setIsVisible(false);
    // Show the browser's install prompt.
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt.
    await deferredPrompt.userChoice;
    // We've used the prompt, and can't use it again, so clear it.
    setDeferredPrompt(null);
  };

  const handleDismissClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Download className="h-5 w-5" /> Install the App
          </CardTitle>
          <CardDescription>
            Get the full experience. Add Roquetas Explorer to your home screen for quick access and offline use.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={handleDismissClick}>
                Not now
            </Button>
            <Button size="sm" onClick={handleInstallClick}>
                Install
            </Button>
        </CardContent>
        <button onClick={handleDismissClick} className="absolute right-2 top-2 rounded-full p-1 transition-colors hover:bg-muted">
            <X className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only">Dismiss</span>
        </button>
      </Card>
    </div>
  );
}
