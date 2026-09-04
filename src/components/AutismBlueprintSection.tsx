import React, { useState } from 'react';
import { ProtocolPhase, BotanicalProduct, CurrencyCode } from '../types';
import { PROTOCOL_PHASES, VAGUS_NERVE_FACTS } from '../data/protocols';
import { formatPrice } from '../data/products';
import { BookOpen, ShieldCheck, Sparkles, Activity, CheckCircle2, ArrowRight, Heart, ShoppingBag, Eye } from 'lucide-react';

interface AutismBlueprintSectionProps {
  products: BotanicalProduct[];
  currentCurrency: CurrencyCode;
  onAddToCart: (product: BotanicalProduct) => void;
  onQuickView: (product: BotanicalProduct) => void;
  onOpenBookPreview: () => void;
}

export const AutismBlueprintSection: React.FC<AutismBlueprintSectionProps> = ({
  products,
  currentCurrency,
  onAddToCart,
  onQuickView,
  onOpenBookPreview,
}) => {
  const [selectedPhaseNumber, setSelectedPhaseNumber] = useState(1);

  const activePhase = PROTOCOL_PHASES.find((p) => p.phaseNumber === selectedPhaseNumber) || PROTOCOL_PHASES[0];

  // Find book products
  const paperbackBook = products.find((p) => p.id === 'autism-blueprint-paperback');
  const ebook = products.find((p) => p.id === 'autism-blueprint-ebook');
  const journal = products.find((p) => p.id === 'daily-tracking-journal');

  return (
    <section id="autism-protocol" className="py-16 md:py-24 bg-[#F5EFEB] border-y border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4A5D4E] bg-[#E3DBD0] px-3.5 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5 text-[#A06E35]" />
            <span>The Enteric Connection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D382E]">
            The Autism &amp; Gut-Brain Protocol
          </h2>
          <p className="text-sm sm:text-base text-[#526053] leading-relaxed">
            Understanding the biological highway between gut dysbiosis, hyperpermeability, and neurodevelopmental behaviors through the Vagus Nerve.
          </p>
        </div>

        {/* Biological Mechanism Banner: Gut-Brain Axis */}
        <div className="bg-[#2D382E] text-[#FBF8F3] rounded-3xl p-6 sm:p-10 mb-14 shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#3E4D3F] rounded-full blur-2xl opacity-60 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E6C280] flex items-center gap-2">
                <Heart className="w-4 h-4" />
                The Enteric Nervous System &amp; The Vagus Highway
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FBF8F3] leading-snug">
                Why Calming Gut Mucosa Settles Sensory Overload
              </h3>
              <p className="text-xs sm:text-sm text-[#D1DCD0] leading-relaxed">
                The human gastrointestinal tract contains over 500 million neurons and is directly wired to the brainstem via the cranial Vagus Nerve. When intestinal walls are irritated by parasitic biofilms, fungal overgrowth, or food sensitivities, inflamed nerve endings fire continuous distress signals. In neurodivergent children, this visceral alarm presents outwardly as speech delays, aggressive meltdowns, sleeplessness, toe-walking, and teeth-grinding.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#E6C280]">
                <span className="bg-[#3D4B3E] px-3 py-1.5 rounded-lg border border-[#4E5F4F]">
                  &bull; 90% Serotonin Made in the Gut
                </span>
                <span className="bg-[#3D4B3E] px-3 py-1.5 rounded-lg border border-[#4E5F4F]">
                  &bull; 80% Vagal Fibers Travel Gut &rarr; Brain
                </span>
                <span className="bg-[#3D4B3E] px-3 py-1.5 rounded-lg border border-[#4E5F4F]">
                  &bull; Mucilage Quells Visceral Alarms
                </span>
              </div>
            </div>

            {/* Fast Scientific Metrics */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {VAGUS_NERVE_FACTS.map((fact, idx) => (
                <div
                  key={idx}
                  className="bg-[#384639] border border-[#4A5D4E] rounded-2xl p-4 space-y-1 transition-all hover:bg-[#3F5041]"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold text-[#C4D0C1]">{fact.title}</span>
                    <span className="text-lg font-bold text-[#E6C280]">{fact.metric}</span>
                  </div>
                  <p className="text-[11px] text-[#A3B899] leading-tight">
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Phase Interactive Protocol Framework */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D382E]">
              The 4-Phase Healing Framework
            </h3>
            <p className="text-xs sm:text-sm text-[#526053]">
              Click through each sequential stage developed by Hyrian Mitchell for systematic, safe gut restoration.
            </p>
          </div>

          {/* Phase Selectors Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PROTOCOL_PHASES.map((phase) => {
              const isSelected = selectedPhaseNumber === phase.phaseNumber;
              return (
                <button
                  key={phase.phaseNumber}
                  id={`phase-tab-${phase.phaseNumber}`}
                  type="button"
                  onClick={() => setSelectedPhaseNumber(phase.phaseNumber)}
                  className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#2D382E] text-[#FBF8F3] border-[#2D382E] shadow-md scale-[1.02]'
                      : 'bg-[#FFFFFF] text-[#2D382E] border-[#D9CEBF] hover:bg-[#FAF6F0]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isSelected ? 'bg-[#4A5D4E] text-[#E6C280]' : 'bg-[#EAE2D5] text-[#4A574B]'
                      }`}
                    >
                      Phase {phase.phaseNumber}
                    </span>
                    <span className="text-xs opacity-75">{phase.duration}</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base leading-snug">
                    {phase.name}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Card */}
          <div className="bg-[#FFFFFF] border border-[#D9CEBF] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#4A5D4E] text-white flex items-center justify-center font-bold text-sm">
                    {activePhase.phaseNumber}
                  </span>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#2D382E]">
                      {activePhase.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#A06E35]">
                      {activePhase.tagline} &bull; {activePhase.duration}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4A5D4E]">
                    Biological Mechanism:
                  </span>
                  <p className="text-xs sm:text-sm text-[#4A574B] leading-relaxed bg-[#F8F5EF] p-4 rounded-xl border border-[#E8E0D5]">
                    {activePhase.biologicalMechanism}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4A5D4E]">
                    Action Steps:
                  </span>
                  <ul className="space-y-2">
                    {activePhase.keyActions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D382E]">
                        <CheckCircle2 className="w-4 h-4 text-[#4A5D4E] shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Primary Botanicals & Parent Sensory Tips */}
              <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                
                {/* Primary Botanicals */}
                <div className="bg-[#F8F5EF] p-5 rounded-2xl border border-[#E8E0D5] space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D382E] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#A06E35]" />
                    Featured Dispensary Formulations
                  </span>
                  <div className="space-y-2">
                    {activePhase.primaryBotanicals.map((botanical, i) => (
                      <div
                        key={i}
                        className="bg-[#FFFFFF] p-2.5 rounded-xl border border-[#E3DBD0] text-xs font-semibold text-[#2D382E] flex items-center justify-between"
                      >
                        <span>{botanical}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#4A5D4E]" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sensory Tip Box */}
                <div className="bg-[#EFF5EE] border border-[#D5E4D3] p-4 rounded-2xl space-y-1.5 text-xs text-[#2D382E]">
                  <span className="font-bold text-[#354B36] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#4A5D4E]" />
                    Sensory Picky-Eater Strategy:
                  </span>
                  <p className="text-[11px] text-[#425443] leading-relaxed">
                    {activePhase.parentTips}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Dedicated Book & Journal Showcase */}
        <div className="mt-16 pt-12 border-t border-[#D9CEBF]">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A06E35]">
              Written Protocols by Hyrian Mitchell
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D382E]">
              The Written Blueprint &amp; Tracking Journal
            </h3>
            <p className="text-xs sm:text-sm text-[#526053]">
              Everything you need to guide your family step-by-step, measure daily progress, and avoid common healing pitfalls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Paperback Book */}
            {paperbackBook && (
              <div className="bg-white border border-[#D9CEBF] rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="aspect-3/2 rounded-xl overflow-hidden bg-[#F3EEE6] relative">
                    <img
                      src={paperbackBook.imageUrl}
                      alt={paperbackBook.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#2D382E] text-[#E6C280] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Physical Edition
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#2D382E]">
                      {paperbackBook.name}
                    </h4>
                    <p className="text-xs text-[#6B7A6C] mt-0.5">{paperbackBook.format}</p>
                    <p className="text-xs text-[#4A574B] mt-2 line-clamp-3">
                      {paperbackBook.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E0D5] mt-4 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-bold text-[#2D382E]">
                      {formatPrice(paperbackBook.priceUSD, currentCurrency)}
                    </span>
                    <button
                      type="button"
                      onClick={onOpenBookPreview}
                      className="text-xs text-[#4A5D4E] font-semibold underline hover:text-[#2D382E] cursor-pointer"
                    >
                      Read Excerpt
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onAddToCart(paperbackBook)}
                      className="bg-[#2D382E] hover:bg-[#3D4B3E] text-[#FBF8F3] py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#E6C280]" />
                      Add to Bag
                    </button>
                    <a
                      href={paperbackBook.shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#EAE2D5] hover:bg-[#DDD2C2] text-[#2D382E] py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-all text-center"
                    >
                      Shopify &rarr;
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Instant E-Book Download */}
            {ebook && (
              <div className="bg-white border border-[#D9CEBF] rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="aspect-3/2 rounded-xl overflow-hidden bg-[#F3EEE6] relative">
                    <img
                      src={ebook.imageUrl}
                      alt={ebook.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#4A5D4E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Instant PDF &amp; EPUB
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#2D382E]">
                      {ebook.name}
                    </h4>
                    <p className="text-xs text-[#6B7A6C] mt-0.5">{ebook.format}</p>
                    <p className="text-xs text-[#4A574B] mt-2 line-clamp-3">
                      {ebook.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E0D5] mt-4 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-bold text-[#2D382E]">
                      {formatPrice(ebook.priceUSD, currentCurrency)}
                    </span>
                    <button
                      type="button"
                      onClick={onOpenBookPreview}
                      className="text-xs text-[#4A5D4E] font-semibold underline hover:text-[#2D382E] cursor-pointer"
                    >
                      Table of Contents
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onAddToCart(ebook)}
                      className="bg-[#4A5D4E] hover:bg-[#3D4B3E] text-[#FBF8F3] py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#E6C280]" />
                      Download
                    </button>
                    <a
                      href={ebook.shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#EAE2D5] hover:bg-[#DDD2C2] text-[#2D382E] py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-all text-center"
                    >
                      Shopify &rarr;
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Daily Tracking Journal */}
            {journal && (
              <div className="bg-white border border-[#D9CEBF] rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="aspect-3/2 rounded-xl overflow-hidden bg-[#F3EEE6] relative">
                    <img
                      src={journal.imageUrl}
                      alt={journal.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#A06E35] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      12-Week Guided Log
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#2D382E]">
                      {journal.name}
                    </h4>
                    <p className="text-xs text-[#6B7A6C] mt-0.5">{journal.format}</p>
                    <p className="text-xs text-[#4A574B] mt-2 line-clamp-3">
                      {journal.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E0D5] mt-4 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg font-bold text-[#2D382E]">
                      {formatPrice(journal.priceUSD, currentCurrency)}
                    </span>
                    <button
                      type="button"
                      onClick={() => onQuickView(journal)}
                      className="text-xs text-[#4A5D4E] font-semibold underline hover:text-[#2D382E] cursor-pointer"
                    >
                      View Specs
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onAddToCart(journal)}
                      className="bg-[#2D382E] hover:bg-[#3D4B3E] text-[#FBF8F3] py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#E6C280]" />
                      Add to Bag
                    </button>
                    <a
                      href={journal.shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#EAE2D5] hover:bg-[#DDD2C2] text-[#2D382E] py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-all text-center"
                    >
                      Shopify &rarr;
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
