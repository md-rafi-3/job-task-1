import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function FooterMapSection() {
  return (
    <section className="relative w-full bg-[#0a0515] text-white overflow-hidden py-24">
      {/* ===== Background Map ===== */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/e/ef/BlankMap-World-Microstates.svg')",
        }}
      ></div>

      {/* ===== Glow Overlay ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#120a25]/50 to-[#0a0515]"></div>

      {/* ===== Map Pins (animated glowing markers) ===== */}
      <div className="absolute w-full h-full">
        <span className="absolute top-[45%] left-[48%] w-3 h-3 bg-purple-500 rounded-full animate-ping"></span>
        <span className="absolute top-[45%] left-[48%] w-3 h-3 bg-purple-400 rounded-full"></span>

        <span className="absolute top-[60%] left-[20%] w-3 h-3 bg-yellow-400 rounded-full animate-ping"></span>
        <span className="absolute top-[60%] left-[20%] w-3 h-3 bg-yellow-300 rounded-full"></span>

        <span className="absolute top-[30%] left-[75%] w-3 h-3 bg-pink-500 rounded-full animate-ping"></span>
        <span className="absolute top-[30%] left-[75%] w-3 h-3 bg-pink-400 rounded-full"></span>
      </div>

      {/* ===== Floating Card ===== */}
      <div className="relative max-w-6xl mx-auto flex justify-end items-center">
        <div className="relative z-10 bg-gradient-to-br from-[#1a122d] to-[#0d071a] backdrop-blur-xl border border-[#3b2a63]/40 shadow-[0_0_40px_rgba(139,92,246,0.3)] rounded-2xl p-8 w-[350px] md:w-[400px]">
          <h3 className="text-xl font-semibold text-white mb-4">
            Metro Solver
          </h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-purple-400 mt-[3px]" />
              Head Office: Metro Solver Limited, Grantham Road, London E12 6SL, United Kingdom
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-400" /> +447946860435
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-400" /> +447485660825
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" /> contact@metrosolver.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
