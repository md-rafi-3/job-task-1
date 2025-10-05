import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import bgGif from "../assets/comp1_4.gif"; 

export default function AirokomBanner() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#0b001a] to-[#13002f] text-white overflow-hidden flex flex-col justify-center">
      {/* === Background Animated Layer === */}
      <div className="absolute inset-0 opacity-40">
        <img
          src={bgGif}
          alt="animated background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* === Overlay === */}
      <div className="absolute inset-0 bg-black/50" />

      {/* === Hero Content === */}
      <div className="relative z-20 px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col items-start justify-center min-h-[75vh] text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
        >
          Expert to <br /> Digitalise Your{" "}
          <span className="text-purple-400">Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 max-w-xl text-sm sm:text-base mb-8"
        >
          We are constantly growing, learning, and improving — helping you find
          digital solutions that boost your brand’s growth.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 sm:px-8 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-purple-700/40 transition"
        >
          Explore Now
        </motion.button>
      </div>

      {/* === Brand Logos Section (Marquee using npm) === */}
      <div className="relative z-20 bg-transparent py-6 sm:py-10">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="flex items-center gap-16"
        >
          {[
            "Luminus",
            "Brembo",
            "Motorola",
            "Xiaomi",
            "Tesla",
            "Adidas",
            "Nvidia",
            "Apple",
            "Google",
            "Amazon",
          ].map((brand, i) => (
            <span
              key={i}
              className="mx-10 text-gray-400 text-sm sm:text-base uppercase tracking-widest opacity-70 hover:opacity-100 transition"
            >
              {brand}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
