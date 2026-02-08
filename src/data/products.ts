import stickerExpressions from '@/assets/sticker-expressions.png';
import stickerSpiritual from '@/assets/sticker-spiritual.png';
import stickerPhone from '@/assets/sticker-phone.png';
import stickerBottle from '@/assets/sticker-bottle.png';

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  features: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  avatar: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
}

export interface QA {
  id: string;
  productId: string;
  question: string;
  askedBy: string;
  date: string;
  answer: string;
  answeredBy: string;
  answerDate: string;
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
    longDescription: 'Transform your everyday items with our bestselling Happy Face Pack! Each sticker is crafted from premium waterproof vinyl that withstands rain, sun, and daily wear. The vibrant colors are printed using UV-resistant inks that won\'t fade over time. Perfect for laptops, water bottles, phone cases, and notebooks. These stickers feature a bubble-free application process — simply peel, position, and stick for a perfect finish every time.',
    price: 149,
    originalPrice: 249,
    images: [stickerExpressions, stickerSpiritual, stickerPhone, stickerBottle],
    category: 'expressions',
    features: ['Waterproof vinyl', 'UV resistant', 'Easy peel & stick', 'Dishwasher safe'],
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 'exp-002',
    name: 'Mood Swings Bundle',
    description: 'Express every emotion with this versatile pack. From excited to thoughtful, we have got you covered.',
    longDescription: 'The Mood Swings Bundle captures the full spectrum of human emotions in adorable sticker form. Each of the 8 stickers features a unique expression, from pure joy to deep contemplation. Made with premium matte finish vinyl that gives a sophisticated look while being scratch-resistant. The removable adhesive means you can reposition without leaving residue — perfect for renters and those who love to switch things up.',
    price: 199,
    originalPrice: 349,
    images: [stickerExpressions, stickerBottle, stickerSpiritual, stickerPhone],
    category: 'expressions',
    features: ['Premium matte finish', 'Scratch resistant', 'Removable adhesive', '8 stickers included'],
    inStock: true,
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: 'exp-003',
    name: 'Cute Chibi Set',
    description: 'Adorable chibi-style character expressions that add charm to any surface.',
    longDescription: 'Our Cute Chibi Set brings kawaii culture to your fingertips! These 6 meticulously designed chibi characters feature glossy finishes that catch the light beautifully. Die-cut with precision for clean edges and professional quality. The bubble-free application technology ensures a smooth, professional look every time you apply them.',
    price: 179,
    originalPrice: 279,
    images: [stickerExpressions, stickerPhone, stickerBottle, stickerSpiritual],
    category: 'expressions',
    features: ['Glossy finish', 'Die-cut precision', 'Bubble-free application', '6 designs'],
    inStock: true,
    rating: 4.9,
    reviewCount: 67,
  },
  // Spiritual Collection
  {
    id: 'spi-001',
    name: 'Krishna Divine Pack',
    description: 'Beautiful Lord Krishna stickers featuring traditional art. Perfect for spiritual decoration.',
    longDescription: 'Immerse yourself in divine beauty with our Krishna Divine Pack. Each of the 10 stickers features authentic traditional artwork enhanced with real gold foil accents that shimmer in the light. Printed on premium temple-grade vinyl that maintains its sanctity and beauty for years. These sacred designs are perfect for pooja rooms, meditation spaces, diaries, and anywhere you want to add a touch of divine grace.',
    price: 249,
    originalPrice: 399,
    images: [stickerSpiritual, stickerExpressions, stickerBottle, stickerPhone],
    category: 'spiritual',
    features: ['Gold foil accents', 'Premium vinyl', 'Sacred designs', '10 stickers'],
    inStock: true,
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: 'spi-002',
    name: 'Om Mandala Set',
    description: 'Intricate mandala designs with Om symbols. Bring peace and harmony to your space.',
    longDescription: 'Find inner peace with our Om Mandala Set featuring 5 intricately designed holographic stickers. Each mandala is hand-drawn by our artists and then digitally enhanced with a stunning holographic finish that changes color as you move. At a generous 4-inch size, these stickers make a real statement wherever you place them. Temple-grade quality ensures these sacred symbols maintain their beauty and energy.',
    price: 199,
    originalPrice: 299,
    images: [stickerSpiritual, stickerPhone, stickerExpressions, stickerBottle],
    category: 'spiritual',
    features: ['Holographic finish', 'Large 4-inch size', 'Temple-grade quality', '5 designs'],
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 'spi-003',
    name: 'Devotional Classics',
    description: 'Classic devotional imagery including Ganesha, Hanuman, and more sacred figures.',
    longDescription: 'Our Devotional Classics collection brings together 12 of the most beloved sacred figures in stunning museum-quality prints. Using archival inks that last for decades, each sticker is a miniature work of art. From Lord Ganesha to Hanuman, each design has been blessed and created with deep reverence. Perfect for spiritual journals, temple decorations, and meaningful gifts.',
    price: 299,
    originalPrice: 499,
    images: [stickerSpiritual, stickerBottle, stickerPhone, stickerExpressions],
    category: 'spiritual',
    features: ['Museum-quality print', 'Archival inks', 'Blessed designs', '12 stickers'],
    inStock: false,
    rating: 4.8,
    reviewCount: 91,
  },
  // Anime & Pop Culture
  {
    id: 'ani-001',
    name: 'Anime Legends Pack',
    description: 'Popular anime character stickers from your favorite shows. Must-have for any otaku.',
    longDescription: 'Level up your otaku game with the Anime Legends Pack! Featuring 15 high-quality stickers of iconic anime characters, this pack is a must-have for any fan. Each sticker is printed in vibrant full color on laptop-friendly vinyl that won\'t damage your devices. Phone case ready with a slim profile that doesn\'t add bulk. Show your love for anime wherever you go!',
    price: 299,
    originalPrice: 449,
    images: [stickerPhone, stickerExpressions, stickerSpiritual, stickerBottle],
    category: 'anime',
    features: ['Full color print', 'Laptop friendly', 'Phone case ready', '15 stickers'],
    inStock: true,
    rating: 4.7,
    reviewCount: 312,
  },
  {
    id: 'ani-002',
    name: 'Gaming Heroes Set',
    description: 'Iconic gaming characters and logos. Level up your gear with these awesome stickers.',
    longDescription: 'Power up your gaming setup with our Gaming Heroes Set! These 10 premium stickers feature iconic gaming characters and logos that are safe for your controllers and consoles. The high-resolution graphics ensure every detail pops, from character expressions to logo typography. Designed specifically for gaming gear with adhesive that won\'t leave residue on your precious equipment.',
    price: 249,
    originalPrice: 399,
    images: [stickerPhone, stickerBottle, stickerExpressions, stickerSpiritual],
    category: 'anime',
    features: ['Controller safe', 'Console compatible', 'High-res graphics', '10 stickers'],
    inStock: true,
    rating: 4.5,
    reviewCount: 178,
  },
  {
    id: 'ani-003',
    name: 'Meme Lords Bundle',
    description: 'Trending memes and internet culture icons. Stay relevant with these viral designs.',
    longDescription: 'Stay on top of internet culture with our Meme Lords Bundle! Featuring 20 of the most viral and iconic meme designs, this pack is constantly updated to keep you relevant. Each sticker is designed to be social media ready — stick them on your laptop during video calls for instant laughs. Shareable, relatable, and absolutely hilarious.',
    price: 179,
    originalPrice: 299,
    images: [stickerPhone, stickerSpiritual, stickerBottle, stickerExpressions],
    category: 'anime',
    features: ['Updated designs', 'Social media ready', 'Shareable moments', '20 stickers'],
    inStock: true,
    rating: 4.6,
    reviewCount: 245,
  },
  // Custom Designs
  {
    id: 'cus-001',
    name: 'Custom Photo Sticker',
    description: 'Turn your favorite photo into a premium vinyl sticker. Upload any image and we will create magic.',
    longDescription: 'Your memories deserve to be displayed everywhere! Our Custom Photo Sticker service transforms any photo into a premium vinyl sticker with professional editing included. Simply upload your favorite image and our design team will optimize it for the perfect sticker. Available in multiple sizes to fit any surface. Each sticker is individually crafted with care and attention to detail.',
    price: 99,
    originalPrice: 149,
    images: [stickerBottle, stickerExpressions, stickerSpiritual, stickerPhone],
    category: 'custom',
    features: ['Any photo accepted', 'Professional editing', 'Multiple sizes', 'Single sticker'],
    inStock: true,
    rating: 4.8,
    reviewCount: 456,
  },
  {
    id: 'cus-002',
    name: 'Custom Pack (5 pcs)',
    description: 'Get 5 custom stickers of your choice. Perfect for personal branding or gifts.',
    longDescription: 'Get creative with our Custom Pack of 5 stickers! Whether you\'re building a personal brand, creating unique gifts, or just want to express yourself, this pack gives you the freedom to choose 5 different designs. Mix and match photos, logos, artwork, or text — anything goes! Each order comes beautifully gift-wrapped, making it the perfect present for sticker lovers.',
    price: 399,
    originalPrice: 599,
    images: [stickerBottle, stickerPhone, stickerExpressions, stickerSpiritual],
    category: 'custom',
    features: ['Bulk discount', 'Mixed designs', 'Gift wrapping', '5 stickers'],
    inStock: true,
    rating: 4.7,
    reviewCount: 189,
  },
  {
    id: 'cus-003',
    name: 'Business Branding Kit',
    description: 'Professional stickers for your business. Includes logo stickers, labels, and promotional designs.',
    longDescription: 'Take your brand to the next level with our Business Branding Kit! This comprehensive package includes 50 premium stickers featuring your logo, labels, and custom promotional designs. Our brand consultation service ensures your stickers perfectly represent your business identity. Available for commercial use with bulk pricing options for larger orders.',
    price: 999,
    originalPrice: 1499,
    images: [stickerBottle, stickerSpiritual, stickerPhone, stickerExpressions],
    category: 'custom',
    features: ['Brand consultation', 'Multiple formats', 'Commercial use', '50 stickers'],
    inStock: true,
    rating: 4.9,
    reviewCount: 78,
  },
];

