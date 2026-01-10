import { Droplets, Zap, Shield, Hand, Sparkles, Sun } from 'lucide-react';

const features = [
  {
    icon: Hand,
    title: 'Peel & Stick',
    description: 'Simply peel off the backing and stick. No tools, no mess, no fuss.',
  },
  {
    icon: Droplets,
    title: 'Waterproof',
    description: 'Premium vinyl that withstands water, rain, and even the dishwasher.',
  },
  {
    icon: Shield,
    title: 'Scratch Resistant',
    description: 'Durable finish that protects your stickers from everyday wear.',
  },
  {
    icon: Sparkles,
    title: 'Vibrant Colors',
    description: 'High-quality printing that keeps colors bright and beautiful.',
  },
  {
    icon: Zap,
    title: 'Self-Adhesive',
    description: 'Strong adhesive that sticks firmly but removes cleanly.',
  },
  {
    icon: Sun,
    title: 'UV Protected',
    description: 'Fade-resistant inks that look great even in direct sunlight.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full border-4 border-primary" />
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full border-4 border-gold" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Premium Quality You Can <span className="text-gradient-primary">Feel</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our vinyl stickers are crafted with care using the finest materials for lasting beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
