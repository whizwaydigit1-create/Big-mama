import React from 'react';
import { Heart, Sparkles, Quote, CheckCircle2, ShieldAlert } from 'lucide-react';

export const FounderStory: React.FC = () => {
  return (
    <section id="founder-story" className="py-16 md:py-24 bg-[#F5EFEB] border-t border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Portrait & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D9CEBF] aspect-4/5 bg-[#EAE2D5]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Hyrian Mitchell, Founder of Big Mama's Healing House"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E6C280]">
                  Founder &amp; Autism Mother
                </span>
                <h3 className="font-serif text-2xl font-bold">Hyrian Mitchell</h3>
                <p className="text-xs text-[#D8E3D7]">
                  Author of &ldquo;Healing the Gut: The Ultimate Autism Blueprint&rdquo;
                </p>
              </div>
            </div>

            {/* Floating Quote Stamp */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#FFFFFF] border border-[#D9CEBF] p-4 rounded-2xl shadow-xl max-w-xs items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4A5D4E] text-white flex items-center justify-center shrink-0">
                <Quote className="w-4 h-4" />
              </div>
              <p className="text-xs text-[#2D382E] font-medium leading-snug">
                &ldquo;When you heal the gut mucosa, you quiet the alarm bells in the brain.&rdquo;
              </p>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4A5D4E] bg-[#E3DBD0] px-3 py-1 rounded-full">
              <Heart className="w-3.5 h-3.5 text-[#A06E35]" />
              <span>The Heart Behind the Remedies</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D382E] leading-tight">
              From Kitchen Table Desperation to a Global Healing Sanctuary
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#4A574B] leading-relaxed">
              <p>
                Like countless mothers of neurodivergent children, I watched my son slip into a world of sensory pain. He was non-verbal, suffered night terrors, banged his head against walls, and went up to seven agonizing days without a bowel movement.
              </p>
              <p>
                Conventional medicine offered me anti-psychotics for his aggression and polyethylene glycol laxatives for his bowels. No one was willing to ask: <em>Why is his stomach bloated like a drum? Why does he smell of yeast? Why does he wake up screaming every full moon?</em>
              </p>
              <p>
                Refusing to accept a chemical cage for my child, I immersed myself in ethnobotany, herbal pharmacognosy, and enteric gastroenterology. I discovered that his aggressive meltdowns weren&apos;t behavioral defiance—they were acute visceral agony transmitted straight through his Vagus Nerve.
              </p>
              <p>
                I began formulating demulcent mucilages at my kitchen table, combining raw slippery elm, marshmallow root, and wildcrafted seeds to extinguish the fire in his gut barrier. Within months of restoring his mucosal lining and expelling parasitic biofilms, my son looked into my eyes, smiled, and began to speak.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D9CEBF] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-xs text-[#2D382E]">
                  <CheckCircle2 className="w-4 h-4 text-[#4A5D4E]" />
                  <span>No Synthetic Binders or Fillers</span>
                </div>
                <p className="text-[11px] text-[#6B7A6C]">
                  100% whole-plant herbs, pure cold-pressed oils, and zero magnesium stearate.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#D9CEBF] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-xs text-[#2D382E]">
                  <Sparkles className="w-4 h-4 text-[#A06E35]" />
                  <span>Tested on Our Own Children First</span>
                </div>
                <p className="text-[11px] text-[#6B7A6C]">
                  Every formula is formulated with love and deep respect for pediatric sensory systems.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
