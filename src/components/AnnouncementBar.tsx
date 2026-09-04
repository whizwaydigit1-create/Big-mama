import React from 'react';
import { CurrencyCode } from '../types';
import { Sparkles, Globe, ShieldCheck } from 'lucide-react';

interface AnnouncementBarProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  currentCurrency,
  onCurrencyChange,
}) => {
  return (
    <aside aria-label="Store Announcement" id="announcement-bar" className="bg-[#2D382E] text-[#FBF8F3] text-xs py-2 px-3 sm:px-6 border-b border-[#3D4B3E]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Quality Highlight & Official Store link */}
        <div className="hidden lg:flex items-center gap-2 text-[#C4D0C1]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#A3B899]" />
          <span>Handcrafted Herbal Blends, Tinctures &amp; Oils for ASD</span>
        </div>

        {/* Core Principle Banner */}
        <div className="flex items-center justify-center gap-2 text-center text-[11px] sm:text-xs font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-[#E6C280] shrink-0" />
          <span>
            <strong className="text-[#E6C280] font-semibold">Healing Starts At Home:</strong> Calming Blends &amp; Natural Remedies for ASD
          </span>
          <a
            href="https://bigmamashealinghouse.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#A3B899] hover:text-[#E6C280] underline ml-2 transition-colors"
          >
            Shopify Store &rarr;
          </a>
        </div>

        {/* Currency Selector & Shipping */}
        <div className="flex items-center gap-3 sm:gap-4 text-[11px]">
          <span className="hidden md:inline-block text-[#C4D0C1]">
            Free Shipping on Orders over $50 • Worldwide Tracked
          </span>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1.5 bg-[#3D4B3E] px-2 py-0.5 rounded border border-[#4E5F4F]">
            <Globe className="w-3 h-3 text-[#C4D0C1]" />
            <label htmlFor="currency-select" className="sr-only">Select Currency</label>
            <select
              id="currency-select"
              value={currentCurrency}
              onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
              className="bg-transparent text-[#FBF8F3] font-semibold cursor-pointer outline-none text-xs"
            >
              <option value="USD" className="bg-[#2D382E] text-[#FBF8F3]">USD ($)</option>
              <option value="GBP" className="bg-[#2D382E] text-[#FBF8F3]">GBP (£)</option>
              <option value="EUR" className="bg-[#2D382E] text-[#FBF8F3]">EUR (€)</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
};
