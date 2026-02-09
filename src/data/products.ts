import stickerExpressions from '@/assets/sticker-expressions.png';
import stickerSpiritual from '@/assets/sticker-spiritual.png';
import stickerPhone from '@/assets/sticker-phone.png';
import stickerBottle from '@/assets/sticker-bottle.png';

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

export interface QAItem {
  id: string;
  question: string;
  answer: string;
  askedBy: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  features: string[];
  inStock: boolean;
  reviews: Review[];
  qa: QAItem[];
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  items: string;
  color: string;
}

const defaultReviews: Review[] = [
  { id: 'r1', author: 'Priya S.', rating: 5, date: 'Jan 15, 2026', title: 'Amazing quality!', body: 'The colors are vibrant and the adhesive is really strong. Stuck it on my laptop and it looks fantastic even after weeks.', helpful: 12, verified: true },
  { id: 'r2', author: 'Rahul M.', rating: 4, date: 'Jan 10, 2026', title: 'Great value for money', body: 'Good quality stickers at a reasonable price. The designs are unique and fun. Would buy again.', helpful: 8, verified: true },
  { id: 'r3', author: 'Ananya K.', rating: 5, date: 'Dec 28, 2025', title: 'Perfect gift!', body: 'Bought these as a gift for my friend and she absolutely loved them. The packaging was also very nice.', helpful: 5, verified: false },
];

const defaultQA: QAItem[] = [
  { id: 'q1', question: 'Are these stickers waterproof?', answer: 'Yes! All our stickers are made with premium waterproof vinyl that can withstand rain, splashes, and even dishwasher cycles.', askedBy: 'Sneha', date: 'Jan 5, 2026' },
  { id: 'q2', question: 'Can I remove them without leaving residue?', answer: 'Our stickers use a special adhesive that peels off cleanly from most surfaces. However, we recommend testing on a small area first for delicate surfaces.', askedBy: 'Arjun', date: 'Dec 20, 2025' },
  { id: 'q3', question: 'How long do they last outdoors?', answer: 'Our UV-resistant stickers last 3-5 years outdoors without fading. Indoor stickers last even longer!', askedBy: 'Meera', date: 'Dec 15, 2025' },
];

export const collections: Collection[] = [
  { id: 'expressions', title: 'Expression Stickers', description: 'Fun character expressions for every mood', image: stickerExpressions, items: '25+ designs', color: 'from-teal-light/20 to-primary/10' },
  { id: 'spiritual', title: 'Spiritual Collection', description: 'Beautiful Krishna and devotional art', image: stickerSpiritual, items: '40+ designs', color: 'from-gold/20 to-secondary/10' },
  { id: 'anime', title: 'Anime & Pop Culture', description: 'Your favorite characters ready to stick', image: stickerPhone, items: '100+ designs', color: 'from-primary/10 to-teal-light/20' },
  { id: 'custom', title: 'Custom Designs', description: 'Create your own unique stickers', image: stickerBottle, items: 'Unlimited', color: 'from-secondary/10 to-gold/20' },
];

