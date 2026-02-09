import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, X } from 'lucide-react';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    const itemsList = items
      .map(item => `• ${item.product.name} x${item.quantity} — ₹${item.product.price * item.quantity}`)
      .join('\n');
    const message = `Hi! I'd like to order:\n\n${itemsList}\n\nTotal: ₹${totalPrice}\n\nPlease confirm my order.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md bg-background border-l border-border">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-display text-xl flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Cart is empty</h3>
            <p className="text-muted-foreground text-sm">Add some awesome stickers to get started!</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 p-3 rounded-xl bg-card border border-border/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-foreground text-sm truncate">
                      {product.name}
                    </h4>
                    <p className="text-primary font-bold text-sm mt-1">₹{product.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-7 h-7 rounded-md bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                      >
                        <Minus className="w-3 h-3 text-foreground" />
                      </button>
                      <span className="text-sm font-semibold text-foreground w-6 text-center">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-7 h-7 rounded-md bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                      >
                        <Plus className="w-3 h-3 text-foreground" />
                      </button>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="ml-auto w-7 h-7 rounded-md flex items-center justify-center hover:bg-destructive/10 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5 text-destructive" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-display font-bold text-foreground text-sm">
                      ₹{product.price * quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <SheetFooter className="border-t border-border pt-4 flex-col gap-3">
              <div className="flex justify-between items-center w-full">
                <span className="text-muted-foreground font-medium">Total</span>
                <span className="font-display text-2xl font-bold text-primary">₹{totalPrice}</span>
              </div>
              <Button variant="hero" size="lg" className="w-full" onClick={handleCheckout}>
                <ShoppingBag className="w-5 h-5" />
                Checkout via WhatsApp
              </Button>
              <Button variant="ghost" size="sm" className="w-full text-muted-foreground" onClick={clearCart}>
                <Trash2 className="w-4 h-4" />
                Clear Cart
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
