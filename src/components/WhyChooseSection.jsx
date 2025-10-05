import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function WhyChooseSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Global Background Glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), #000000",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Why You <br />
            Choose <span className="text-purple-400">Metro Solver?</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
            We are constantly growing, learning, and improving. Enter your
            personal real estate sanctuary, where finding the ideal home is
            effortless and comfortable with our assistance.
          </p>

          <button className="btn bg-gradient-to-r from-purple-600 to-indigo-600 border-0 rounded-full px-8 py-3 text-white text-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-600/40 transition-all duration-300">
            Book Now <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-start gap-7 md:pl-12 relative">
          {[
            { text: "Cancel Anytime", rotate: "-rotate-3", bg: "bg-[#0e0e1a]" },
            {
              text: "24/7 Customer Service",
              rotate: "rotate-2",
              bg: "bg-gradient-to-r from-purple-600 to-indigo-600",
            },
            { text: "Refers & Earn", rotate: "-rotate-2", bg: "bg-[#0e0e1a]" },
            {
              text: "Money Back Guarantee",
              rotate: "rotate-1",
              bg: "bg-[#0e0e1a]",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bg} ${item.rotate} px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-500 cursor-pointer hover:rotate-0 hover:shadow-purple-600/50 hover:shadow-xl hover:scale-105`}
              style={{
                backdropFilter: "blur(8px)",
                background:
                  item.bg.includes("gradient") && index === 1
                    ? "linear-gradient(90deg, #7e22ce 0%, #4f46e5 100%)"
                    : "rgba(15, 15, 30, 0.9)",
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
