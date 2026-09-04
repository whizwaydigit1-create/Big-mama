import React, { useState } from 'react';
import { BotanicalProduct, CurrencyCode } from '../types';
import { formatPrice } from '../data/products';
import { X, Star, ShieldCheck, AlertCircle, ShoppingBag, Check, Sparkles, BookOpen, Clock, Heart } from 'lucide-react';

interface ProductQuickViewModalProps {
  product: BotanicalProduct | null;
  currentCurrency: CurrencyCode;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: BotanicalProduct, quantity: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  currentCurrency,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'profile' | 'dosage' | 'ingredients'>('profile');
  const [isAdded, setIsAdded] = useState(false);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div
      id="product-quick-view-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="product-quick-view-modal-container"
        className="bg-[#FBF8F3] border border-[#D9CEBF] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-auto text-[#2D382E] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-quickview-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FFFFFF]/80 hover:bg-[#FFFFFF] border border-[#D9CEBF] flex items-center justify-center text-[#2D382E] transition-all cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Product Image & Badges */}
          <div className="md:col-span-5 bg-[#F3EEE6] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E3DBD0]">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-sm relative bg-[#EAE2D5]">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {product.isFlagship && (
                  <span className="absolute top-3 left-3 bg-[#2D382E] text-[#E6C280] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                    Flagship Blend
                  </span>
                )}
              </div>

              {/* Format & Rating */}
              <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E3DBD0] space-y-1">
                <div className="text-xs font-semibold text-[#4A5D4E]">Format &amp; Container</div>
                <div className="text-xs text-[#2D382E] font-medium">{product.format || product.category}</div>
                <div className="flex items-center gap-1.5 pt-1 text-xs">
                  <div className="flex text-[#D98E32]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D98E32]" />
                    ))}
                  </div>
                  <span className="font-bold text-[#2D382E]">{product.rating}</span>
                  <span className="text-[#8C9B8B]">({product.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Vagus Nerve Callout */}
            <div className="mt-4 bg-[#EAF0E8] border border-[#CFDFCC] p-3 rounded-xl text-xs space-y-1 text-[#2D382E]">
              <div className="flex items-center gap-1.5 font-bold text-[#354B36]">
                <Heart className="w-3.5 h-3.5 text-[#4A5D4E]" />
                Vagus Nerve Harmony
              </div>
              <p className="text-[11px] text-[#425443] leading-relaxed">
                {product.vagusNerveBenefit}
              </p>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-5">
            
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-[#A06E35] uppercase">
                  {product.category}
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#2D382E] leading-tight mt-0.5">
                  {product.name}
                </h2>
                <p className="text-xs text-[#6B7A6C] font-medium mt-0.5">
                  {product.subtitle}
                </p>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-[#2D382E]">
                  {formatPrice(product.priceUSD, currentCurrency)}
                </span>
                {product.originalPriceUSD && (
                  <span className="text-sm text-[#8C9B8B] line-through">
                    {formatPrice(product.originalPriceUSD, currentCurrency)}
                  </span>
                )}
                <span className="text-[11px] text-[#4A5D4E] font-medium bg-[#E8EFE6] px-2 py-0.5 rounded-sm">
                  In Stock &bull; Small Batch
                </span>
              </div>

              {/* Navigation Tabs for details */}
              <div className="flex border-b border-[#E3DBD0] gap-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab('profile')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'profile'
                      ? 'border-b-2 border-[#2D382E] text-[#2D382E]'
                      : 'text-[#7D8C7C] hover:text-[#2D382E]'
                  }`}
                >
                  Overview &amp; Actions
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('dosage')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'dosage'
                      ? 'border-b-2 border-[#2D382E] text-[#2D382E]'
                      : 'text-[#7D8C7C] hover:text-[#2D382E]'
                  }`}
                >
                  Dosage &amp; Preparation
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-2 transition-colors cursor-pointer ${
                    activeTab === 'ingredients'
                      ? 'border-b-2 border-[#2D382E] text-[#2D382E]'
                      : 'text-[#7D8C7C] hover:text-[#2D382E]'
                  }`}
                >
                  Full Botanical Materia
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'profile' && (
                <div className="space-y-3 text-xs leading-relaxed text-[#4A574B]">
                  <p>{product.description}</p>
                  
                  <div className="pt-2">
                    <span className="font-semibold text-[#2D382E] block mb-1.5">Key Botanical Actions:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.botanicalActions.map((action, i) => (
                        <span
                          key={i}
                          className="bg-[#EFE8DE] text-[#2D382E] px-2.5 py-1 rounded-md text-[11px] font-medium"
                        >
                          {action}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'dosage' && (
                <div className="space-y-3 text-xs">
                  <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E3DBD0] space-y-1">
                    <span className="font-bold text-[#2D382E] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#4A5D4E]" />
                      Adult / Standard Protocol
                    </span>
                    <p className="text-[#4A574B]">{product.dosageGuidelines.adult}</p>
                  </div>

                  <div className="bg-[#F6F1EB] p-3 rounded-xl border border-[#E3DBD0] space-y-1">
                    <span className="font-bold text-[#4A5D4E] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#A06E35]" />
                      Child / Sensory-Sensitive Guidelines
                    </span>
                    <p className="text-[#4A574B]">{product.dosageGuidelines.child}</p>
                  </div>

                  <div className="text-[11px] text-[#526053] bg-[#EAE2D5] p-2.5 rounded-lg">
                    <strong>Preparation Note:</strong> {product.dosageGuidelines.preparation}
                  </div>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-[#2D382E] block mb-2">Botanical Composition:</span>
                    <ul className="space-y-1.5 list-disc list-inside text-[#4A574B]">
                      {product.keyIngredients.map((ing, i) => (
                        <li key={i} className="font-medium">
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {product.contraindications && (
                    <div className="bg-[#FFF4F0] border border-[#FAD0C4] p-3 rounded-xl text-xs space-y-1 text-[#8C3A27] mt-3">
                      <div className="flex items-center gap-1.5 font-bold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Storage &amp; Contraindications
                      </div>
                      <p className="text-[11px] leading-relaxed">
                        {product.contraindications}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Actions: Quantity Selector & Add to Bag */}
            <div className="pt-4 border-t border-[#E3DBD0] space-y-3">
              <div className="flex items-center gap-3">
                
                {/* Quantity */}
                <div className="flex items-center border border-[#D9CEBF] rounded-xl bg-white px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center text-[#2D382E] hover:bg-[#F3EEE6] rounded-lg font-bold text-sm cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#2D382E]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center text-[#2D382E] hover:bg-[#F3EEE6] rounded-lg font-bold text-sm cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  id="modal-add-to-bag-btn"
                  type="button"
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer ${
                    isAdded
                      ? 'bg-[#4A5D4E] text-white'
                      : 'bg-[#2D382E] hover:bg-[#3D4B3E] text-[#FBF8F3]'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Added to Your Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#E6C280]" />
                      <span>
                        Add to Bag &bull; {formatPrice(product.priceUSD * quantity, currentCurrency)}
                      </span>
                    </>
                  )}
                </button>

                {/* Direct Shopify Store Buy */}
                <a
                  href={product.shopifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#EAE2D5] hover:bg-[#DDD2C2] text-[#2D382E] rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                  title="Checkout on official Shopify store"
                >
                  <span>Buy on Shopify</span>
                  <span className="text-xs">&rarr;</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7D8C7C]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4A5D4E]" />
                <span>Small-batch prepared &bull; Handcrafted botanicals for ASD</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
