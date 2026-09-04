import React from 'react';
import { BotanicalProduct, CurrencyCode } from '../types';
import { formatPrice } from '../data/products';
import { ShieldCheck, Heart, Sparkles, ArrowRight, Star, Leaf, CheckCircle2, Eye, ShoppingBag } from 'lucide-react';

interface HeroProps {
  flagshipProduct: BotanicalProduct;
  currentCurrency: CurrencyCode;
  onExploreDispensary: () => void;
  onExploreProtocol: () => void;
  onQuickView: (product: BotanicalProduct) => void;
  onAddToCart: (product: BotanicalProduct) => void;
}

export const Hero: React.FC<HeroProps> = ({
  flagshipProduct,
  currentCurrency,
  onExploreDispensary,
  onExploreProtocol,
  onQuickView,
  onAddToCart,
}) => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-[#F3EEE6] via-[#FBF8F3] to-[#FBF8F3] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#E8E0D5]">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E3ECE1]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EFE6D8]/50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline, Mission & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EAE2D5] border border-[#D9CEBF] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2D382E] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#A06E35]" />
              <span className="tracking-wide">Big Mama's Healing House &bull; Calming Blends for ASD</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#2D382E] leading-[1.15] font-bold tracking-tight">
              Healing Starts <br />
              <span className="italic font-normal text-[#4A5D4E]">At Home.</span>
            </h1>

            {/* Subheading / Value Proposition from Shopify store */}
            <p className="text-base sm:text-lg text-[#2D382E] font-medium leading-relaxed max-w-2xl">
              Herbal tea blends, tinctures and oils. Calming blends and natural remedies for ASD.
            </p>
            <p className="text-sm sm:text-base text-[#556455] leading-relaxed max-w-2xl italic font-serif">
              &ldquo;Crafted with passion, our blends embody the essence of nature&rsquo;s bounty, meticulously curated to nourish both body and spirit. Handcrafted from the finest botanicals, our tea blends and tinctures are designed to invigorate and soothe.&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-cta-dispensary"
                type="button"
                onClick={onExploreDispensary}
                className="inline-flex items-center gap-2.5 bg-[#2D382E] hover:bg-[#3D4B3E] text-[#FBF8F3] px-6 py-3.5 rounded-xl font-medium text-sm transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <Leaf className="w-4 h-4 text-[#E6C280]" />
                Shop All 11 Blends &amp; Remedies
                <ArrowRight className="w-4 h-4 text-[#C4D0C1]" />
              </button>

              <button
                id="hero-cta-protocol"
                type="button"
                onClick={onExploreProtocol}
                className="inline-flex items-center gap-2.5 bg-[#FBF8F3] hover:bg-[#F3EEE6] text-[#2D382E] border border-[#C8BEB0] px-5 py-3.5 rounded-xl font-medium text-sm transition-all active:scale-98 cursor-pointer"
              >
                <span>Autism Gut-Brain Blueprint</span>
              </button>

              <a
                href="https://bigmamashealinghouse.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A5D4E] hover:text-[#2D382E] underline underline-offset-4 py-2"
              >
                Visit Official Shopify Store &rarr;
              </a>
            </div>

            {/* Quality Badges */}
            <div className="pt-6 border-t border-[#E8E0D5] grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#2D382E]">
                <ShieldCheck className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                <span>100% Wildcrafted Botanicals</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#2D382E]">
                <Heart className="w-4 h-4 text-[#A06E35] shrink-0" />
                <span>Mother-Crafted Remedies</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#2D382E]">
                <CheckCircle2 className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                <span>Vagus Nerve Targeted</span>
              </div>
            </div>
          </div>

          {/* Right Column: Flagship Highlight Card (Gut Blanket) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] border border-[#E3DBD0] rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden transition-all hover:shadow-2xl">
              
              {/* Highlight Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#2D382E] text-[#E6C280] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  Flagship Formulation
                </span>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#2D382E]">
                  <div className="flex text-[#D98E32]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D98E32]" />
                    ))}
                  </div>
                  <span className="ml-1">4.95 (340+ reviews)</span>
                </div>
              </div>

              {/* Product Image & Glow */}
              <div className="relative rounded-xl overflow-hidden mb-5 aspect-4/3 bg-[#F7F4EF] group">
                <img
                  src={flagshipProduct.imageUrl}
                  alt={flagshipProduct.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[11px] font-medium bg-[#2D382E]/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                    Slippery Elm &bull; Marshmallow Root &bull; Plantain
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-serif font-bold text-[#2D382E]">
                    {flagshipProduct.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-xl font-bold text-[#2D382E]">
                      {formatPrice(flagshipProduct.priceUSD, currentCurrency)}
                    </span>
                    {flagshipProduct.originalPriceUSD && (
                      <span className="block text-xs text-[#8C9B8B] line-through">
                        {formatPrice(flagshipProduct.originalPriceUSD, currentCurrency)}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#556455] line-clamp-2">
                  {flagshipProduct.tagline}
                </p>

                {/* Key Benefits List */}
                <div className="bg-[#F8F5EF] p-3 rounded-lg border border-[#EBE3D7] text-xs space-y-1 text-[#3E4D3F]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E]"></span>
                    Forms soothing demulcent mucilage in cold water
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E]"></span>
                    Protects gut tight junctions from inflammatory LPS
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E]"></span>
                    Child-friendly: effortlessly blended in fruit puree
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    id="hero-quickview-btn"
                    type="button"
                    onClick={() => onQuickView(flagshipProduct)}
                    className="flex items-center justify-center gap-1.5 bg-[#F5EFEB] hover:bg-[#ECE4DC] text-[#2D382E] text-xs font-semibold py-2.5 px-3 rounded-xl border border-[#D9CEBF] transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#4A5D4E]" />
                    Botanical Profile
                  </button>

                  <button
                    id="hero-add-to-bag-btn"
                    type="button"
                    onClick={() => onAddToCart(flagshipProduct)}
                    className="flex items-center justify-center gap-1.5 bg-[#2D382E] hover:bg-[#3D4B3E] text-[#FBF8F3] text-xs font-semibold py-2.5 px-3 rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#E6C280]" />
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
