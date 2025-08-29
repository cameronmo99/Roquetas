import { Waves } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Waves className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left font-headline">
            Roquetas Explorer
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Roquetas Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
