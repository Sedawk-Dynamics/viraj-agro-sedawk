"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

function BotIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <line x1="16" y1="4" x2="16" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 1 C13.5 1 11 3 11 5.5 C11 7.5 13 9 16 8.5 C19 9 21 7.5 21 5.5 C21 3 18.5 1 16 1Z" fill="currentColor" opacity="0.85" />
      <line x1="16" y1="2" x2="16" y2="8" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      <rect x="5" y="9" width="22" height="17" rx="5" fill="currentColor" opacity="0.15" />
      <rect x="5" y="9" width="22" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="11.5" cy="16" r="2" fill="currentColor" />
      <circle cx="11.5" cy="15.3" r="0.6" fill="white" opacity="0.7" />
      <circle cx="20.5" cy="16" r="2" fill="currentColor" />
      <circle cx="20.5" cy="15.3" r="0.6" fill="white" opacity="0.7" />
      <path d="M11 21 Q16 24.5 21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

type Message = { id: number; from: "bot" | "user"; text: string };

const QUICK_REPLIES = [
  "What products do you sell?",
  "Do you export worldwide?",
  "Custom packaging available?",
  "How to place an order?",
];

function getBotReply(input: string): string {
  const q = input.toLowerCase();

  // Products overview
  if (/(product|sell|offer|range|what do you)/i.test(q) && !/(powder|leaf|tea|dried)/i.test(q)) {
    return "We offer 3 premium moringa products:\n\n🌿 Moringa Leaf Powder\n🍃 Moringa Dried Leaves\n🍵 Moringa Tea Cut\n\nWe also do custom bulk packaging with private label. Ask me about any specific product!";
  }

  // Moringa Powder
  if (/(powder|leaf powder)/i.test(q)) {
    return "🌿 Moringa Leaf Powder\n\nFine 80–100 mesh powder, rich dark green color, 100% pure. Ideal for food, beverages, cosmetics and pharma use.\n\n✅ NABL lab tested\n✅ Moisture controlled\n✅ Available in 1 KG to 50 KG bags";
  }

  // Dried Leaves
  if (/(dried leaf|dried leave|whole leaf|moringa leaf)/i.test(q)) {
    return "🍃 Moringa Dried Leaves\n\nCarefully shade-dried whole moringa leaves. Retains natural green color and full nutritional profile.\n\n✅ Shade dried — no heat damage\n✅ Export grade quality\n✅ Available in bulk quantities";
  }

  // Tea Cut
  if (/(tea|tea cut|infusion|herbal)/i.test(q)) {
    return "🍵 Moringa Tea Cut\n\nPremium tea-cut leaves perfect for herbal infusions and blends. Aromatic, nutrient-rich and export ready.\n\n✅ Infusion ready\n✅ Aromatic and flavourful\n✅ Available in custom pack sizes";
  }

  // Certifications
  if (/(certif|apeda|fssai|iec|complian|standard|approv)/i.test(q)) {
    return "We hold the following certifications:\n\n🏅 APEDA Registered Exporter\n🏅 FSSAI Compliant\n🏅 IEC (Import Export Code) Certified\n\nEvery batch comes with a NABL lab-issued Certificate of Analysis (COA) and Phytosanitary Certificate for smooth import clearance worldwide.";
  }

  // Shipping / Export / Countries
  if (/(ship|export|deliver|country|countries|worldwide|global|international)/i.test(q)) {
    return "🌍 We ship worldwide!\n\nCurrently exporting to 6+ countries across Europe, USA, Asia, Middle East and beyond.\n\nWe handle:\n✅ Phytosanitary certificates\n✅ Complete export documentation\n✅ Reliable freight solutions\n✅ Door-to-door shipping support";
  }

  // Custom Packaging / Private Label
  if (/(custom|packaging|private label|brand|oem|label)/i.test(q)) {
    return "📦 Yes, we offer full custom packaging!\n\n✅ Private label with your brand\n✅ Sizes: 1 KG, 5 KG, 10 KG, 25 KG, 50 KG\n✅ Branded outer cartons\n✅ Vacuum-sealed & nitrogen-flushed options\n✅ Retail-ready consumer packs\n✅ Unbranded OEM bulk supply\n\nContact us to discuss your exact requirements.";
  }

  // Nutrition / protein / vitamins
  if (/(protein|vitamin|nutrition|nutrient|calori|iron|calcium|amino|antioxid|mineral)/i.test(q)) {
    return "Moringa is one of the most nutrient-dense plants in the world! 🌿\n\nFor detailed nutritional data and our lab-tested Certificate of Analysis (COA), please contact us:\n\n📧 enquiry@virajagronaturals.in\n📞 +91 8737958006\n\nWe'll send you the full nutritional report for any product.";
  }

  // MOQ / Minimum order
  if (/(moq|minimum order|min order|quantity)/i.test(q)) {
    return "Our MOQ (Minimum Order Quantity) is flexible and depends on the product and packaging type.\n\nFor exact MOQ details and pricing, please reach out:\n\n📞 +91 8737958006\n📧 enquiry@virajagronaturals.in\n💬 WhatsApp us for a quick response!";
  }

  // Pricing / Cost / Price
  if (/(price|pricing|cost|rate|quote|quotation)/i.test(q)) {
    return "Pricing depends on the product, quantity and packaging requirements.\n\n📋 For a custom quote:\n✅ Tell us the product\n✅ Your required quantity\n✅ Packaging preference\n\nContact us at:\n📞 +91 8737958006\n📧 enquiry@virajagronaturals.in\n\nWe respond within 24 hours!";
  }

  // Quality / Lab / Testing
  if (/(quality|lab|test|nabl|purity|safe|hygien)/i.test(q)) {
    return "🔬 Quality is our top priority!\n\nEvery batch goes through:\n✅ NABL accredited lab testing\n✅ Moisture content check\n✅ Microbial count testing\n✅ Nutritional profile analysis\n✅ Color and mesh size verification\n\nOnly batches that pass our strict standards are cleared for export.";
  }

  // Order / How to order / Buy
  if (/(order|buy|purchase|how to|get start|sourcing|enquir|inquir)/i.test(q)) {
    return "Placing an order is easy! 🎉\n\n1️⃣ Tell us your product, quantity & packaging\n2️⃣ We send you pricing & sample availability\n3️⃣ Confirm the order & we begin processing\n4️⃣ Export documentation prepared\n5️⃣ Shipped to your destination\n\n📞 Call: +91 8737958006\n📧 Email: enquiry@virajagronaturals.in\n💬 WhatsApp us for fastest response!";
  }

  // Contact / Phone / Email / WhatsApp
  if (/(contact|phone|call|email|whatsapp|reach|touch)/i.test(q)) {
    return "📬 Get in touch with us:\n\n📞 Phone: +91 8737958006\n📧 Email: enquiry@virajagronaturals.in\n💬 WhatsApp: +91 8737958006\n📍 Based in Kanpur, Uttar Pradesh, India\n\nWe typically respond within a few hours!";
  }

  // About company
  if (/(about|who are|company|viraj|founded|story)/i.test(q)) {
    return "🌱 About Viraj Agro Naturals\n\nWe are a specialized Indian exporter of premium moringa products, founded in 2025 and based in Kanpur, Uttar Pradesh.\n\nOur mission is to connect India's finest moringa farms with global buyers — with full quality traceability, proper certifications and reliable export support.\n\n🏅 APEDA | FSSAI | IEC Certified";
  }

  // Greetings
  if (/(hi|hello|hey|good morning|good evening|namaste)/i.test(q)) {
    return "Hello! 👋 Welcome to Viraj Agro Naturals.\n\nWe are a premium Indian moringa exporter. You can ask me about:\n🌿 Our products\n📦 Custom packaging\n🌍 Export & shipping\n🏅 Certifications\n📞 How to place an order";
  }

  // Thanks
  if (/(thank|thanks|thank you|thx)/i.test(q)) {
    return "You're welcome! 😊 Feel free to ask anything else about our moringa products or export services.\n\nFor direct enquiries:\n📞 +91 8737958006\n📧 enquiry@virajagronaturals.in";
  }

  // Default fallback
  return "I don't have a specific answer for that right now.\n\nPlease contact us and our team will get back to you shortly:\n\n📧 enquiry@virajagronaturals.in\n📞 +91 8737958006\n\nWe typically respond within a few hours!";
}

