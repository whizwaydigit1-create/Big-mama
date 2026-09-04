import React from 'react';
import { X, BookOpen, CheckCircle, Sparkles } from 'lucide-react';

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEbook: () => void;
}

export const BookModal: React.FC<BookModalProps> = ({
  isOpen,
  onClose,
  onSelectEbook,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="book-preview-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="book-preview-modal-container"
        className="bg-[#FBF8F3] border border-[#D9CEBF] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl text-[#2D382E] relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#D9CEBF] flex items-center justify-center text-[#2D382E] hover:bg-[#EAE2D5] cursor-pointer"
          aria-label="Close excerpt modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-6">
          
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2D382E] text-[#E6C280] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A06E35]">
                Book Excerpt &amp; Syllabus
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2D382E]">
                Healing the Gut: The Ultimate Autism Blueprint
              </h3>
              <p className="text-xs text-[#6B7A6C]">By Hyrian Mitchell &bull; 280 Pages</p>
            </div>
          </div>

          {/* Table of Contents Highlight */}
          <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#E3DBD0] space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D382E] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#A06E35]" />
              Core Blueprint Table of Contents
            </span>
            <div className="space-y-2 text-xs text-[#4A574B]">
              <div className="flex items-start gap-2">
                <strong className="text-[#2D382E] shrink-0">Chapter 1:</strong>
                <span>The Second Brain in Crisis — Why Autism is an Enteric and Vagus Nerve Condition</span>
              </div>
              <div className="flex items-start gap-2">
                <strong className="text-[#2D382E] shrink-0">Chapter 2:</strong>
                <span>The Mucosal Shield — Reversing Leaky Gut with Soluble Mucilages (Slippery Elm &amp; Marshmallow)</span>
              </div>
              <div className="flex items-start gap-2">
                <strong className="text-[#2D382E] shrink-0">Chapter 3:</strong>
                <span>Silent Invaders — Parasites, Fungal Biofilms, and the Full Moon Extermination Cycle</span>
              </div>
              <div className="flex items-start gap-2">
                <strong className="text-[#2D382E] shrink-0">Chapter 4:</strong>
                <span>The Constipation Crisis — Moving Stagnant Waste Without Harsh Chemical Laxatives</span>
              </div>
              <div className="flex items-start gap-2">
                <strong className="text-[#2D382E] shrink-0">Chapter 5:</strong>
                <span>Picky Eaters &amp; Sensory Defensiveness — Kitchen Strategies for Masking Herbs in Daily Food</span>
              </div>
              <div className="flex items-start gap-2">
                <strong className="text-[#2D382E] shrink-0">Appendix:</strong>
                <span>Printable Bristol Stool Trackers, Die-Off Symptom Guide, and Emergency Calming Recipes</span>
              </div>
            </div>
          </div>

          {/* Excerpt Snippet */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4A5D4E]">
              Excerpt from Chapter 1 (Opening Remarks):
            </span>
            <blockquote className="text-xs italic leading-relaxed text-[#4A574B] bg-[#F8F5EF] p-4 rounded-xl border-l-4 border-[#4A5D4E]">
              &ldquo;When my son was non-verbal and screaming through the night, every specialist looked at his head. They looked at his brain waves, his speech therapy charts, his sensory scores. Not a single doctor touched his stomach. Yet his stomach was swollen like a balloon, stone cold to the touch, and he hadn&apos;t passed a normal stool in seven days. When we stopped fighting his brain and started healing his intestinal wall, his entire reality transformed.&rdquo;
            </blockquote>
          </div>

          {/* Action */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-[#6B7A6C] hover:text-[#2D382E] font-medium cursor-pointer"
            >
              Back to Store
            </button>
            <div className="flex items-center gap-2">
              <a
                href="https://bigmamashealinghouse.myshopify.com/products/healing-the-gut-the-ultimate-autism-blueprint-e-book"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#2D382E] hover:underline font-semibold px-3 py-2 border border-[#D9CEBF] rounded-xl bg-white"
              >
                Buy on Shopify &rarr;
              </a>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectEbook();
                }}
                className="bg-[#2D382E] hover:bg-[#3D4B3E] text-[#FBF8F3] px-5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer shadow-xs"
              >
                Add E-Book to Bag ($24.99)
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
