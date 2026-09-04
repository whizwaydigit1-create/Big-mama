import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Leaf, BookOpen, Calculator, HeartHandshake, HelpCircle } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
  onNavigateSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="main-navigation" className="sticky top-0 z-40 bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#E8E0D5] transition-all duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#2D382E] hover:text-[#4A5D4E] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Wordmark & Emblem */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('hero-section')}>
            <div className="w-10 h-10 rounded-full bg-[#2D382E] flex items-center justify-center text-[#E6C280] shadow-sm">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="font-brand text-lg sm:text-2xl font-bold tracking-wider text-[#2D382E] block leading-tight">
                BIG MAMA'S
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#4A5D4E] uppercase font-semibold block">
                Healing House &bull; Apothecary
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#2D382E]">
            <button
              id="nav-link-dispensary"
              type="button"
              onClick={() => handleNavClick('dispensary-catalog')}
              className="hover:text-[#4A5D4E] transition-colors py-1 relative group"
            >
              Dispensary Catalog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A5D4E] transition-all group-hover:w-full"></span>
            </button>

            <button
              id="nav-link-autism-protocol"
              type="button"
              onClick={() => handleNavClick('autism-protocol')}
              className="hover:text-[#4A5D4E] transition-colors py-1 relative group flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-[#4A5D4E]" />
              Autism Blueprint
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A5D4E] transition-all group-hover:w-full"></span>
            </button>

            <button
              id="nav-link-dosage-calculator"
              type="button"
              onClick={() => handleNavClick('dosage-calculator')}
              className="hover:text-[#4A5D4E] transition-colors py-1 relative group flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-[#4A5D4E]" />
              Dosage &amp; Prep
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A5D4E] transition-all group-hover:w-full"></span>
            </button>

            <button
              id="nav-link-founder"
              type="button"
              onClick={() => handleNavClick('founder-story')}
              className="hover:text-[#4A5D4E] transition-colors py-1 relative group"
            >
              Hyrian's Story
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A5D4E] transition-all group-hover:w-full"></span>
            </button>

            <button
              id="nav-link-faq"
              type="button"
              onClick={() => handleNavClick('faq-section')}
              className="hover:text-[#4A5D4E] transition-colors py-1 relative group"
            >
              FAQ &amp; Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A5D4E] transition-all group-hover:w-full"></span>
            </button>
          </nav>

          {/* Right Controls: Real-time Search & Sticky Bag */}
          <div className="flex items-center gap-3">
            {/* Search Bar - Desktop Expandable / In-place */}
            <div className="relative hidden md:block">
              <div className="flex items-center bg-[#F3EEE6] border border-[#E0D8CB] rounded-full px-3.5 py-1.5 focus-within:border-[#4A5D4E] focus-within:ring-1 focus-within:ring-[#4A5D4E] transition-all w-52 lg:w-64">
                <Search className="w-4 h-4 text-[#6A7869] mr-2 shrink-0" />
                <input
                  id="desktop-search-input"
                  type="text"
                  placeholder="Search herbs, blends, books..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="bg-transparent text-xs w-full text-[#2D382E] placeholder-[#8C9B8B] outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    className="text-[#8C9B8B] hover:text-[#2D382E] text-xs font-bold ml-1"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Search Toggle */}
            <button
              id="mobile-search-toggle"
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-[#2D382E] hover:text-[#4A5D4E] md:hidden"
              aria-label="Open search input"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Sticky Bag Trigger */}
            <button
              id="sticky-bag-trigger-btn"
              type="button"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#2D382E] text-[#FBF8F3] hover:bg-[#3D4B3E] px-4 py-2.5 rounded-full transition-all active:scale-95 shadow-sm"
              aria-label={`Shopping Bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#E6C280]" />
              <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Bag</span>
              {cartCount > 0 && (
                <span
                  id="cart-badge-count"
                  className="bg-[#C16246] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse"
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input Row */}
        {isSearchOpen && (
          <div className="py-2 px-1 md:hidden border-t border-[#E8E0D5]">
            <div className="flex items-center bg-[#F3EEE6] border border-[#E0D8CB] rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-[#6A7869] mr-2 shrink-0" />
              <input
                id="mobile-search-input"
                type="text"
                placeholder="Search remedies, Gut Blanket, blueprints..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                autoFocus
                className="bg-transparent text-sm w-full text-[#2D382E] placeholder-[#8C9B8B] outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="text-[#8C9B8B] hover:text-[#2D382E] text-sm font-bold ml-2"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-nav-drawer" className="lg:hidden border-t border-[#E8E0D5] py-4 space-y-3 bg-[#FBF8F3]">
            <button
              type="button"
              onClick={() => handleNavClick('dispensary-catalog')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#2D382E] hover:bg-[#F3EEE6] rounded-md flex items-center gap-2.5"
            >
              <Leaf className="w-4 h-4 text-[#4A5D4E]" />
              Dispensary Catalog (11 Remedies)
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('autism-protocol')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#2D382E] hover:bg-[#F3EEE6] rounded-md flex items-center gap-2.5"
            >
              <BookOpen className="w-4 h-4 text-[#4A5D4E]" />
              Autism &amp; Gut-Brain Protocol
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('dosage-calculator')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#2D382E] hover:bg-[#F3EEE6] rounded-md flex items-center gap-2.5"
            >
              <Calculator className="w-4 h-4 text-[#4A5D4E]" />
              Herbal Dosage &amp; Prep Calculator
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('founder-story')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#2D382E] hover:bg-[#F3EEE6] rounded-md flex items-center gap-2.5"
            >
              <HeartHandshake className="w-4 h-4 text-[#4A5D4E]" />
              Hyrian Mitchell's Story
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('faq-section')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#2D382E] hover:bg-[#F3EEE6] rounded-md flex items-center gap-2.5"
            >
              <HelpCircle className="w-4 h-4 text-[#4A5D4E]" />
              FAQ, Reviews &amp; Consultations
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
