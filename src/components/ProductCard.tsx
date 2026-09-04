import React, { useState } from 'react';
import { BotanicalProduct, CurrencyCode } from '../types';
import { formatPrice } from '../data/products';
import { Star, Eye, ShoppingBag, Check, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: BotanicalProduct;
  currentCurrency: CurrencyCode;
  onQuickView: (product: BotanicalProduct) => void;
  onAddToCart: (product: BotanicalProduct) => void;
  isAddedJustNow?: boolean;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80';

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currentCurrency,
  onQuickView,
  onAddToCart,
  isAddedJustNow = false,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(product.imageUrl);

  return (
    <article
      id={`product-card-${product.id}`}
      className="bg-[#FFFFFF] border border-[#E8E1D5] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#C8BEB0] group"
    >
      {/* Card Image Container */}
      <div className="relative aspect-4/3 bg-[#F4EFEA] overflow-hidden">
        <img
          src={imgSrc}
          alt={product.name}
          onError={() => setImgSrc(FALLBACK_IMAGE)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 items-start">
          {product.isFlagship && (
            <span className="bg-[#2D382E] text-[#E6C280] text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-xs">
              Flagship Formula
            </span>
          )}
          {product.isBestSeller && !product.isFlagship && (
            <span className="bg-[#A06E35] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-xs">
              Bestseller
            </span>
          )}
          {product.isPediatricFriendly && (
            <span className="bg-[#4A5D4E] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
              Pediatric Gentle
            </span>
          )}
        </div>

        {/* Quick View Floating Overlay Trigger */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="bg-[#FBF8F3] hover:bg-white text-[#2D382E] text-xs font-semibold px-3.5 py-2 rounded-xl shadow-md flex items-center gap-1.5 transition-transform transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#4A5D4E]" />
            Quick View
          </button>
          <a
            href={product.shopifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2D382E]/90 hover:bg-[#2D382E] text-[#FBF8F3] text-xs font-semibold px-3 py-2 rounded-xl shadow-md flex items-center gap-1 transition-transform transform translate-y-2 group-hover:translate-y-0"
            title="Buy directly on Big Mama's Shopify"
          >
            <ExternalLink className="w-3 h-3 text-[#E6C280]" />
            Shopify
          </a>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div className="space-y-1.5">
          
          {/* Format & Star Rating */}
          <div className="flex items-center justify-between text-xs text-[#6B7A6C]">
            <span className="text-[11px] font-medium bg-[#F3EEE6] px-2 py-0.5 rounded-md text-[#4A574B]">
              {product.format || product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-[#D98E32] text-[#D98E32]" />
              <span className="font-semibold text-[#2D382E]">{product.rating}</span>
              <span className="text-[10px] text-[#8C9B8B]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="text-base sm:text-lg font-serif font-bold text-[#2D382E] leading-snug hover:text-[#4A5D4E] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Short Subtitle */}
          <p className="text-xs text-[#5D6D5E] line-clamp-2">
            {product.tagline}
          </p>

          {/* Key botanical ingredients pills */}
          <div className="flex flex-wrap gap-1 pt-1">
            {product.keyIngredients.slice(0, 2).map((ing, idx) => (
              <span
                key={idx}
                className="text-[10px] text-[#4A5D4E] bg-[#EBF1E9] px-2 py-0.5 rounded-sm truncate max-w-[170px]"
              >
                {ing.split('(')[0].trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Price and Cart Row */}
        <div className="pt-3 border-t border-[#EFE8DE] flex items-center justify-between gap-2">
          <div>
            <span className="text-lg font-bold text-[#2D382E]">
              {formatPrice(product.priceUSD, currentCurrency)}
            </span>
            {product.originalPriceUSD && (
              <span className="text-xs text-[#8C9B8B] line-through ml-2">
                {formatPrice(product.originalPriceUSD, currentCurrency)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              id={`quickview-btn-${product.id}`}
              type="button"
              onClick={() => onQuickView(product)}
              className="p-2 rounded-lg text-[#4A5D4E] hover:bg-[#F3EEE6] border border-[#E3DBD0] transition-colors"
              title="View Botanical Specs"
              aria-label={`View botanical specifications for ${product.name}`}
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              id={`add-to-bag-btn-${product.id}`}
              type="button"
              onClick={() => onAddToCart(product)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-2xs active:scale-95 ${
                isAddedJustNow
                  ? 'bg-[#4A5D4E] text-white'
                  : 'bg-[#2D382E] hover:bg-[#3D4B3E] text-[#FBF8F3]'
              }`}
              aria-label={`Add ${product.name} to shopping bag`}
            >
              {isAddedJustNow ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#E6C280]" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
