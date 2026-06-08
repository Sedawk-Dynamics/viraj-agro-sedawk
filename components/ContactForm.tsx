"use client";

import { useState } from "react";
import { Send, CheckCircle } from "./Icons";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate a 1.5s submit to mirror the original UX.
    await new Promise((res) => setTimeout(res, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <CheckCircle size={32} />
        </div>
        <h3>Thank You for Your Enquiry!</h3>
        <p>
          We have received your message and will get back to you within 24-48 hours. For urgent
          inquiries, please call us at +91 8737958006.
        </p>
      </div>
    );
  }

  return (
    <div className="reveal">
      <div className="contact-form-wrap">
        <h2>Send Us an Enquiry</h2>
        <p>Fill out the form below and our export team will get back to you promptly.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input type="text" id="company" name="company" placeholder="Your company" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8900" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="continent">Continents *</label>
            <select id="continent" name="continent" required defaultValue="">
              <option value="">Select Continent</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Australia">Australia</option>
              <option value="Europe">Europe</option>
              <option value="Middle East">Middle East</option>
              <option value="Asia Pacific">Asia Pacific</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="country">Country *</label>
            <input type="text" id="country" name="country" required placeholder="Your country" />
          </div>

          <div className="form-group">
            <label htmlFor="state">State *</label>
            <input type="text" id="state" name="state" required placeholder="Your state or province" />
          </div>

          <div className="form-group">
            <label htmlFor="product">Product Interest *</label>
            <select id="product" name="product" required defaultValue="">
              <option value="">Select a product</option>
              <option value="moringa">Moringa Powder</option>
              <option value="chicory">Chicory Roots</option>
              <option value="both">Both Products</option>
              <option value="other">Other / General Inquiry</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Estimated Quantity (in KG/MT)</label>
            <input type="text" id="quantity" name="quantity" placeholder="e.g., 500 KG, 1 MT" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your requirements, including specifications, delivery timeline, etc."
            ></textarea>
          </div>

          <button type="submit" className="btn-submit" disabled={submitting}>
            {submitting && <span className="spinner"></span>}
            <Send size={20} className="submit-icon" />
            <span className="submit-label">{submitting ? "Sending..." : "Send Enquiry"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
