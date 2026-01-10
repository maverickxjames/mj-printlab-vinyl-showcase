import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import stickerExpressions from '@/assets/sticker-expressions.png';
import stickerSpiritual from '@/assets/sticker-spiritual.png';
import stickerPhone from '@/assets/sticker-phone.png';
import stickerBottle from '@/assets/sticker-bottle.png';

const collections = [
  {
    title: 'Expression Stickers',
    description: 'Fun character expressions for every mood',
    image: stickerExpressions,
    items: '25+ designs',
    color: 'from-teal-light/20 to-primary/10',
  },
  {
    title: 'Spiritual Collection',
    description: 'Beautiful Krishna and devotional art',
    image: stickerSpiritual,
    items: '40+ designs',
    color: 'from-gold/20 to-secondary/10',
  },
  {
    title: 'Anime & Pop Culture',
    description: 'Your favorite characters ready to stick',
    image: stickerPhone,
    items: '100+ designs',
    color: 'from-primary/10 to-teal-light/20',
  },
  {
    title: 'Custom Designs',
    description: 'Create your own unique stickers',
    image: stickerBottle,
    items: 'Unlimited',
    color: 'from-secondary/10 to-gold/20',
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Collections</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Find Your Perfect <span className="text-gradient-gold">Stickers</span>
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            View All Collections
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${collection.color} border border-border/50 peel-effect`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center md:w-1/2">
                  <span className="text-sm font-semibold text-primary mb-2">
                    {collection.items}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {collection.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {collection.description}
                  </p>
                  <Button variant="hero" size="default" className="self-start">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
