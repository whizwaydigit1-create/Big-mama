import { ProtocolPhase } from '../types';

export const PROTOCOL_PHASES: ProtocolPhase[] = [
  {
    phaseNumber: 1,
    name: 'Soothe & Shield',
    tagline: 'Quench mucosal fire & coat micro-ulcerations in the epithelial barrier',
    duration: 'Weeks 1 to 4',
    biologicalMechanism: 'Before eliminating dysbiosis or pathogens, the inflamed, hyperpermeable gut barrier ("leaky gut") must be coated with polysaccharide-rich mucilages. This prevents lipopolysaccharides (LPS) and undigested food proteins from leaking into mesenteric blood vessels and firing alarm signals along the afferent Vagus Nerve.',
    primaryBotanicals: ['Gut Blanket Herbal Blend (Slippery Elm & Marshmallow Root)', 'Deglycyrrhizinated Licorice', 'Sacred Cooling Tea'],
    keyActions: [
      'Introduce cold-infused mucilage 30 minutes prior to meals',
      'Eliminate high-histamine and refined abrasive trigger foods',
      'Initiate calming somatic vagal toning exercises at bedtime',
      'Begin daily stool consistency and behavioral tracking'
    ],
    parentTips: 'If your child is a sensory-selective eater who refuses tea, mix cold Gut Blanket gel into organic applesauce, pear sauce, or warm coconut yogurt. The texture is velvety and neutral.',
    iconName: 'ShieldCheck'
  },
  {
    phaseNumber: 2,
    name: 'Microbial Reset & Biofilm Cleansing',
    tagline: 'Disrupt parasitic colonies, opportunistic yeasts, and stubborn bacterial biofilms',
    duration: 'Weeks 5 to 8',
    biologicalMechanism: 'Neurodivergent gut dysbiosis is frequently anchored by resilient microbial biofilms and intestinal parasites that release neurotoxins like ammonia and propionic acid. Phase 2 introduces whole-seed anthelmintics and botanical extracts to dismantle protective shields and gently dislodge unwanted organisms without pharmaceutical side-effects.',
    primaryBotanicals: ['Parasite Buster Seed Cleanse', 'Apex Trio Botanical Tincture', 'Wild Oregano & Black Seed Oil'],
    keyActions: [
      'Administer Parasite Buster on an empty stomach during full-moon cycles',
      'Introduce low-dose biofilm disrupters like Apex Trio drops',
      'Ensure daily elimination to prevent toxins from recirculating',
      'Incorporate warm Epsom salt baths to aid liver sulfur detox pathways'
    ],
    parentTips: 'Die-off ("Herxheimer reaction") can cause temporary agitation or fatigue around days 3-5. Stay patient, offer extra hydration, and lower the dosage slightly if needed.',
    iconName: 'Sparkles'
  },
  {
    phaseNumber: 3,
    name: 'Nourish & Eliminate',
    tagline: 'Restore natural intestinal peristalsis and rebuild deep cellular reserves',
    duration: 'Weeks 9 to 12',
    biologicalMechanism: 'Stagnant fecal impaction (encopresis) and chronic holding behaviors press against the pelvic nerve plexus, disrupting parasympathetic innervation. Phase 3 activates smooth muscle peristalsis with carminative herbs while delivering deeply bioavailable minerals (magnesium, iron, silica) to rebuild myelin sheaths and neurotransmitter synthesis.',
    primaryBotanicals: ['Let That Shit Out Motility Tea', 'Trinity Vitality Adaptogen Blend'],
    keyActions: [
      'Establish a calm 15-minute post-breakfast toilet routine',
      'Drink 1 cup of Trinity Vitality mineral infusion daily',
      'Utilize gentle motility herbs as needed to guarantee 1-2 smooth daily bowel movements',
      'Reintroduce nutrient-dense, fiber-rich whole foods with diverse plant polyphenols'
    ],
    parentTips: 'Aim for Type 3 or Type 4 on the Bristol Stool chart (smooth, soft sausage). Never allow your child to go more than 24 hours without an evacuation during gut rehabilitation.',
    iconName: 'Activity'
  },
  {
    phaseNumber: 4,
    name: 'Track, Observe & Sustain',
    tagline: 'Correlate somatic breakthroughs with enteric nervous system resilience',
    duration: 'Ongoing Maintenance',
    biologicalMechanism: 'Gut-brain healing is cyclical rather than linear. By systematically logging dietary additions, seasonal shifts, emotional regulation, and stool markers, parents identify individual biological thresholds and maintain resilient vagus nerve harmony over a lifetime.',
    primaryBotanicals: ['Daily Gut & Vagus Tracking Journal', 'Gut Blanket (Maintenance Dose 2x weekly)'],
    keyActions: [
      'Maintain nightly 3-minute reflections in the Daily Tracking Journal',
      'Watch for expanded expressive vocabulary, calmer eye contact, and sensory ease',
      'Perform 7-day botanical tune-ups during seasonal changes or post-antibiotic exposure',
      'Celebrate milestones: improved sleep through the night and dietary variety'
    ],
    parentTips: 'Document even subtle wins: singing new tunes, tolerating sock seams, or trying a crunchy vegetable. These are direct reflections of a calmed nervous system.',
    iconName: 'BookOpen'
  }
];

export const VAGUS_NERVE_FACTS = [
  {
    title: 'The Wandering Nerve',
    metric: '80%',
    description: '80% of vagus nerve fibers are sensory (afferent)—traveling FROM the gut UP to the brain, transmitting inflammatory signals directly to emotional and sensory centers.',
  },
  {
    title: 'Enteric Serotonin',
    metric: '90%+',
    description: 'Over 90% of the body’s serotonin and 50% of dopamine are synthesized by gut cells and microbiota, directly controlling mood, sensory processing, and sleep.',
  },
  {
    title: 'Microbial Metabolites',
    metric: '100T',
    description: '100 trillion gut microbes produce short-chain fatty acids (SCFAs like butyrate) that feed microglial brain cells and seal the blood-brain barrier.',
  }
];
