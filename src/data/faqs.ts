import { FAQItem, Testimonial } from '../types';

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Can children on the autism spectrum safely take the Gut Blanket blend?',
    category: 'Dosage & Safety',
    answer: 'Yes, absolutely. Gut Blanket was formulated specifically with sensitive pediatric systems in mind. The primary ingredients (Slippery Elm inner bark and Marshmallow root) are non-toxic, gentle food-herbs with centuries of safe use. For children, we recommend starting with 1 to 1.5 teaspoons of the cold-infused gel mixed into applesauce, organic pear puree, or cold-pressed juice once daily before breakfast.'
  },
  {
    id: 'faq-2',
    question: 'Why is cold infusion recommended instead of hot boiling water for Gut Blanket?',
    category: 'Preparation',
    answer: 'Boiling water can degrade delicate high-molecular-weight polysaccharides and tannins. Cold infusion (letting the herbs sit in cool water inside your refrigerator for 4 to 6 hours or overnight) allows the slippery elm and marshmallow root mucilage to hydrate slowly and bloom into a rich, silky gel. This thick, viscous gel is what physically lines and protects the inflamed gut lining.'
  },
  {
    id: 'faq-3',
    question: 'How long should a child stay on the Parasite Buster Seed Cleanse?',
    category: 'Autism Protocol',
    answer: 'Our standard protocol follows a 14-day consecutive cycle, ideally initiated 3 to 5 days before the Full Moon (when parasite reproduction and lunar migration peak due to suppressed melatonin levels). After 14 days, take a 7-day break to allow the gut barrier to rest, followed by an optional 7-day secondary cycle to catch any newly hatched larvae.'
  },
  {
    id: 'faq-4',
    question: 'My child is sensory-sensitive and refuses herbal teas. How can I get them to take it?',
    category: 'Preparation',
    answer: 'This is the most common concern for autism parents! Gut Blanket and Parasite Buster have a mild, earthy, slightly nutty flavor without bitter notes. You can blend the cold mucilage directly into smoothies, stirred into warm oatmeal, folded into organic dairy-free yogurt, or mixed with organic grape/apple juice. The key is masking the visual appearance in a familiar favorite carrier food.'
  },
  {
    id: 'faq-5',
    question: 'Should the herbs be taken with prescription medications or supplements?',
    category: 'Dosage & Safety',
    answer: 'Because mucilaginous herbs (like Slippery Elm and Marshmallow Root) create a protective coating over intestinal walls, they can temporarily delay or diminish the absorption of pharmaceutical drugs and synthetic vitamins. Always separate Big Mama’s herbal blends by at least 1.5 to 2 hours from prescription medications and pharmaceutical supplements.'
  },
  {
    id: 'faq-6',
    question: 'Do you ship to the United States, Canada, and Europe?',
    category: 'Orders & Shipping',
    answer: 'Yes! We ship worldwide with tracked international courier delivery. Orders within the UK generally arrive in 2-3 business days. US and European orders typically arrive within 5-8 business days with complete customs clearance and tracking numbers provided upon dispatch.'
  },
  {
    id: 'faq-7',
    question: 'What is the difference between the physical book and the e-book edition?',
    category: 'Autism Protocol',
    answer: 'Both editions feature Hyrian Mitchell’s complete 280-page text, 4-phase protocols, and recipes. The Physical Paperback is a lay-flat softcover that is wonderful for keeping by the bedside and making manual notes. The E-Book edition is an instant PDF & EPUB download that you can read on your phone, iPad, or computer immediately upon checkout, including clickable resource links and printable protocol sheets.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    author: 'Sarah M.',
    location: 'London, UK',
    childProfile: 'Mother to 6-year-old with ASD & severe constipation',
    rating: 5,
    title: 'From 5-day stool withholding to daily peace and words!',
    content: 'Before finding Big Mama’s Healing House, our son would scream and hold his stool for 5 days straight. His stomach was hard as a rock and he had constant sensory meltdowns. Within two weeks of starting the Gut Blanket (mixed into apple puree) and Let That Shit Out tea, he had his first pain-free bowel movement. Within a month, his eye contact returned and he started using 3-word sentences. It sounds unbelievable, but healing his gut calmed his entire nervous system.',
    verifiedPurchase: true,
    productMentioned: 'Gut Blanket + Let That Shit Out Tea',
    date: '3 weeks ago'
  },
  {
    id: 't-2',
    author: 'David & Rachel T.',
    location: 'Atlanta, Georgia, USA',
    childProfile: 'Parents to 8-year-old on the spectrum',
    rating: 5,
    title: 'The Parasite Buster was the missing link after 4 years of therapy',
    content: 'We noticed our daughter would grind her teeth relentlessly and wake up screaming every full moon. Hyrian Mitchell’s book opened our eyes to the connection between parasites and neurotransmitters. We did the Parasite Buster 14-day protocol—what we saw in the toilet was terrifying and validating. Since then, her sleep through the night has gone from 4 broken hours to a solid 9 hours!',
    verifiedPurchase: true,
    productMentioned: 'Parasite Buster Seed Cleanse & Autism Blueprint',
    date: '1 month ago'
  },
  {
    id: 't-3',
    author: 'Elena R.',
    location: 'Dublin, Ireland',
    childProfile: 'Adult customer & holistic practitioner',
    rating: 5,
    title: 'The highest quality mucilage herbs on the market',
    content: 'I have tried slippery elm from various commercial brands, but nothing compares to the freshness and purity of Big Mama’s Gut Blanket. It turns thick, gelatinous, and velvety in minutes. It completely eradicated my silent reflux and healed my gut barrier after a grueling antibiotic course. I recommend this store to all my clients.',
    verifiedPurchase: true,
    productMentioned: 'Gut Blanket Herbal Blend',
    date: '2 months ago'
  },
  {
    id: 't-4',
    author: 'Marcus K.',
    location: 'Toronto, Canada',
    childProfile: 'Father of non-verbal 5yo with severe sensory defensiveness',
    rating: 5,
    title: 'Hyrian’s book is the bible for autism parents',
    content: 'Doctors told us to accept the behaviors and just medicate. Hyrian’s Blueprint taught us how to observe gut signs: bloated tummy, dark circles, foul stool smell. The 4-phase framework made the process manageable instead of overwhelming. Today our boy is calmer, happier in his skin, and laughing with his siblings.',
    verifiedPurchase: true,
    productMentioned: 'Healing the Gut: The Ultimate Autism Blueprint (Paperback)',
    date: '2 months ago'
  }
];
