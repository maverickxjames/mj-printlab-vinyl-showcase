import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Check, Truck, Shield, RefreshCw, Star, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductImageGallery from '@/components/ProductImageGallery';
import ReviewSection from '@/components/ReviewSection';
import QASection from '@/components/QASection';
import RelatedProducts from '@/components/RelatedProducts';
import {
  getProductById,
  getCollectionById,
  getReviewsByProductId,
  getQAByProductId,
  getRelatedProducts,
} from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productId ? getProductById(productId) : undefined;
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity);
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
  const reviews = getReviewsByProductId(product.id);
  const questions = getQAByProductId(product.id);
  const relatedProducts = getRelatedProducts(product.id);
  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

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

          {/* Product Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div className="relative">
              <ProductImageGallery images={product.images} productName={product.name} />
              {!product.inStock && (
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-semibold z-10">
                  Out of Stock
                </div>
              )}
              {discountPercent > 0 && (
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1.5 rounded-full text-sm font-bold z-10 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  {discountPercent}% OFF
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                {collection?.title}
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                {product.name}
              </h1>

              {/* Rating Badge */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-1.5 bg-secondary/10 px-3 py-1.5 rounded-full">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-semibold text-sm text-foreground">{product.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">{product.reviewCount} reviews</span>
              </div>

              <p className="text-muted-foreground text-lg mb-6">{product.description}</p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-4xl font-bold text-primary">₹{product.price}</span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="font-display text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="text-sm font-semibold text-destructive bg-destructive/10 px-2.5 py-1 rounded-full">
                    Save ₹{product.originalPrice! - product.price}
                  </span>
                )}
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

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-semibold text-foreground text-sm">Quantity:</span>
                <div className="flex items-center border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors text-foreground font-bold"
                  >
                    −
                  </button>
                  <span className="w-12 h-10 flex items-center justify-center font-semibold text-foreground border-x border-border">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors text-foreground font-bold"
                  >
                    +
                  </button>
                </div>
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
                    {product.inStock ? `Add to Cart — ₹${product.price * quantity}` : 'Out of Stock'}
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

          {/* Product Description Section */}
          <section className="py-12 border-t border-border">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Product Description
            </h2>
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {product.longDescription || product.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={product.images[1] || product.images[0]}
                    alt={`${product.name} detail`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <ReviewSection reviews={reviews} rating={product.rating} reviewCount={product.reviewCount} />

          {/* Q&A Section */}
          <QASection questions={questions} />

          {/* Related Products */}
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
