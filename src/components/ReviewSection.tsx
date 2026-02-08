import { Star, ThumbsUp, BadgeCheck } from 'lucide-react';
import { Review } from '@/data/products';

interface ReviewSectionProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

const StarRating = ({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) => {
  const sizeClass = size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClass} ${
            star <= rating
              ? 'fill-secondary text-secondary'
              : star - 0.5 <= rating
              ? 'fill-secondary/50 text-secondary'
              : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  );
};

const ReviewSection = ({ reviews, rating, reviewCount }: ReviewSectionProps) => {
  // Rating distribution (mock)
  const distribution = [
    { stars: 5, percent: 72 },
    { stars: 4, percent: 18 },
    { stars: 3, percent: 6 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 1 },
  ];

  return (
    <section className="py-12 border-t border-border">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {/* Overall Rating */}
        <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
          <div className="font-display text-5xl font-bold text-foreground mb-2">{rating}</div>
          <StarRating rating={rating} size="lg" />
          <p className="text-muted-foreground text-sm mt-2">Based on {reviewCount} reviews</p>
        </div>

        {/* Rating Distribution */}
        <div className="md:col-span-2 bg-card rounded-2xl p-6 border border-border/50">
          <div className="space-y-3">
            {distribution.map(({ stars, percent }) => (
              <div key={stars} className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground w-12">{stars} star</span>
                <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-secondary transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground w-10 text-right">{percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Cards */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-card rounded-2xl p-6 border border-border/50 transition-shadow hover:shadow-soft"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{review.avatar}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground text-sm">{review.author}</span>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <h4 className="font-display font-semibold text-foreground mb-1">{review.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{review.comment}</p>
            <div className="mt-4 flex items-center gap-2">
              <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-full bg-muted/50 hover:bg-primary/10">
                <ThumbsUp className="w-3.5 h-3.5" />
                Helpful ({review.helpful})
              </button>
            </div>
          </div>
        ))}
      </div>

      {reviews.length === 0 && (
        <div className="text-center py-12 bg-card rounded-2xl border border-border/50">
          <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
        </div>
      )}
    </section>
  );
};

export default ReviewSection;
