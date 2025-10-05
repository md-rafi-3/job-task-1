import React from "react";
import Logo from "../assets/Frame.gif";

export default function NewsletterSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0c0518] to-[#120a25] py-16 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-5">
          <img
            src={Logo}
            alt="logo"
            className="w-12 h-12"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
        <p className="text-gray-400 text-sm mb-6">
          Join the 25000+ clients in our company
        </p>

        <form className="flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-full bg-[#1a132d] border border-gray-700 text-sm focus:border-purple-500 outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90 transition shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          >
            ✦ Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
