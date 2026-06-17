"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Moringa-bot icon — robot face with a moringa leaf antenna */
function BotIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Stem */}
      <line x1="16" y1="4" x2="16" y2="8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Moringa leaf at tip of stem */}
      <path
        d="M16 1 C13.5 1 11 3 11 5.5 C11 7.5 13 9 16 8.5 C19 9 21 7.5 21 5.5 C21 3 18.5 1 16 1Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Leaf vein */}
      <line x1="16" y1="2" x2="16" y2="8" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      {/* Bot head */}
      <rect x="5" y="9" width="22" height="17" rx="5" fill="currentColor" opacity="0.15" />
      <rect x="5" y="9" width="22" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      {/* Left eye */}
      <circle cx="11.5" cy="16" r="2" fill="currentColor" />
      <circle cx="11.5" cy="15.3" r="0.6" fill="white" opacity="0.7" />
      {/* Right eye */}
      <circle cx="20.5" cy="16" r="2" fill="currentColor" />
      <circle cx="20.5" cy="15.3" r="0.6" fill="white" opacity="0.7" />
      {/* Smile */}
      <path
        d="M11 21 Q16 24.5 21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

const INITIAL_MESSAGES = [
  { id: 1, text: "Hello 👋", delay: 0 },
  { id: 2, text: "How can we help you today?", delay: 0.12 },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Auto-close on page hide / return */
  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden) setOpen(false);
    };
    const handleBeforeUnload = () => setOpen(false);

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  /* Focus input when opened */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350);
  }, [open]);

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
            style={{ transformOrigin: "bottom right" }}
            className="w-[320px] sm:w-[360px] bg-white shadow-2xl overflow-hidden flex flex-col"
            aria-label="Chat support window"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-band to-[#0f3d20] px-5 py-4 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="Viraj Agro Naturals" className="h-9 w-auto brightness-0 invert" />
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-5 bg-gray-50 space-y-3 min-h-[160px]">
              {INITIAL_MESSAGES.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.3 + msg.delay, ease: "easeOut" }}
                  className="flex items-end gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-band to-[#0f3d20] flex items-center justify-center text-white shrink-0">
                    <BotIcon size={18} />
                  </div>
                  <div className="bg-white text-[#27313B] text-sm px-4 py-2.5 rounded-2xl rounded-bl-sm shadow-sm max-w-[75%] leading-relaxed">
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 bg-white border-t border-gray-100 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a message..."
                className="flex-1 text-sm bg-gray-100 rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-accent/40 text-[#27313B] placeholder:text-gray-400"
              />
              <button
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
            <motion.svg
              key="x"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.15 }}
              width="18" height="18" viewBox="0 0 14 14" fill="none"
            >
              <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </motion.svg>
          ) : (
            <motion.div
              key="bot"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
              className="text-white"
            >
              <BotIcon size={26} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
