import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              MJ <span className="text-primary">PrintLab</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#collections" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Collections
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#howto" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              How to Apply
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="default">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#collections" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Collections
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Features
              </a>
              <a href="#howto" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                How to Apply
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Contact
              </a>
              <Button variant="hero" className="mt-2">
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
