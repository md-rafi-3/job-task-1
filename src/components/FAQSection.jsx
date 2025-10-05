import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const categories = [
  "Digital Marketing",
  "Web & Software Development",
  "Graphic Design & Logos",
  "Multimedia & Video Editing",
  "Creative Writing Solutions",
  "E-Commerce Solutions",
  "Refund, Earn & Cancel Policies",
  "Getting Started & Service Info",
  "General Policies & Customer Support",
];

const faqs = [
  {
    question: "What services do you offer in digital marketing?",
    answer:
      "We provide SEO, social media management, email marketing, content marketing, PPC campaigns, and more.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing helps increase brand awareness, generate leads, and improve your overall ROI.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We use analytics tools to track KPIs like impressions, engagement, and conversions to measure performance.",
  },
  {
    question: "Do you offer local SEO?",
    answer:
      "Yes, we optimize your business for local search visibility, Google My Business, and map listings.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-black text-white py-20 px-6">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), #000000",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Got Questions? <br /> We’ve got Answers
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Categories */}
          <ul className="space-y-3 text-gray-300">
            {categories.map((cat, i) => (
              <li
                key={i}
                className={`flex items-center gap-2 text-sm hover:text-purple-400 cursor-pointer transition ${
                  i === 0 ? "text-purple-400 font-semibold" : ""
                }`}
              >
                <span className="text-purple-400">•</span> {cat}
              </li>
            ))}
          </ul>

          {/* Right Accordion */}
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-[#151025] rounded-xl border border-gray-800 hover:border-purple-600 transition-all"
              >
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="flex justify-between w-full p-4 text-left font-medium"
                >
                  {item.question}
                  {active === i ? (
                    <FaChevronUp className="text-purple-400" />
                  ) : (
                    <FaChevronDown className="text-purple-400" />
                  )}
                </button>
                {active === i && (
                  <p className="px-4 pb-4 text-gray-400 text-sm">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
