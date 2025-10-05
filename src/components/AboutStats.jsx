import React from "react";

export default function AboutStats() {
  const stats = [
    { number: "150+", label: "Current Clients" },
    { number: "25k+", label: "Completed Projects" },
    { number: "90+", label: "Industry Awards" },
  ];

  return (
    <section className="bg-[#13042d] text-white py-16 px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-purple-400">{item.number}</h3>
            <p className="text-gray-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
