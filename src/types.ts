export type CurrencyCode = 'USD' | 'GBP' | 'EUR';

export interface CurrencyRate {
  code: CurrencyCode;
  symbol: string;
  rateAgainstUSD: number; // base is USD ($)
}

export type ProductCategory = 
  | 'All Products'
  | 'Herbal Tea Blends'
  | 'Tinctures & Oils'
  | 'Cleanses & Powders'
  | 'Books & Journals';

export interface BotanicalProduct {
  id: string;
  shopifyId: number;
  name: string;
  subtitle: string;
  tagline: string;
  category: ProductCategory;
  priceUSD: number;
  originalPriceUSD?: number;
  rating: number;
  reviewCount: number;
  isBestSeller?: boolean;
  isFlagship?: boolean;
  isPediatricFriendly?: boolean;
  isBook?: boolean;
  format?: string;
  imageUrl: string;
  galleryImages?: string[];
  description: string;
  shortDescription: string;
  keyIngredients: string[];
  botanicalActions: string[];
  dosageGuidelines: {
    adult: string;
    child: string;
    preparation: string;
  };
  contraindications: string;
  storage?: string;
  shelfLife?: string;
  vagusNerveBenefit: string;
  shopifyHandle: string;
  shopifyUrl: string;
  tags?: string[];
}

export interface CartItem {
  product: BotanicalProduct;
  quantity: number;
}

export interface ProtocolPhase {
  phaseNumber: number;
  name: string;
  tagline: string;
  duration: string;
  biologicalMechanism: string;
  primaryBotanicals: string[];
  keyActions: string[];
  parentTips: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Dosage & Safety' | 'Preparation' | 'Autism Protocol' | 'Orders & Shipping';
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  childProfile?: string;
  rating: number;
  title: string;
  content: string;
  verifiedPurchase: boolean;
  productMentioned: string;
  date: string;
}
