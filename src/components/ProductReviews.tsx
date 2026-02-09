import { useState } from 'react';
import { Star, ThumbsUp, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  helpful: number;
  verified: boolean;
}

interface ProductReviewsProps {
  reviews: Review[];
}

const StarRating = ({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) => {
  const starSize = size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${starSize} ${
            star <= rating ? 'fill-secondary text-secondary' : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  );
};

const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  const [helpfulIds, setHelpfulIds] = useState<Set<string>>(new Set());

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '0';

  const ratingCounts = [5, 4, 3, 2, 1].map(
    (star) => reviews.filter((r) => r.rating === star).length
  );

  const markHelpful = (id: string) => {
    setHelpfulIds((prev) => new Set(prev).add(id));
  };

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">Customer Reviews</h2>

      {/* Summary */}
      <div className="flex flex-col sm:flex-row gap-8 mb-8 p-6 bg-card rounded-2xl border border-border/50">
        <div className="flex flex-col items-center justify-center">
          <span className="font-display text-5xl font-bold text-foreground">{avgRating}</span>
          <StarRating rating={Math.round(Number(avgRating))} size="lg" />
          <span className="text-sm text-muted-foreground mt-1">{reviews.length} reviews</span>
        </div>
        <div className="flex-1 space-y-2">
          {[5, 4, 3, 2, 1].map((star, i) => (
            <div key={star} className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground w-8">{star}★</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary rounded-full transition-all"
                  style={{
                    width: reviews.length ? `${(ratingCounts[i] / reviews.length) * 100}%` : '0%',
                  }}
                />
              </div>
              <span className="text-sm text-muted-foreground w-8">{ratingCounts[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="p-6 bg-card rounded-2xl border border-border/50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{review.author}</span>
                    {review.verified && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
            <p className="text-muted-foreground text-sm mb-4">{review.body}</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => markHelpful(review.id)}
              disabled={helpfulIds.has(review.id)}
              className="text-muted-foreground hover:text-primary"
            >
              <ThumbsUp className="w-4 h-4 mr-1" />
              Helpful ({review.helpful + (helpfulIds.has(review.id) ? 1 : 0)})
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
