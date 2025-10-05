import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/Frame.gif";


export default function ContactSection() {
  return (
    <section className="relative bg-black text-white py-20 px-6">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), #000000",
        }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Info Box */}
        <div className="bg-gradient-to-br from-[#151025] to-[#0b0615] rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(139,92,246,0.25)]">
          <div className="w-20 h-20 flex items-center justify-center bg-purple-600/10 rounded-xl mb-4">
            <img
              src={Logo}
              alt="logo"
              className="w-10 h-10"
            />
          </div>
          <h2 className="text-2xl font-bold mb-3">Still Have A Questions?</h2>
          <div className="flex gap-4 mt-4">
            {[FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaEnvelope].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a132d] hover:bg-purple-700 transition-all"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Right Form */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md bg-[#151025] border border-gray-700 focus:border-purple-500 outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 rounded-md bg-[#151025] border border-gray-700 focus:border-purple-500 outline-none text-sm"
            />
            <input
              type="text"
              placeholder="WhatsApp/Phone"
              className="w-full p-3 rounded-md bg-[#151025] border border-gray-700 focus:border-purple-500 outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Which area for support?"
              className="w-full p-3 rounded-md bg-[#151025] border border-gray-700 focus:border-purple-500 outline-none text-sm"
            />
          </div>
          <textarea
            rows="4"
            placeholder="Message goes here..."
            className="w-full p-3 rounded-md bg-[#151025] border border-gray-700 focus:border-purple-500 outline-none text-sm"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90 transition font-semibold shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            ✦ Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
