import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { collections, getProductsByCategory, getCollectionById } from '@/data/products';

const Collections = () => {
  const { collectionId } = useParams();

  // If no collection is specified, show all collections
  if (!collectionId) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Our <span className="text-gradient-gold">Collections</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                Explore our carefully curated sticker collections. From fun expressions to spiritual art, find the perfect stickers for every occasion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  to={`/collections/${collection.id}`}
                  className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${collection.color} border border-border/50 peel-effect`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
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
                      <span className="inline-flex items-center gap-2 text-primary font-semibold">
                        Explore Collection
                        <ShoppingBag className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Show products for a specific collection
  const collection = getCollectionById(collectionId);
  const products = getProductsByCategory(collectionId);

  if (!collection) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">Collection Not Found</h1>
            <p className="text-muted-foreground mb-8">The collection you're looking for doesn't exist.</p>
            <Link to="/collections">
              <Button variant="hero">View All Collections</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <Link to="/collections" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Link>
            <div className={`rounded-3xl overflow-hidden bg-gradient-to-br ${collection.color} p-8 md:p-12`}>
              <span className="text-sm font-semibold text-primary mb-2 block">{collection.items}</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                {collection.title}
              </h1>
              <p className="text-muted-foreground max-w-2xl">{collection.description}</p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                      <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-semibold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-primary">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
