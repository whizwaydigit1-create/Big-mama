import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, ExternalLink, Sparkles, CheckCheck, Clock } from 'lucide-react';

interface WhatsAppChatButtonProps {
  consultationPhone?: string;
  displayPhone?: string;
}

const PRESET_TOPICS = [
  {
    id: 'gut-blanket',
    label: 'Gut Blanket / Autism Dosage',
    message: "Hi Hyrian! I have a question about the Gut Blanket blend and proper dosage for my child with ASD.",
  },
  {
    id: 'parasite-protocol',
    label: 'Parasite Buster & Motility',
    message: "Hello Hyrian! I'd like to learn more about the Parasite Buster seed protocol and gut motility blends.",
  },
  {
    id: 'book-inquiry',
    label: 'Autism Blueprint Book / E-Book',
    message: "Hi Big Mama! I'm interested in 'Healing the Gut: The Ultimate Autism Blueprint' and have a quick question.",
  },
  {
    id: 'general-consult',
    label: 'Personal Founder Consultation',
    message: "Hello Hyrian, I'm reaching out from Big Mama's Healing House website for personal guidance on gut-brain harmony.",
  },
];

export const WhatsAppChatButton: React.FC<WhatsAppChatButtonProps> = ({
  consultationPhone = '14045907828',
  displayPhone = '+1 (404) 590-7828',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>(PRESET_TOPICS[0].id);
  const [customMessage, setCustomMessage] = useState<string>(PRESET_TOPICS[0].message);
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close popup if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectTopic = (topicId: string) => {
    setSelectedTopic(topicId);
    const found = PRESET_TOPICS.find((t) => t.id === topicId);
    if (found) {
      setCustomMessage(found.message);
    }
  };

  const handleOpenWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const encodedText = encodeURIComponent(customMessage.trim());
    const whatsappUrl = `https://wa.me/${consultationPhone}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setShowNotificationBadge(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setShowNotificationBadge(false);
  };

  return (
    <aside
      id="whatsapp-founder-support"
      aria-label="Direct WhatsApp Consultation Support"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-none"
    >
      {/* Consultation Chat Popup Card */}
      {isOpen && (
        <div
          ref={cardRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-card-title"
          className="pointer-events-auto mb-3 w-[92vw] sm:w-96 max-w-sm bg-[#FAF6F0] rounded-2xl shadow-2xl border border-[#D9CEBF] overflow-hidden transition-all duration-200 animate-in fade-in slide-in-from-bottom-4"
        >
          {/* Card Header with Founder Identity */}
          <div className="bg-[#2D382E] text-[#FBF8F3] p-4 relative">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat card"
              className="absolute top-3.5 right-3.5 text-[#C4D0C1] hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              {/* Founder Avatar representation with active indicator */}
              <div className="relative shrink-0">
                <div className="w-11 h-11 rounded-full bg-[#EAE2D5] border-2 border-[#E6C280] overflow-hidden flex items-center justify-center text-[#2D382E] font-serif font-bold text-sm">
                  HM
                </div>
                <span
                  title="Founder is Available"
                  className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#25D366] border-2 border-[#2D382E] rounded-full"
                />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 id="whatsapp-card-title" className="font-serif font-bold text-sm text-[#FBF8F3]">
                    Hyrian Mitchell
                  </h3>
                  <span className="text-[10px] bg-[#E6C280]/20 text-[#E6C280] border border-[#E6C280]/40 px-1.5 py-0.2 rounded font-medium">
                    Founder
                  </span>
                </div>
                <p className="text-[11px] text-[#C4D0C1] flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-[#A3B899]" />
                  <span>Direct WhatsApp line: {displayPhone}</span>
                </p>
              </div>
            </div>

            <div className="mt-2.5 pt-2.5 border-t border-white/10 text-xs text-[#EAE2D5] leading-relaxed">
              &ldquo;Have questions about our autism gut protocols or need guidance choosing a blend? Message me directly.&rdquo;
            </div>
          </div>

          {/* Body: Presets & Custom Message */}
          <div className="p-4 space-y-3.5 text-xs">
            {/* Quick Topic Chips */}
            <div>
              <label className="block text-[11px] font-semibold text-[#4A574B] uppercase tracking-wider mb-2">
                Select Consultation Topic
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {PRESET_TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => handleSelectTopic(topic.id)}
                    className={`text-left px-3 py-2 rounded-xl text-xs transition-all border ${
                      selectedTopic === topic.id
                        ? 'bg-[#2D382E] text-[#FBF8F3] border-[#2D382E] shadow-2xs font-medium'
                        : 'bg-white text-[#2D382E] border-[#D9CEBF] hover:bg-[#F3EEE6]'
                    }`}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Editable WhatsApp Text Preview */}
            <form onSubmit={handleOpenWhatsApp} className="space-y-3 pt-1">
              <div>
                <label htmlFor="whatsapp-message-input" className="block text-[11px] font-semibold text-[#4A574B] mb-1">
                  Message Preview
                </label>
                <textarea
                  id="whatsapp-message-input"
                  rows={3}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="w-full bg-white border border-[#D9CEBF] rounded-xl p-2.5 text-xs text-[#2D382E] outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] resize-none leading-relaxed"
                  placeholder="Type your message to founder Hyrian..."
                />
              </div>

              {/* Primary Action Button */}
              <button
                type="submit"
                id="btn-start-whatsapp-chat"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Start WhatsApp Consultation</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </button>
            </form>

            {/* Privacy & Response Note */}
            <div className="pt-2 border-t border-[#EAE2D5] flex items-center justify-between text-[10px] text-[#7D8C7C]">
              <span className="flex items-center gap-1">
                <CheckCheck className="w-3 h-3 text-[#25D366]" />
                Direct 1-on-1 Founder Support
              </span>
              <span>Mon&ndash;Sat response</span>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Floating 'Message Us' Button */}
      <div className="pointer-events-auto flex items-center gap-2">
        {/* Subtle Greeting Bubble (shows before opening) */}
        {!isOpen && showNotificationBadge && (
          <button
            type="button"
            onClick={toggleOpen}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#2D382E] text-[#FBF8F3] px-3.5 py-2 rounded-full text-xs shadow-lg border border-[#3D4B3E] hover:bg-[#3D4B3E] transition-all cursor-pointer group"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E6C280] shrink-0" />
            <span className="font-medium">Need dosage advice? Ask Hyrian</span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                setShowNotificationBadge(false);
              }}
              className="text-[#A3B899] hover:text-white ml-1 text-xs"
              title="Dismiss note"
            >
              &times;
            </span>
          </button>
        )}

        {/* WhatsApp Floating Button */}
        <button
          type="button"
          id="btn-whatsapp-chat-toggle"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          onClick={toggleOpen}
          className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#25D366]/40"
        >
          {/* Pulsing online badge */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>

          <MessageCircle className="w-5 h-5 fill-current" />
          
          <span className="font-bold text-xs tracking-wide">
            Message Us
          </span>

          {/* Quick Direct Link hover hint */}
          <span className="sr-only">Direct WhatsApp support with founder Hyrian Mitchell</span>
        </button>
      </div>
    </aside>
  );
};
