import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '@/data/products';

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (products.length === 0) return null;

  return (
    <section className="py-12 border-t border-border">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
        You Might Also Like
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                  <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Out of Stock
                  </span>
                </div>
              )}
              {product.originalPrice && product.originalPrice > product.price && (
                <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2.5 py-1 rounded-full text-xs font-bold">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-display text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-1.5 mb-2">
                <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
                <span className="text-xs font-medium text-foreground">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold text-primary">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
