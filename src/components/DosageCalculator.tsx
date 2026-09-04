import React, { useState } from 'react';
import { BotanicalProduct } from '../types';
import { Calculator, Sparkles, Clock, Droplets, Utensils, AlertCircle, Copy, Check, Printer } from 'lucide-react';

interface DosageCalculatorProps {
  products: BotanicalProduct[];
}

export const DosageCalculator: React.FC<DosageCalculatorProps> = ({ products }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('gut-blanket');
  const [profile, setProfile] = useState<'child' | 'adult'>('child');
  const [childAgeBracket, setChildAgeBracket] = useState<'toddler' | 'child' | 'teen'>('child');
  const [copied, setCopied] = useState(false);

  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[0];

  // Derive precise calculations based on product and profile
  const getCalculationDetails = () => {
    switch (selectedProduct.id) {
      case 'gut-blanket':
        return {
          method: 'Cold Infusion Gel (Optimal for mucilage)',
          herbAmount: profile === 'child'
            ? childAgeBracket === 'toddler' ? '1/2 to 1 level teaspoon' : '1 to 1.5 teaspoons'
            : '1 heaping tablespoon',
          liquidAmount: profile === 'child' ? '120ml to 150ml filtered cold water' : '250ml filtered cold water',
          steepTime: '4 to 6 hours in the refrigerator (or overnight)',
          idealCarrier: profile === 'child'
            ? 'Organic unsweetened applesauce, pear puree, or cold-pressed grape juice (masks texture)'
            : 'Drink neat as a silky herbal tonic or blend into morning smoothie',
          frequency: profile === 'child' ? 'Once daily in the morning, 30 mins before food' : 'Twice daily (morning and before bed)',
          proTip: 'Do not use boiling water! Heat breaks down the slippery elm mucopolysaccharides that physically coat the gut.',
        };
      case 'parasite-buster':
        return {
          method: 'Whole Seed & Herbal Carrier Mash',
          herbAmount: profile === 'child'
            ? childAgeBracket === 'toddler' ? '1/2 teaspoon' : '1 to 2 teaspoons'
            : '1 level tablespoon',
          liquidAmount: profile === 'child' ? '60ml water or directly mixed into puree' : '150ml warm water or smoothie',
          steepTime: 'Immediate consumption — no steeping required',
          idealCarrier: profile === 'child'
            ? 'Creamy almond butter, honey (if over 1yr), or dairy-free mango yogurt'
            : 'Mixed into morning porridge, warm oat milk, or swallowed with water',
          frequency: 'Once daily first thing in the morning on an empty stomach for 14 consecutive days',
          proTip: 'Time this during the 14-day waxing-to-full moon phase when parasite serotonin receptor activity peaks.',
        };
      case 'let-that-shit-out':
        return {
          method: 'Warm Infusion Decoction',
          herbAmount: profile === 'child'
            ? childAgeBracket === 'toddler' ? '1/4 teaspoon (very gentle)' : '1/2 teaspoon'
            : '1 to 1.5 teaspoons',
          liquidAmount: profile === 'child' ? '120ml hot water' : '200ml freshly boiled water',
          steepTime: 'Covered steep for 5 to 7 minutes (do not over-steep for children)',
          idealCarrier: profile === 'child' ? 'A spoonful of raw honey or mixed 50/50 with warm chamomile' : 'Drink warm with a slice of fresh lemon',
          frequency: 'Give in the late afternoon or evening before bed for easy morning elimination',
          proTip: 'Pair with 1 extra glass of room temperature water to ensure bowel hydration.',
        };
      case 'apex-trio-tincture':
        return {
          method: 'Hydro-Glycerin Liquid Drops',
          herbAmount: profile === 'child'
            ? childAgeBracket === 'toddler' ? '3 to 5 drops' : '6 to 10 drops'
            : '30 to 40 drops (approx. 1 full dropper)',
          liquidAmount: profile === 'child' ? '30ml warm water or organic grape juice' : '60ml warm water',
          steepTime: 'Allow warm water to stand for 2 minutes to let alcohol evaporate if preferred',
          idealCarrier: profile === 'child' ? 'Organic grape or tart cherry juice to mask herbal bitterness' : 'Taken directly under the tongue or in water',
          frequency: '2 times daily, 20 minutes before meals',
          proTip: 'Shake dropper bottle vigorously before each draw to disperse dense botanical tannins.',
        };
      default:
        return {
          method: 'Gentle Warm Infusion',
          herbAmount: profile === 'child' ? '1 teaspoon' : '1 tablespoon',
          liquidAmount: profile === 'child' ? '150ml hot water' : '250ml boiling water',
          steepTime: '10 to 15 minutes covered',
          idealCarrier: profile === 'child' ? 'Pure organic apple juice or honey' : 'Enjoy neat warm or chilled',
          frequency: '1 to 2 times daily between meals',
          proTip: 'Cover the cup while steeping to preserve medicinal volatile oils.',
        };
    }
  };

  const details = getCalculationDetails();

  const handleCopy = () => {
    const text = `Big Mama's Preparation Guide: ${selectedProduct.name}
Profile: ${profile === 'child' ? `Child (${childAgeBracket})` : 'Adult / Standard'}
Method: ${details.method}
Herb Ratio: ${details.herbAmount}
Liquid: ${details.liquidAmount}
Steeping Time: ${details.steepTime}
Best Food Carrier: ${details.idealCarrier}
Schedule: ${details.frequency}
Special Note: ${details.proTip}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="dosage-calculator" className="py-16 md:py-24 bg-[#FBF8F3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4A5D4E] bg-[#EAE2D5] px-3.5 py-1 rounded-full">
            <Calculator className="w-3.5 h-3.5 text-[#A06E35]" />
            <span>Interactive Apothecary Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D382E]">
            Herbal Dosage &amp; Preparation Calculator
          </h2>
          <p className="text-xs sm:text-sm text-[#526053]">
            Select any botanical blend and calibrate precise water-to-herb ratios, steeping temperatures, and food pairings for sensitive children or adults.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#FFFFFF] border border-[#D9CEBF] rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
          
          {/* Controls Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-[#E8E0D5]">
            
            {/* 1. Blend Selection */}
            <div className="space-y-2">
              <label htmlFor="blend-calculator-select" className="text-xs font-bold uppercase tracking-wider text-[#2D382E] block">
                1. Select Dispensary Formulation:
              </label>
              <select
                id="blend-calculator-select"
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full bg-[#F5EFEB] border border-[#D9CEBF] text-[#2D382E] rounded-xl px-4 py-3 text-sm font-semibold cursor-pointer outline-none focus:border-[#4A5D4E]"
              >
                {products
                  .filter((p) => !p.isBook)
                  .map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.category})
                    </option>
                  ))}
              </select>
            </div>

            {/* 2. Profile Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2D382E] block">
                2. Target Patient Profile:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setProfile('child')}
                  className={`py-3 px-4 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                    profile === 'child'
                      ? 'bg-[#2D382E] text-[#FBF8F3] border-[#2D382E] shadow-xs'
                      : 'bg-[#F8F5EF] text-[#2D382E] border-[#D9CEBF] hover:bg-[#EAE2D5]'
                  }`}
                >
                  Child / Sensitive ASD
                </button>
                <button
                  type="button"
                  onClick={() => setProfile('adult')}
                  className={`py-3 px-4 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                    profile === 'adult'
                      ? 'bg-[#2D382E] text-[#FBF8F3] border-[#2D382E] shadow-xs'
                      : 'bg-[#F8F5EF] text-[#2D382E] border-[#D9CEBF] hover:bg-[#EAE2D5]'
                  }`}
                >
                  Adult / Standard Dose
                </button>
              </div>

              {/* Age Bracket sub-toggle if Child selected */}
              {profile === 'child' && (
                <div className="flex items-center gap-2 pt-2 text-xs">
                  <span className="text-[#6B7A6C] font-medium">Age Group:</span>
                  {(['toddler', 'child', 'teen'] as const).map((age) => (
                    <button
                      key={age}
                      type="button"
                      onClick={() => setChildAgeBracket(age)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold cursor-pointer ${
                        childAgeBracket === age
                          ? 'bg-[#4A5D4E] text-white'
                          : 'bg-[#EAE2D5] text-[#2D382E]'
                      }`}
                    >
                      {age === 'toddler' ? '2-4 yrs' : age === 'child' ? '5-11 yrs' : '12+ yrs'}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Results Display Card */}
          <div className="bg-[#F8F4EE] border border-[#E3DBD0] rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E3DBD0] pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A06E35]">
                  Calculated Preparation Recipe
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2D382E]">
                  {selectedProduct.name}
                </h3>
              </div>
              <span className="bg-[#E4ECE1] text-[#354B36] border border-[#CDDECA] text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto">
                {details.method}
              </span>
            </div>

            {/* Grid of 4 Calculation Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Herb Quantity */}
              <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8E0D5] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#4A5D4E]">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Herb Measurement:</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-[#2D382E]">
                  {details.herbAmount}
                </p>
                <p className="text-[11px] text-[#7D8C7C]">
                  To {details.liquidAmount}
                </p>
              </div>

              {/* Steeping / Extraction */}
              <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8E0D5] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#4A5D4E]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Infusion &amp; Extraction Time:</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-[#2D382E]">
                  {details.steepTime}
                </p>
                <p className="text-[11px] text-[#7D8C7C]">
                  {details.method}
                </p>
              </div>

              {/* Carrier Food Pairing */}
              <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8E0D5] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#A06E35]">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Best Sensory Carrier Food:</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#2D382E]">
                  {details.idealCarrier}
                </p>
              </div>

              {/* Frequency & Administration */}
              <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8E0D5] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#A06E35]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Timing &amp; Frequency:</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#2D382E]">
                  {details.frequency}
                </p>
              </div>

            </div>

            {/* Pro Tip Banner */}
            <div className="bg-[#FFF8E6] border border-[#F5DFAB] p-4 rounded-xl flex items-start gap-2.5 text-xs text-[#7A5B18]">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#B8860B]" />
              <p className="leading-relaxed">
                <strong className="font-semibold">Clinical Note:</strong> {details.proTip} Always separate by 2 hours from prescription medications.
              </p>
            </div>

            {/* Card Buttons: Copy & Print */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-[#D9CEBF] hover:bg-[#EAE2D5] text-[#2D382E] text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5 text-[#4A5D4E]" />}
                <span>{copied ? 'Copied Recipe!' : 'Copy Recipe Card'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 bg-[#2D382E] hover:bg-[#3D4B3E] text-[#FBF8F3] text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#E6C280]" />
                <span>Print Preparation Sheet</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
