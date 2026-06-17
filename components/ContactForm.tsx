"use client";

import { useState } from "react";
import { Send, CheckCircle } from "./Icons";

const field =
  "w-full px-4 py-3 rounded-xl border border-[#E6E8E0] bg-white outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30";
const label = "block text-sm font-medium text-[#27313B] mb-1.5";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand-cream rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-accent text-white flex items-center justify-center mx-auto mb-6 animate-[fade-in_.5s_ease]">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-brand-deep">Thank You for Your Enquiry!</h3>
        <p className="mt-3 text-gray-500">
          We have received your message and will get back to you within 24-48 hours. For urgent inquiries,
          please call us at +91 8737958006.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream rounded-2xl p-6 md:p-9">
      <h2 className="text-2xl font-bold text-brand-deep">Send Us an Enquiry</h2>
      <p className="text-gray-500 mt-1 mb-6">Fill out the form below and our export team will get back to you promptly.</p>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="name">Full Name *</label>
            <input id="name" name="name" required placeholder="Your name" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="company">Company Name</label>
            <input id="company" name="company" placeholder="Your company" className={field} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="email">Email Address *</label>
            <input id="email" name="email" type="email" required placeholder="your@email.com" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" placeholder="+1 234 567 8900" className={field} />
          </div>
        </div>

        <div>
          <label className={label} htmlFor="continent">Continent *</label>
          <select id="continent" name="continent" required defaultValue="" className={field}>
            <option value="">Select Continent</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Australia</option>
            <option>Europe</option>
            <option>Middle East</option>
            <option>Asia Pacific</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="country">Country *</label>
            <input id="country" name="country" required placeholder="Your country" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="state">State *</label>
            <input id="state" name="state" required placeholder="Your state or province" className={field} />
          </div>
        </div>

        <div>
          <label className={label} htmlFor="product">Product Interest *</label>
          <select id="product" name="product" required defaultValue="" className={field}>
            <option value="">Select a product</option>
            <option value="moringa-powder">Moringa Leaf Powder</option>
            <option value="dried-leaves">Moringa Dried Leaves</option>
            <option value="tea-cut">Moringa Tea Cut</option>
            </select>
        </div>

        <div>
          <label className={label} htmlFor="quantity">Estimated Quantity (in KG/MT)</label>
          <input id="quantity" name="quantity" placeholder="e.g., 500 KG, 1 MT" className={field} />
        </div>

        <div>
          <label className={label} htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your requirements, including specifications, delivery timeline, packaging etc."
            className={`${field} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent text-white px-6 py-3.5 rounded-full font-semibold text-lg hover:bg-brand-light transition disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <span className="w-5 h-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
          ) : (
            <Send size={20} />
          )}
          {submitting ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
}
