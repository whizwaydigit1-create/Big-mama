import React, { useState } from 'react';
import { FAQS_DATA, TESTIMONIALS_DATA } from '../data/faqs';
import { ChevronDown, ChevronUp, Search, Star, MessageSquare, Send, CheckCircle2, ShieldCheck, Heart, MessageCircle } from 'lucide-react';

export const FAQAndContact: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [faqSearch, setFaqSearch] = useState('');
  
  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactProfile, setContactProfile] = useState('Autism / Sensory Parent');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  const filteredFaqs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.category.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setIsSubmitted(true);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Testimonials Section */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4A5D4E] bg-[#EAE2D5] px-3 py-1 rounded-full">
              <Heart className="w-3.5 h-3.5 text-[#A06E35]" />
              <span>Real Family Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D382E]">
              From Sensory Despair to Peaceful Days
            </h2>
            <p className="text-xs sm:text-sm text-[#526053]">
              Read verified feedback from mothers, fathers, and practitioners implementing Big Mama&apos;s protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-[#FFFFFF] border border-[#E3DBD0] rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#D98E32]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D98E32]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#8C9B8B]">{t.date}</span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-[#2D382E]">
                    &ldquo;{t.title}&rdquo;
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A574B] leading-relaxed">
                    {t.content}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#2D382E] block">{t.author}</span>
                    <span className="text-[11px] text-[#6B7A6C]">{t.childProfile || t.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#4A5D4E] font-medium bg-[#E8EFE6] px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Buyer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ & Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-[#E8E0D5]">
          
          {/* FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A06E35]">
                Common Questions &amp; Safety
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D382E]">
                Frequently Asked Questions
              </h3>
            </div>

            {/* FAQ Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#7D8C7C] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQs (e.g. child dosage, cold infusion, shipping...)"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full bg-[#FFFFFF] border border-[#D9CEBF] rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#2D382E] placeholder-[#8C9B8B] outline-none focus:border-[#4A5D4E]"
              />
            </div>

            {/* Accordion list */}
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-[#FFFFFF] border border-[#E3DBD0] rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-[#2D382E] hover:text-[#4A5D4E] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#7D8C7C] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-[#4A574B] leading-relaxed border-t border-[#F0EAE1] pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Direct Consultation Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] border border-[#D9CEBF] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5 sticky top-24">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5D4E] flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Holistic Consultation
                </span>
                <h3 className="text-xl font-serif font-bold text-[#2D382E]">
                  Ask Big Mama&apos;s Team
                </h3>
                <p className="text-xs text-[#6B7A6C]">
                  Have a specific question about child dosages, picky-eater blending, or combining remedies? Send us a message.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-[#EAF0E8] border border-[#CFDFCC] p-6 rounded-2xl text-center space-y-3 text-[#2D382E]">
                  <div className="w-12 h-12 bg-[#4A5D4E] text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-lg">Message Received</h4>
                  <p className="text-xs text-[#4A574B] leading-relaxed">
                    Thank you, {contactName}! Our herbal apothecary team will review your inquiry and reply to {contactEmail} within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setContactMessage('');
                    }}
                    className="text-xs text-[#4A5D4E] font-semibold underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                  <div>
                    <label htmlFor="contact-name" className="font-semibold text-[#2D382E] block mb-1">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-[#F5EFEB] border border-[#D9CEBF] rounded-xl px-3.5 py-2 text-xs text-[#2D382E] outline-none focus:border-[#4A5D4E]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="font-semibold text-[#2D382E] block mb-1">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-[#F5EFEB] border border-[#D9CEBF] rounded-xl px-3.5 py-2 text-xs text-[#2D382E] outline-none focus:border-[#4A5D4E]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-profile" className="font-semibold text-[#2D382E] block mb-1">
                      I am inquiring as a:
                    </label>
                    <select
                      id="contact-profile"
                      value={contactProfile}
                      onChange={(e) => setContactProfile(e.target.value)}
                      className="w-full bg-[#F5EFEB] border border-[#D9CEBF] rounded-xl px-3.5 py-2 text-xs text-[#2D382E] outline-none focus:border-[#4A5D4E] cursor-pointer"
                    >
                      <option value="Autism / Sensory Parent">Parent of Neurodivergent Child</option>
                      <option value="Adult Gut Health Warrior">Adult seeking gut/reflux relief</option>
                      <option value="Holistic Practitioner">Functional Medicine Practitioner / OT</option>
                      <option value="Other">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="font-semibold text-[#2D382E] block mb-1">
                      Your Question or Symptoms
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      placeholder="Tell us about the gut concerns, age, or blend questions..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full bg-[#F5EFEB] border border-[#D9CEBF] rounded-xl px-3.5 py-2 text-xs text-[#2D382E] outline-none focus:border-[#4A5D4E] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2D382E] hover:bg-[#3D4B3E] text-[#FBF8F3] py-2.5 rounded-xl font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#E6C280]" />
                    <span>Send Consultation Request</span>
                  </button>
                </form>
              )}

              {/* Direct WhatsApp Callout */}
              <div className="pt-3 border-t border-[#EAE2D5] text-center">
                <p className="text-[11px] text-[#556455] mb-2 font-medium">
                  Need an immediate answer on dosage or blends?
                </p>
                <a
                  href="https://wa.me/14045907828?text=Hello%20Hyrian%2C%20I%20have%20a%20question%20about%20Big%20Mama%27s%20Healing%20House%20botanicals..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Message Hyrian on WhatsApp (+1 404-590-7828)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
