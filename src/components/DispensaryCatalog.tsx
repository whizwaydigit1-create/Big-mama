import React, { useState, useMemo } from 'react';
import { BotanicalProduct, CurrencyCode, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, Search, Sparkles } from 'lucide-react';

interface DispensaryCatalogProps {
  products: BotanicalProduct[];
  currentCurrency: CurrencyCode;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onQuickView: (product: BotanicalProduct) => void;
  onAddToCart: (product: BotanicalProduct) => void;
  justAddedId: string | null;
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating';

const CATEGORIES: ProductCategory[] = [
  'All Products',
  'Herbal Tea Blends',
  'Tinctures & Oils',
  'Cleanses & Powders',
  'Books & Journals',
];

export const DispensaryCatalog: React.FC<DispensaryCatalogProps> = ({
  products,
  currentCurrency,
  searchQuery,
  onSearchChange,
  onQuickView,
  onAddToCart,
  justAddedId,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All Products');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory =
          activeCategory === 'All Products' || p.category === activeCategory;

        const query = searchQuery.trim().toLowerCase();
        if (!query) return matchesCategory;

        const matchesSearch =
          p.name.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.keyIngredients.some((ing) => ing.toLowerCase().includes(query)) ||
          p.category.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
        if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default: featured (flagship first, then bestsellers, then rest)
        if (a.isFlagship && !b.isFlagship) return -1;
        if (!a.isFlagship && b.isFlagship) return 1;
        if (a.isBestSeller && !b.isBestSeller) return -1;
        if (!a.isBestSeller && b.isBestSeller) return 1;
        return 0;
      });
  }, [products, activeCategory, searchQuery, sortBy]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Products': products.length };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  return (
    <section id="dispensary-catalog" className="py-16 md:py-24 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4A5D4E] bg-[#EAE2D5] px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#A06E35]" />
            <span>Artisan Botanical Dispensary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D382E]">
            Handcrafted Herbal Formulations
          </h2>
          <p className="text-sm sm:text-base text-[#526053]">
            11 pure, whole-plant remedies &amp; clinical guides designed to restore gut mucosal barriers, flush intestinal parasites, and support the pediatric enteric nervous system.
          </p>
        </div>

        {/* Filters and Controls Bar */}
        <div className="bg-[#F5EFEB] border border-[#E3DBD0] rounded-2xl p-4 sm:p-5 mb-8 space-y-4">
          
          {/* Top row: Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`cat-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#2D382E] text-[#FBF8F3] shadow-xs'
                      : 'bg-[#FFFFFF] text-[#2D382E] hover:bg-[#EAE2D5] border border-[#E0D8CB]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-[#3D4B3E] text-[#E6C280]' : 'bg-[#EAE2D5] text-[#556455]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom row: Search status + Sort dropdown */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#E8E0D5]">
            
            {/* Active search tag or results count */}
            <div className="flex items-center gap-2 text-xs text-[#526053]">
              <span>Showing <strong>{filteredProducts.length}</strong> of {products.length} products</span>
              {searchQuery && (
                <div className="inline-flex items-center gap-1 bg-[#E8DFD3] px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#2D382E]">
                  <span>Search: &ldquo;{searchQuery}&rdquo;</span>
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    className="hover:text-red-700 ml-1 cursor-pointer font-bold"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#4A5D4E]" />
              <label htmlFor="sort-select" className="text-[#526053] font-medium">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-[#FFFFFF] border border-[#D9CEBF] text-[#2D382E] rounded-lg px-2.5 py-1.5 text-xs font-semibold cursor-pointer outline-none focus:border-[#4A5D4E]"
              >
                <option value="featured">Featured (Curated)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating (Highest)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currentCurrency={currentCurrency}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                isAddedJustNow={justAddedId === product.id}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="bg-[#F8F4EE] border border-[#E3DBD0] rounded-2xl p-12 text-center max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EAE2D5] flex items-center justify-center mx-auto text-[#4A5D4E]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#2D382E]">
              No botanical remedies found
            </h3>
            <p className="text-xs text-[#526053]">
              We couldn&apos;t find anything matching &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;Gut Blanket&rdquo;, &ldquo;Tincture&rdquo;, or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                onSearchChange('');
                setActiveCategory('All Products');
              }}
              className="bg-[#2D382E] text-[#FBF8F3] text-xs font-semibold px-4 py-2 rounded-xl hover:bg-[#3D4B3E] transition-all cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
