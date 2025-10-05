import React from "react";
import CountUp from "react-countup";

export default function CountUpSection() {
  const stats = [
    { value: 150, label: "Current Clients" },
    { value: 25000, label: "Completed Projects" },
    { value: 90, label: "Metro Solver Teams" },
  ];

  return (
    <section className="relative w-full py-20 bg-black text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), #000000",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-[#1a0b2e] to-[#0b0614] rounded-2xl py-10 border border-purple-800/30 shadow-lg shadow-purple-800/20"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
              <CountUp end={item.value} duration={3} />+
            </h3>
            <p className="text-gray-300 text-lg font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
