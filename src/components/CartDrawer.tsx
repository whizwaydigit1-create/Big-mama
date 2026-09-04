import React, { useState } from 'react';
import { CartItem, CurrencyCode } from '../types';
import { formatPrice } from '../data/products';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check, Sparkles, ExternalLink } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  currentCurrency: CurrencyCode;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  currentCurrency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [appliedPromo, setAppliedPromo] = useState<string>('');
  const [promoError, setPromoError] = useState<string>('');
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  if (!isOpen) return null;

  // Calculations in USD
  const subtotalUSD = cartItems.reduce(
    (acc, item) => acc + item.product.priceUSD * item.quantity,
    0
  );

  const freeShippingThresholdUSD = 50;
  const progressToFreeShipping = Math.min(100, (subtotalUSD / freeShippingThresholdUSD) * 100);
  const remainingForFreeShippingUSD = Math.max(0, freeShippingThresholdUSD - subtotalUSD);

  const discountAmountUSD = (subtotalUSD * discountPercent) / 100;
  const isFreeShipping = subtotalUSD >= freeShippingThresholdUSD || appliedPromo === 'BIGMAMA';
  const shippingCostUSD = isFreeShipping || subtotalUSD === 0 ? 0 : 4.99;
  const totalUSD = subtotalUSD - discountAmountUSD + shippingCostUSD;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoInput.trim().toUpperCase();

    if (code === 'HEALING10') {
      setDiscountPercent(10);
      setAppliedPromo('HEALING10 (10% Off)');
      setPromoInput('');
    } else if (code === 'AUTISMBLUEPRINT') {
      setDiscountPercent(15);
      setAppliedPromo('AUTISMBLUEPRINT (15% Off)');
      setPromoInput('');
    } else if (code === 'BIGMAMA') {
      setDiscountPercent(5);
      setAppliedPromo('BIGMAMA (5% Off + Free Shipping)');
      setPromoInput('');
    } else {
      setPromoError('Invalid coupon code. Try HEALING10');
    }
  };

  const handleCheckoutSimulation = () => {
    setIsOrderCompleted(true);
    setTimeout(() => {
      onClearCart();
      setIsOrderCompleted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      id="cart-drawer-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        id="cart-drawer-container"
        className="bg-[#FBF8F3] w-full max-w-md h-full shadow-2xl flex flex-col justify-between text-[#2D382E] relative overflow-hidden border-l border-[#D9CEBF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#E3DBD0] flex items-center justify-between bg-[#F3EEE6]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#2D382E]" />
            <h3 className="font-serif font-bold text-lg text-[#2D382E]">
              Your Herbal Bag
            </h3>
            <span className="text-xs bg-[#2D382E] text-[#E6C280] px-2 py-0.5 rounded-full font-bold">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>

          <button
            id="close-cart-btn"
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#D9CEBF] flex items-center justify-center text-[#2D382E] hover:bg-[#EAE2D5] cursor-pointer"
            aria-label="Close cart drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#EAE2D5] p-3 border-b border-[#DFD5C6] text-xs">
          {remainingForFreeShippingUSD > 0 ? (
            <div className="space-y-1.5">
              <div className="flex justify-between text-[#4A574B]">
                <span>
                  Add <strong>{formatPrice(remainingForFreeShippingUSD, currentCurrency)}</strong> for <strong>Free Tracked Shipping</strong>
                </span>
                <span className="font-bold">{Math.round(progressToFreeShipping)}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#D9CEBF] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4A5D4E] transition-all duration-300"
                  style={{ width: `${progressToFreeShipping}%` }}
                ></div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[#354B36] font-semibold justify-center">
              <Sparkles className="w-3.5 h-3.5 text-[#A06E35]" />
              <span>You have unlocked Free Tracked Delivery!</span>
            </div>
          )}
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 bg-[#EAE2D5] rounded-full flex items-center justify-center mx-auto text-[#7D8C7C]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#2D382E]">
                Your Bag is Empty
              </h4>
              <p className="text-xs text-[#6B7A6C] max-w-xs mx-auto">
                Explore our gut-healing mucilages, parasite flushes, and written guides to begin your protocol.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="bg-[#2D382E] text-[#FBF8F3] px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D4B3E] cursor-pointer"
              >
                Browse Dispensary
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="bg-white border border-[#E3DBD0] rounded-2xl p-3.5 flex gap-3 shadow-2xs"
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-cover bg-[#F3EEE6] shrink-0"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-1">
                    <div>
                      <h5 className="font-serif font-bold text-xs sm:text-sm text-[#2D382E] line-clamp-1">
                        {item.product.name}
                      </h5>
                      <span className="text-[10px] text-[#7D8C7C]">
                        {item.product.format || item.product.category}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[#8C9B8B] hover:text-red-700 p-1"
                      aria-label={`Remove ${item.product.name} from bag`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#F5EFEB]">
                    <span className="font-bold text-xs text-[#2D382E]">
                      {formatPrice(item.product.priceUSD * item.quantity, currentCurrency)}
                    </span>

                    <div className="flex items-center border border-[#D9CEBF] rounded-lg bg-[#F8F5EF] px-1 py-0.5">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-5 h-5 flex items-center justify-center text-xs font-bold text-[#2D382E] hover:bg-white rounded cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-semibold text-[#2D382E]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-5 h-5 flex items-center justify-center text-xs font-bold text-[#2D382E] hover:bg-white rounded cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer / Summary */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 bg-[#F3EEE6] border-t border-[#DFD5C6] space-y-4">
            
            {/* Promo code form */}
            <form onSubmit={handleApplyPromo} className="space-y-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#7D8C7C] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Promo (try HEALING10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="w-full bg-white border border-[#D9CEBF] rounded-xl pl-8 pr-3 py-1.5 text-xs text-[#2D382E] uppercase placeholder-[#8C9B8B] outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#2D382E] text-[#FBF8F3] px-3.5 py-1.5 rounded-xl text-xs font-semibold hover:bg-[#3D4B3E] cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {appliedPromo && (
                <div className="flex items-center justify-between text-[11px] text-[#354B36] font-semibold bg-[#E4ECE1] px-2.5 py-1 rounded-md mt-1">
                  <span>{appliedPromo} applied</span>
                  <button
                    type="button"
                    onClick={() => {
                      setDiscountPercent(0);
                      setAppliedPromo('');
                    }}
                    className="text-red-700 underline text-[10px] ml-1"
                  >
                    Remove
                  </button>
                </div>
              )}
              {promoError && (
                <div className="text-[11px] text-red-700">{promoError}</div>
              )}
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#4A574B] pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#2D382E]">
                  {formatPrice(subtotalUSD, currentCurrency)}
                </span>
              </div>

              {discountAmountUSD > 0 && (
                <div className="flex justify-between text-[#354B36]">
                  <span>Discount</span>
                  <span>-{formatPrice(discountAmountUSD, currentCurrency)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-semibold text-[#2D382E]">
                  {shippingCostUSD === 0 ? (
                    <span className="text-[#354B36] uppercase font-bold text-[10px]">Free</span>
                  ) : (
                    formatPrice(shippingCostUSD, currentCurrency)
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm font-bold text-[#2D382E] pt-2 border-t border-[#DFD5C6]">
                <span>Estimated Total</span>
                <span className="text-base">
                  {formatPrice(totalUSD, currentCurrency)}
                </span>
              </div>
            </div>

            {/* Order Confirmation Notification if simulation */}
            {isOrderCompleted ? (
              <div className="bg-[#E4ECE1] border border-[#CDDECA] p-3.5 rounded-xl text-center space-y-1 animate-pulse text-[#354B36]">
                <div className="flex items-center justify-center gap-1.5 font-bold text-xs">
                  <Check className="w-4 h-4" />
                  Order Placed Successfully!
                </div>
                <p className="text-[11px] text-[#425443]">
                  Connecting to fulfillment. Confirmation email on the way.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {/* Simulated Checkout Button */}
                <button
                  id="cart-direct-checkout-btn"
                  type="button"
                  onClick={handleCheckoutSimulation}
                  className="w-full bg-[#2D382E] hover:bg-[#3D4B3E] text-[#FBF8F3] py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
                >
                  <span>Complete Secure Order</span>
                  <ArrowRight className="w-4 h-4 text-[#E6C280]" />
                </button>

                {/* Shopify Direct Link */}
                <a
                  href="https://bigmamashealinghouse.myshopify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white hover:bg-[#FAF6F0] text-[#2D382E] border border-[#D9CEBF] py-2 rounded-xl text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Checkout on Official Shopify Store</span>
                  <ExternalLink className="w-3 h-3 text-[#7D8C7C]" />
                </a>
              </div>
            )}

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#7D8C7C]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A5D4E]" />
              <span>256-bit Encrypted Checkout &bull; Handcrafted Botanicals</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
