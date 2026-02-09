import stickerExpressions from '@/assets/sticker-expressions.png';
import stickerSpiritual from '@/assets/sticker-spiritual.png';
import stickerPhone from '@/assets/sticker-phone.png';
import stickerBottle from '@/assets/sticker-bottle.png';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  inStock: boolean;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  items: string;
  color: string;
}

export const collections: Collection[] = [
  {
    id: 'expressions',
    title: 'Expression Stickers',
    description: 'Fun character expressions for every mood',
    image: stickerExpressions,
    items: '25+ designs',
    color: 'from-teal-light/20 to-primary/10',
  },
  {
    id: 'spiritual',
    title: 'Spiritual Collection',
    description: 'Beautiful Krishna and devotional art',
    image: stickerSpiritual,
    items: '40+ designs',
    color: 'from-gold/20 to-secondary/10',
  },
  {
    id: 'anime',
    title: 'Anime & Pop Culture',
    description: 'Your favorite characters ready to stick',
    image: stickerPhone,
    items: '100+ designs',
    color: 'from-primary/10 to-teal-light/20',
  },
  {
    id: 'custom',
    title: 'Custom Designs',
    description: 'Create your own unique stickers',
    image: stickerBottle,
    items: 'Unlimited',
    color: 'from-secondary/10 to-gold/20',
  },
];

export const products: Product[] = [
  // Expression Stickers
  {
    id: 'exp-001',
    name: 'Happy Face Pack',
    description: 'A collection of joyful expressions perfect for spreading positivity. Includes 5 unique happy face designs.',
    price: 149,
    image: stickerExpressions,
    category: 'expressions',
    features: ['Waterproof vinyl', 'UV resistant', 'Easy peel & stick', 'Dishwasher safe'],
    inStock: true,
  },
  {
    id: 'exp-002',
    name: 'Mood Swings Bundle',
    description: 'Express every emotion with this versatile pack. From excited to thoughtful, we have got you covered.',
    price: 199,
    image: stickerExpressions,
    category: 'expressions',
    features: ['Premium matte finish', 'Scratch resistant', 'Removable adhesive', '8 stickers included'],
    inStock: true,
  },
  {
    id: 'exp-003',
    name: 'Cute Chibi Set',
    description: 'Adorable chibi-style character expressions that add charm to any surface.',
    price: 179,
    image: stickerExpressions,
    category: 'expressions',
    features: ['Glossy finish', 'Die-cut precision', 'Bubble-free application', '6 designs'],
    inStock: true,
  },
  // Spiritual Collection
  {
    id: 'spi-001',
    name: 'Krishna Divine Pack',
    description: 'Beautiful Lord Krishna stickers featuring traditional art. Perfect for spiritual decoration.',
    price: 249,
    image: stickerSpiritual,
    category: 'spiritual',
    features: ['Gold foil accents', 'Premium vinyl', 'Sacred designs', '10 stickers'],
    inStock: true,
  },
  {
    id: 'spi-002',
    name: 'Om Mandala Set',
    description: 'Intricate mandala designs with Om symbols. Bring peace and harmony to your space.',
    price: 199,
    image: stickerSpiritual,
    category: 'spiritual',
    features: ['Holographic finish', 'Large 4-inch size', 'Temple-grade quality', '5 designs'],
    inStock: true,
  },
  {
    id: 'spi-003',
    name: 'Devotional Classics',
    description: 'Classic devotional imagery including Ganesha, Hanuman, and more sacred figures.',
    price: 299,
    image: stickerSpiritual,
    category: 'spiritual',
    features: ['Museum-quality print', 'Archival inks', 'Blessed designs', '12 stickers'],
    inStock: false,
  },
  // Anime & Pop Culture
  {
    id: 'ani-001',
    name: 'Anime Legends Pack',
    description: 'Popular anime character stickers from your favorite shows. Must-have for any otaku.',
    price: 299,
    image: stickerPhone,
    category: 'anime',
    features: ['Full color print', 'Laptop friendly', 'Phone case ready', '15 stickers'],
    inStock: true,
  },
  {
    id: 'ani-002',
    name: 'Gaming Heroes Set',
    description: 'Iconic gaming characters and logos. Level up your gear with these awesome stickers.',
    price: 249,
    image: stickerPhone,
    category: 'anime',
    features: ['Controller safe', 'Console compatible', 'High-res graphics', '10 stickers'],
    inStock: true,
  },
  {
    id: 'ani-003',
    name: 'Meme Lords Bundle',
    description: 'Trending memes and internet culture icons. Stay relevant with these viral designs.',
    price: 179,
    image: stickerPhone,
    category: 'anime',
    features: ['Updated designs', 'Social media ready', 'Shareable moments', '20 stickers'],
    inStock: true,
  },
  // Custom Designs
  {
    id: 'cus-001',
    name: 'Custom Photo Sticker',
    description: 'Turn your favorite photo into a premium vinyl sticker. Upload any image and we will create magic.',
    price: 99,
    image: stickerBottle,
    category: 'custom',
    features: ['Any photo accepted', 'Professional editing', 'Multiple sizes', 'Single sticker'],
    inStock: true,
  },
  {
    id: 'cus-002',
    name: 'Custom Pack (5 pcs)',
    description: 'Get 5 custom stickers of your choice. Perfect for personal branding or gifts.',
    price: 399,
    image: stickerBottle,
    category: 'custom',
    features: ['Bulk discount', 'Mixed designs', 'Gift wrapping', '5 stickers'],
    inStock: true,
  },
  {
    id: 'cus-003',
    name: 'Business Branding Kit',
    description: 'Professional stickers for your business. Includes logo stickers, labels, and promotional designs.',
    price: 999,
    image: stickerBottle,
    category: 'custom',
    features: ['Brand consultation', 'Multiple formats', 'Commercial use', '50 stickers'],
    inStock: true,
  },
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
