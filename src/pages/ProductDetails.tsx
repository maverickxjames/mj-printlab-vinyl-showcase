import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Check, Truck, Shield, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById, getCollectionById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productId ? getProductById(productId) : undefined;
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/shop">
              <Button variant="hero">Browse Collections</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const collection = getCollectionById(product.category);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to={`/collections/${product.category}`} 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {collection?.title || 'Collection'}
            </Link>
          </div>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted shadow-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {!product.inStock && (
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-semibold">
                  Out of Stock
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                {collection?.title}
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-4xl font-bold text-primary">
                  ₹{product.price}
                </span>
                <span className="text-muted-foreground text-sm">incl. taxes</span>
              </div>

              {/* Features */}
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

              {/* Buy Button */}
              <Button
                variant="hero"
                size="xl"
                className="w-full mb-6"
                onClick={handleAddToCart}
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

              {/* Trust Badges */}
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
