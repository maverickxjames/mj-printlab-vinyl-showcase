import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import stickerCollection from '@/assets/sticker-collection.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/40 to-cream" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-4 h-4 rounded-full bg-gold float-animation opacity-60" />
      <div className="absolute top-48 right-20 w-6 h-6 rounded-full bg-primary float-animation-delayed opacity-40" />
      <div className="absolute bottom-40 left-1/4 w-3 h-3 rounded-full bg-secondary float-animation-slow opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft mb-6 animate-fade-in-up">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-medium text-muted-foreground">Premium Vinyl Quality</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Stick Your
              <br />
              <span className="text-gradient-primary">Personality</span>
              <br />
              Everywhere
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Premium vinyl stickers that are waterproof, scratch-resistant, and super easy to apply. 
              <span className="text-primary font-semibold"> Peel, stick, done!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl">
                Explore Collections
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Custom Orders
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Designs</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">5★</p>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-gold/20 to-primary/20 blur-3xl rounded-full" />
              
              {/* Main Image */}
              <img 
                src={stickerCollection} 
                alt="Premium Vinyl Sticker Collection" 
                className="relative z-10 w-full float-animation drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
