import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  const officeImage =
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80";

  return (
    <section
      className="min-h-[80vh] bg-[#0e0122] text-white py-28 md:py-32 px-8 md:px-20 overflow-hidden mt-[80px]"
    >
      {/* ↑ added mt-[80px] to push down below fixed navbar */}

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Unveiling the Essence <br /> of Our Metro
          </h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            Our agency is dedicated to crafting innovative solutions and helping
            businesses grow through technology, creativity, and strategic
            planning. We aim to redefine success through dedication and
            innovation.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg">
            Read More
          </button>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={officeImage}
            alt="Office"
            className="rounded-2xl shadow-lg border border-purple-700/40 w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
