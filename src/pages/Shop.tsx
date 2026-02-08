import { useState } from 'react';
import { ArrowLeft, ShoppingBag, Check, Truck, Shield, RefreshCw, Plus, Minus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { collections, getProductsByCategory, getCollectionById, type Product } from '@/data/products';

type ViewState =
  | { type: 'collections' }
  | { type: 'products'; collectionId: string }
  | { type: 'detail'; product: Product };

const Shop = () => {
  const [view, setView] = useState<ViewState>({ type: 'collections' });
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Collections View */}
          {view.type === 'collections' && (
            <>
              <div className="mb-12">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  Our <span className="text-gradient-gold">Collections</span>
                </h1>
                <p className="text-muted-foreground mt-4 max-w-2xl">
                  Explore our carefully curated sticker collections. From fun expressions to spiritual art, find the perfect stickers for every occasion.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {collections.map((collection) => (
                  <button
                    key={collection.id}
                    onClick={() => setView({ type: 'products', collectionId: collection.id })}
                    className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${collection.color} border border-border/50 peel-effect text-left`}
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
                        <span className="text-sm font-semibold text-primary mb-2">{collection.items}</span>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-3">{collection.title}</h3>
                        <p className="text-muted-foreground mb-6">{collection.description}</p>
                        <span className="inline-flex items-center gap-2 text-primary font-semibold">
                          Explore Collection
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Products Listing View */}
          {view.type === 'products' && (() => {
            const collection = getCollectionById(view.collectionId);
            const products = getProductsByCategory(view.collectionId);
            return (
              <>
                <div className="mb-12">
                  <button
                    onClick={() => setView({ type: 'collections' })}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Collections
                  </button>
                  <div className={`rounded-3xl overflow-hidden bg-gradient-to-br ${collection?.color} p-8 md:p-12`}>
                    <span className="text-sm font-semibold text-primary mb-2 block">{collection?.items}</span>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                      {collection?.title}
                    </h1>
                    <p className="text-muted-foreground max-w-2xl">{collection?.description}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setView({ type: 'detail', product })}
                      className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left"
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
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-display text-2xl font-bold text-primary">₹{product.price}</span>
                          <span className="text-sm text-muted-foreground">View Details →</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            );
          })()}

          {/* Product Detail View */}
          {view.type === 'detail' && (() => {
            const product = view.product;
            const collection = getCollectionById(product.category);
            const isAdded = addedId === product.id;
            return (
              <>
                <div className="mb-8">
                  <button
                    onClick={() => setView({ type: 'products', collectionId: product.category })}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to {collection?.title || 'Collection'}
                  </button>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="relative">
                    <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted shadow-card">
                      <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    {!product.inStock && (
                      <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-semibold">
                        Out of Stock
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                      {collection?.title}
                    </span>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {product.name}
                    </h1>
                    <p className="text-muted-foreground text-lg mb-6">{product.description}</p>

                    <div className="flex items-baseline gap-3 mb-8">
                      <span className="font-display text-4xl font-bold text-primary">₹{product.price}</span>
                      <span className="text-muted-foreground text-sm">incl. taxes</span>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-4">Features</h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="hero"
                      size="xl"
                      className="w-full mb-6"
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-5 h-5" />
                          Added to Cart!
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-5 h-5" />
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </>
                      )}
                    </Button>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                          <Truck className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground">Free Shipping</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                          <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground">Quality Assured</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                          <RefreshCw className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground">Easy Returns</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
