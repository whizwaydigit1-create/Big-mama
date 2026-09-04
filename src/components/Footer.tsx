import React, { useState } from 'react';
import { Leaf, Heart, ExternalLink, ShieldCheck, Mail, ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="main-footer" className="bg-[#242E25] text-[#FBF8F3] pt-16 pb-12 border-t border-[#374438]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid: Brand, Links, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Ethos (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3D4B3E] flex items-center justify-center text-[#E6C280]">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="font-brand text-xl font-bold tracking-wider text-[#FBF8F3] block">
                  BIG MAMA'S
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#A3B899] uppercase font-semibold block">
                  Healing House &bull; Holistic Apothecary
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C4D0C1] leading-relaxed max-w-sm">
              Handcrafted botanicals, demulcent gut mucilages, and parasite cleanses formulated by mother and autism advocate Hyrian Mitchell to calm inflamed gut mucosa and quiet distressed Vagus nerve signaling.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#A3B899]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E6C280]" />
                <span>100% Wildcrafted</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#C16246]" />
                <span>Small Batch</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-brand uppercase tracking-widest text-[#E6C280] font-semibold text-xs">
              Dispensary &amp; Guides
            </h4>
            <ul className="space-y-2 text-[#C4D0C1]">
              <li>
                <a
                  href="https://bigmamashealinghouse.myshopify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E6C280] font-semibold hover:text-white transition-colors flex items-center gap-1"
                >
                  Official Shopify Store &rarr;
                </a>
              </li>
              <li>
                <a href="#hero-section" className="hover:text-white transition-colors">
                  Gut Blanket Blend (Flagship)
                </a>
              </li>
              <li>
                <a href="#dispensary-catalog" className="hover:text-white transition-colors">
                  Apex Trio Tincture &amp; Tea
                </a>
              </li>
              <li>
                <a href="#dispensary-catalog" className="hover:text-white transition-colors">
                  Parasite Buster Seed Cleanse
                </a>
              </li>
              <li>
                <a href="#dispensary-catalog" className="hover:text-white transition-colors">
                  Let That Shit Out Motility Tea
                </a>
              </li>
              <li>
                <a href="#autism-protocol" className="hover:text-white transition-colors">
                  Healing the Gut: Autism Blueprint
                </a>
              </li>
              <li>
                <a href="#dosage-calculator" className="hover:text-white transition-colors">
                  Herbal Dosage &amp; Prep Calculator
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/14045907828?text=Hello%20Hyrian%2C%20I%20have%20a%20question%20about%20Big%20Mama%27s%20Healing%20House%20botanicals..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:text-white transition-colors font-medium flex items-center gap-1"
                >
                  Direct WhatsApp (+1 404-590-7828)
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="font-brand uppercase tracking-widest text-[#E6C280] font-semibold text-xs">
              Join Our Community
            </h4>
            <p className="text-[#C4D0C1] leading-relaxed">
              Subscribe for insights into herbal wisdom and exclusive creations from Big Mama's Healing House.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-[#384639] border border-[#4A5D4E] p-3 rounded-xl flex items-center gap-2 text-[#E6C280]">
                <Check className="w-4 h-4" />
                <span>Welcome to the healing circle! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex bg-[#323E33] border border-[#455446] rounded-xl overflow-hidden p-1 focus-within:border-[#A3B899]">
                  <Mail className="w-4 h-4 text-[#8C9B8B] ml-2.5 my-auto shrink-0" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-transparent text-xs w-full text-[#FBF8F3] placeholder-[#8C9B8B] px-2.5 py-1.5 outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#4A5D4E] hover:bg-[#586E5D] text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#8C9B8B] block">
                  We respect your privacy. No spam, ever. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Botanical Compliance Disclaimer */}
        <div className="pt-8 border-t border-[#374438] text-[11px] text-[#9BA898] leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> The statements made regarding these products have not been evaluated by the Medicines and Healthcare products Regulatory Agency (MHRA) or the Food and Drug Administration (FDA). These products and educational literature are not intended to diagnose, treat, cure, or prevent any disease. Information provided on this website and in Hyrian Mitchell’s publications is for educational purposes only and is not a substitute for medical advice from a qualified physician. Always consult your healthcare provider prior to starting any herbal regimen, particularly for children, pregnant, or nursing individuals.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Designer Credit */}
        <div className="pt-6 border-t border-[#374438] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3B899]">
          <div>
            &copy; {new Date().getFullYear()} Big Mama's Healing House. All rights reserved. Handcrafted with maternal love.
          </div>

          {/* Designer Credit - Specified by User */}
          <div className="flex items-center gap-1.5">
            <span>Design by</span>
            <a
              id="designer-attribution-link"
              href="https://whizwaydigit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#E6C280] hover:text-white underline underline-offset-4 decoration-[#A3B899] hover:decoration-white inline-flex items-center gap-1 transition-colors"
            >
              <span>whizwaydigit</span>
              <ExternalLink className="w-3 h-3 text-[#A3B899]" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