export const reviews: Review[] = [
  // exp-001
  { id: 'r1', productId: 'exp-001', author: 'Priya S.', avatar: 'PS', rating: 5, title: 'Absolutely love these!', comment: 'The quality is amazing! I stuck them on my water bottle and they survived the dishwasher multiple times. Colors are still vibrant.', date: '2026-01-15', helpful: 24, verified: true },
  { id: 'r2', productId: 'exp-001', author: 'Rahul M.', avatar: 'RM', rating: 5, title: 'Best stickers I\'ve ever bought', comment: 'Super cute designs and the waterproof quality is legit. My laptop looks so much better now!', date: '2026-01-10', helpful: 18, verified: true },
  { id: 'r3', productId: 'exp-001', author: 'Ananya K.', avatar: 'AK', rating: 4, title: 'Great quality, wish there were more designs', comment: 'Love the quality and the peel-and-stick is so easy. Would love to see more variety in the expressions though.', date: '2025-12-28', helpful: 12, verified: true },
  // exp-002
  { id: 'r4', productId: 'exp-002', author: 'Vikram T.', avatar: 'VT', rating: 5, title: 'Perfect for my journal', comment: 'These mood stickers are perfect for my bullet journal. The matte finish gives them a premium look.', date: '2026-01-20', helpful: 15, verified: true },
  { id: 'r5', productId: 'exp-002', author: 'Sneha R.', avatar: 'SR', rating: 4, title: 'Good but pricey', comment: 'Nice stickers with good adhesive quality. A bit expensive for 8 stickers but the quality justifies it.', date: '2026-01-05', helpful: 9, verified: false },
  // spi-001
  { id: 'r6', productId: 'spi-001', author: 'Meera D.', avatar: 'MD', rating: 5, title: 'Divine and beautiful!', comment: 'The gold foil accents are stunning! I placed these in my pooja room and they look absolutely divine. The quality is temple-worthy.', date: '2026-02-01', helpful: 42, verified: true },
  { id: 'r7', productId: 'spi-001', author: 'Arjun P.', avatar: 'AP', rating: 5, title: 'Gifted to my mother, she loved it', comment: 'Bought this as a gift for my mother\'s birthday. She was so happy! The designs are authentic and respectful.', date: '2026-01-25', helpful: 31, verified: true },
  // ani-001
  { id: 'r8', productId: 'ani-001', author: 'Karthik V.', avatar: 'KV', rating: 5, title: 'Otaku approved!', comment: 'As a huge anime fan, these stickers are top-notch. The character designs are accurate and the print quality is exceptional.', date: '2026-01-30', helpful: 56, verified: true },
  { id: 'r9', productId: 'ani-001', author: 'Divya N.', avatar: 'DN', rating: 4, title: 'Great collection', comment: 'Good variety of characters. Would be perfect if they included some newer anime characters too.', date: '2026-01-18', helpful: 22, verified: true },
  // cus-001
  { id: 'r10', productId: 'cus-001', author: 'Ravi K.', avatar: 'RK', rating: 5, title: 'Turned my pet photo into art!', comment: 'Uploaded my dog\'s photo and the team did an amazing job. The sticker looks professional and the vinyl quality is excellent.', date: '2026-02-05', helpful: 38, verified: true },
];