let nextId = 10;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, from: "bot", text: "Hello 👋 Welcome to Viraj Agro Naturals!" },
    { id: 2, from: "bot", text: "Ask me anything about our moringa products, export services, certifications or how to place an order." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleVisibility = () => { if (!document.hidden) setOpen(false); };
    const handleBeforeUnload = () => setOpen(false);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setInput("");

    const userMsg: Message = { id: nextId++, from: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setTyping(false);
      setMessages((prev) => [...prev, { id: nextId++, from: "bot", text: reply }]);
    }, 900);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ scale: 0, opacity: 0, borderRadius: "50%", originX: 1, originY: 1 }}
            animate={{ scale: 1, opacity: 1, borderRadius: "24px" }}
            exit={{ scale: 0, opacity: 0, borderRadius: "50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "bottom right", maxHeight: "520px" }}
            className="w-[320px] sm:w-[360px] bg-white shadow-2xl overflow-hidden flex flex-col"
            aria-label="Chat support window"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-band to-[#0f3d20] px-5 py-4 flex items-center justify-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="Viraj Agro Naturals" className="h-9 w-auto brightness-0 invert" />
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-4 bg-gray-50 space-y-3 overflow-y-auto" style={{ minHeight: "220px" }}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
                >
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-band to-[#0f3d20] flex items-center justify-center text-white shrink-0">
                      <BotIcon size={15} />
                    </div>
                  )}
                  <div
                    className={`text-[0.8rem] px-3.5 py-2.5 rounded-2xl shadow-sm max-w-[78%] leading-relaxed whitespace-pre-line ${
                      msg.from === "bot"
                        ? "bg-white text-[#27313B] rounded-bl-sm"
                        : "bg-gradient-to-br from-brand-accent to-brand-deep text-white rounded-br-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-band to-[#0f3d20] flex items-center justify-center text-white shrink-0">
                    <BotIcon size={15} />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-brand-accent block"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-1.5">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => sendMessage(qr)}
                    className="text-[0.72rem] px-2.5 py-1 rounded-full border border-brand-accent/40 text-brand-deep hover:bg-brand-accent hover:text-white transition-colors"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 bg-white border-t border-gray-100 flex items-center gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") sendMessage(input); }}
                placeholder="Ask about products, shipping..."
                className="flex-1 text-sm bg-gray-100 rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-accent/40 text-[#27313B] placeholder:text-gray-400"
              />
              <button
                onClick={() => sendMessage(input)}
                aria-label="Send message"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-accent to-brand-deep flex items-center justify-center shrink-0 hover:opacity-90 transition"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
                  <path d="M2.94 17.94l16-7.94-16-7.94v6.25l11.43 1.69-11.43 1.69v6.25z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating bubble */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        animate={open ? { rotate: 90 } : { rotate: 0 }}
        transition={{ duration: 0.15 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-accent to-brand-deep text-white flex items-center justify-center shadow-[0_8px_24px_rgba(20,83,45,0.4)] hover:shadow-[0_12px_32px_rgba(20,83,45,0.5)] transition-shadow"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg key="x" initial={{ opacity: 0, rotate: -90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.5 }} transition={{ duration: 0.15 }} width="18" height="18" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </motion.svg>
          ) : (
            <motion.div key="bot" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.15 }} className="text-white">
              <BotIcon size={26} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