export const products: Product[] = [
  // Expression Stickers
  { id: 'exp-001', name: 'Happy Face Pack', description: 'A collection of joyful expressions perfect for spreading positivity. Includes 5 unique happy face designs.', price: 149, originalPrice: 249, image: stickerExpressions, images: [stickerExpressions, stickerPhone, stickerBottle], category: 'expressions', features: ['Waterproof vinyl', 'UV resistant', 'Easy peel & stick', 'Dishwasher safe'], inStock: true, reviews: defaultReviews, qa: defaultQA },
  { id: 'exp-002', name: 'Mood Swings Bundle', description: 'Express every emotion with this versatile pack. From excited to thoughtful, we have got you covered.', price: 199, originalPrice: 349, image: stickerExpressions, images: [stickerExpressions, stickerSpiritual], category: 'expressions', features: ['Premium matte finish', 'Scratch resistant', 'Removable adhesive', '8 stickers included'], inStock: true, reviews: defaultReviews, qa: defaultQA },
  { id: 'exp-003', name: 'Cute Chibi Set', description: 'Adorable chibi-style character expressions that add charm to any surface.', price: 179, originalPrice: 299, image: stickerExpressions, images: [stickerExpressions, stickerBottle], category: 'expressions', features: ['Glossy finish', 'Die-cut precision', 'Bubble-free application', '6 designs'], inStock: true, reviews: defaultReviews, qa: defaultQA },
  // Spiritual Collection
  { id: 'spi-001', name: 'Krishna Divine Pack', description: 'Beautiful Lord Krishna stickers featuring traditional art. Perfect for spiritual decoration.', price: 249, originalPrice: 399, image: stickerSpiritual, images: [stickerSpiritual, stickerExpressions, stickerBottle], category: 'spiritual', features: ['Gold foil accents', 'Premium vinyl', 'Sacred designs', '10 stickers'], inStock: true, reviews: defaultReviews, qa: defaultQA },
  { id: 'spi-002', name: 'Om Mandala Set', description: 'Intricate mandala designs with Om symbols. Bring peace and harmony to your space.', price: 199, originalPrice: 299, image: stickerSpiritual, images: [stickerSpiritual, stickerPhone], category: 'spiritual', features: ['Holographic finish', 'Large 4-inch size', 'Temple-grade quality', '5 designs'], inStock: true, reviews: defaultReviews, qa: defaultQA },
  { id: 'spi-003', name: 'Devotional Classics', description: 'Classic devotional imagery including Ganesha, Hanuman, and more sacred figures.', price: 299, originalPrice: 499, image: stickerSpiritual, images: [stickerSpiritual, stickerExpressions], category: 'spiritual', features: ['Museum-quality print', 'Archival inks', 'Blessed designs', '12 stickers'], inStock: false, reviews: defaultReviews, qa: defaultQA },
  // Anime & Pop Culture
  { id: 'ani-001', name: 'Anime Legends Pack', description: 'Popular anime character stickers from your favorite shows. Must-have for any otaku.', price: 299, originalPrice: 449, image: stickerPhone, images: [stickerPhone, stickerExpressions, stickerBottle], category: 'anime', features: ['Full color print', 'Laptop friendly', 'Phone case ready', '15 stickers'], inStock: true, reviews: defaultReviews, qa: defaultQA },
  { id: 'ani-002', name: 'Gaming Heroes Set', description: 'Iconic gaming characters and logos. Level up your gear with these awesome stickers.', price: 249, originalPrice: 399, image: stickerPhone, images: [stickerPhone, stickerSpiritual], category: 'anime', features: ['Controller safe', 'Console compatible', 'High-res graphics', '10 stickers'], inStock: true, reviews: defaultReviews, qa: defaultQA },
  { id: 'ani-003', name: 'Meme Lords Bundle', description: 'Trending memes and internet culture icons. Stay relevant with these viral designs.', price: 179, originalPrice: 299, image: stickerPhone, images: [stickerPhone, stickerBottle], category: 'anime', features: ['Updated designs', 'Social media ready', 'Shareable moments', '20 stickers'], inStock: true, reviews: defaultReviews, qa: defaultQA },
  // Custom Designs
  { id: 'cus-001', name: 'Custom Photo Sticker', description: 'Turn your favorite photo into a premium vinyl sticker. Upload any image and we will create magic.', price: 99, originalPrice: 149, image: stickerBottle, images: [stickerBottle, stickerExpressions], category: 'custom', features: ['Any photo accepted', 'Professional editing', 'Multiple sizes', 'Single sticker'], inStock: true, reviews: defaultReviews, qa: defaultQA },
  { id: 'cus-002', name: 'Custom Pack (5 pcs)', description: 'Get 5 custom stickers of your choice. Perfect for personal branding or gifts.', price: 399, originalPrice: 599, image: stickerBottle, images: [stickerBottle, stickerPhone, stickerSpiritual], category: 'custom', features: ['Bulk discount', 'Mixed designs', 'Gift wrapping', '5 stickers'], inStock: true, reviews: defaultReviews, qa: defaultQA },
  { id: 'cus-003', name: 'Business Branding Kit', description: 'Professional stickers for your business. Includes logo stickers, labels, and promotional designs.', price: 999, originalPrice: 1499, image: stickerBottle, images: [stickerBottle, stickerExpressions, stickerPhone], category: 'custom', features: ['Brand consultation', 'Multiple formats', 'Commercial use', '50 stickers'], inStock: true, reviews: defaultReviews, qa: defaultQA },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};

export const getProductById = (productId: string): Product | undefined => {
  return products.find((product) => product.id === productId);
};

export const getCollectionById = (collectionId: string): Collection | undefined => {
  return collections.find((collection) => collection.id === collectionId);
};

export const getRelatedProducts = (product: Product, limit = 4): Product[] => {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .concat(products.filter((p) => p.category !== product.category))
    .slice(0, limit);
};