export const qaData: QA[] = [
  // exp-001
  { id: 'qa1', productId: 'exp-001', question: 'Are these stickers safe for car bumpers?', askedBy: 'Amit S.', date: '2026-01-12', answer: 'Yes! Our waterproof vinyl stickers are perfect for car bumpers. They\'re UV resistant and can withstand all weather conditions.', answeredBy: 'MJ PrintLab', answerDate: '2026-01-12' },
  { id: 'qa2', productId: 'exp-001', question: 'Can I remove them without leaving residue?', askedBy: 'Pooja R.', date: '2026-01-08', answer: 'These stickers use permanent adhesive for durability. For removable options, check our Mood Swings Bundle which uses repositionable adhesive.', answeredBy: 'MJ PrintLab', answerDate: '2026-01-09' },
  // spi-001
  { id: 'qa3', productId: 'spi-001', question: 'Is the gold foil real gold?', askedBy: 'Deepak M.', date: '2026-01-20', answer: 'The gold foil accents use premium metallic foil that gives an authentic gold appearance and shimmer. While not real gold, the effect is stunning and long-lasting.', answeredBy: 'MJ PrintLab', answerDate: '2026-01-20' },
  // ani-001
  { id: 'qa4', productId: 'ani-001', question: 'Will these damage my laptop surface?', askedBy: 'Nisha K.', date: '2026-01-22', answer: 'Not at all! Our laptop-friendly vinyl uses a gentle adhesive that won\'t damage or leave marks on your laptop surface. You can remove them cleanly when needed.', answeredBy: 'MJ PrintLab', answerDate: '2026-01-22' },
  // cus-001
  { id: 'qa5', productId: 'cus-001', question: 'What image resolution do you need?', askedBy: 'Suresh P.', date: '2026-01-28', answer: 'We recommend at least 300 DPI or images that are 1000x1000 pixels or larger for the best results. Our team will also professionally edit your photo to ensure the best possible output.', answeredBy: 'MJ PrintLab', answerDate: '2026-01-28' },
  { id: 'qa6', productId: 'cus-001', question: 'How long does custom order take?', askedBy: 'Kavita L.', date: '2026-02-01', answer: 'Custom orders typically take 3-5 business days for production plus shipping time. Rush orders are available for an additional fee.', answeredBy: 'MJ PrintLab', answerDate: '2026-02-01' },
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

export const getReviewsByProductId = (productId: string): Review[] => {
  return reviews.filter((review) => review.productId === productId);
};

export const getQAByProductId = (productId: string): QA[] => {
  return qaData.filter((qa) => qa.productId === productId);
};

export const getRelatedProducts = (productId: string, limit = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter((p) => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};
