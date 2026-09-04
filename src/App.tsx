import { useState, useEffect } from 'react';
import { CurrencyCode, BotanicalProduct, CartItem } from './types';
import { BOTANICAL_PRODUCTS } from './data/products';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DispensaryCatalog } from './components/DispensaryCatalog';
import { AutismBlueprintSection } from './components/AutismBlueprintSection';
import { DosageCalculator } from './components/DosageCalculator';
import { FounderStory } from './components/FounderStory';
import { FAQAndContact } from './components/FAQAndContact';
import { Footer } from './components/Footer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { BookModal } from './components/BookModal';
import { WhatsAppChatButton } from './components/WhatsAppChatButton';

export default function App() {
  // Currency state (defaults to USD matching Shopify store)
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('USD');

  // Cart state with persistence in localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bigmamas_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<BotanicalProduct | null>(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('bigmamas_cart', JSON.stringify(cartItems));
    } catch {
      // Ignore storage errors
    }
  }, [cartItems]);

  const flagshipProduct =
    BOTANICAL_PRODUCTS.find((p) => p.id === 'gut-blanket') || BOTANICAL_PRODUCTS[0];

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Cart handlers
  const handleAddToCart = (product: BotanicalProduct, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Smooth scroll handler
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F3] text-[#2D382E]">
      
      {/* Top Announcement Bar with Currency Switcher */}
      <AnnouncementBar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
      />

      {/* Main Sticky Brand Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        
        {/* Hero Experience */}
        <Hero
          flagshipProduct={flagshipProduct}
          currentCurrency={currentCurrency}
          onExploreDispensary={() => handleNavigateSection('dispensary-catalog')}
          onExploreProtocol={() => handleNavigateSection('autism-protocol')}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
        />

        {/* Complete 11-Product Dispensary Catalog */}
        <DispensaryCatalog
          products={BOTANICAL_PRODUCTS}
          currentCurrency={currentCurrency}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          justAddedId={justAddedId}
        />

        {/* The Autism & Gut-Brain Protocol Showcase & Book Showcase */}
        <AutismBlueprintSection
          products={BOTANICAL_PRODUCTS}
          currentCurrency={currentCurrency}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onQuickView={(p) => setQuickViewProduct(p)}
          onOpenBookPreview={() => setIsBookModalOpen(true)}
        />

        {/* Interactive Herbal Dosage & Preparation Calculator */}
        <DosageCalculator products={BOTANICAL_PRODUCTS} />

        {/* Founder Story: Hyrian Mitchell */}
        <FounderStory />

        {/* FAQ, Community Reviews & Consultation Form */}
        <FAQAndContact />

      </main>

      {/* Footer with Designer Credit to whizwaydigit.com */}
      <Footer />

      {/* Quick View Botanical Profile Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        currentCurrency={currentCurrency}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        currentCurrency={currentCurrency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Book Syllabus & Excerpt Modal */}
      <BookModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        onSelectEbook={() => {
          const ebook = BOTANICAL_PRODUCTS.find((p) => p.id === 'autism-blueprint-ebook');
          if (ebook) handleAddToCart(ebook, 1);
        }}
      />

      {/* Persistent 'Message Us' WhatsApp Founder Consultation Button */}
      <WhatsAppChatButton />

    </div>
  );
}
