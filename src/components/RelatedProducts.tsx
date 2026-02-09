import { ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import type { Product } from '@/data/products';

interface RelatedProductsProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const RelatedProducts = ({ products, onProductClick }: RelatedProductsProps) => {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  if (!products.length) return null;

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">You May Also Like</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => onProductClick(product)}
            className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-display text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-2">
                <span className="font-display text-lg font-bold text-primary">₹{product.price}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => handleAdd(e, product)}
                  disabled={!product.inStock}
                  className="h-8 w-8 p-0"
                >
                  {addedId === product.id ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <ShoppingBag className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
