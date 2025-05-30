import type React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PageFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-10 mt-16 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Button variant="ghost" size="icon" asChild className="text-secondary-foreground hover:text-primary">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-secondary-foreground hover:text-primary">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-secondary-foreground hover:text-primary">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Riohacha Stays. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted-foreground/80 mt-1">
          Diseñado con ♥ en La Guajira.
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
