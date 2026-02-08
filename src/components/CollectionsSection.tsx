import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { collections } from '@/data/products';

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
          <Link to="/shop">
            <Button variant="outline" className="self-start md:self-auto">
              View All Collections
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
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
                  <Link to="/shop">
                    <Button variant="hero" size="default" className="self-start">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
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
