import React from "react";
import Marquee from "react-fast-marquee";

export default function LatestWorksSection() {
  const row1 = [
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c09?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1612831662375-295c1003d3f1?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1602524208693-5e2b6aa4a1d2?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1621961457771-f9e8e90c939c?auto=format&fit=crop&w=800&q=60",
  ];

  const row2 = [
    "https://images.unsplash.com/photo-1619530902912-3b3db510f39b?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1607082349566-187342aa16c2?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1611095788885-efec3a3c8bdf?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1620626011761-cb8e2c66f9a2?auto=format&fit=crop&w=800&q=60",
  ];

  const row3 = [
    "https://images.unsplash.com/photo-1607083207800-7f6a9f3b39e0?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1616628188506-8a4b1a31cacf?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1607082349566-187342aa16c2?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1621961457771-f9e8e90c939c?auto=format&fit=crop&w=800&q=60",
  ];

  const renderRow = (images, reverse = false) => (
    <Marquee
      direction={reverse ? "right" : "left"}
      pauseOnHover={true}
      speed={35}
      gradient={true}
      gradientColor={[11, 0, 26]}
      gradientWidth={100}
      className="py-6 overflow-hidden"
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="w-[340px] min-w-[340px] mx-4 rounded-2xl overflow-hidden relative shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:shadow-purple-600/50 group"
        >
          <img
            src={src}
            alt={`work-${i}`}
            className="w-full h-[220px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-purple-800/40 transition-all duration-300"></div>
          <div className="absolute bottom-0 p-4 z-10">
            <p className="text-xs text-gray-300">UI/UX Design</p>
            <h3 className="font-semibold text-lg">Creative Dashboard</h3>
          </div>
        </div>
      ))}
    </Marquee>
  );

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#0b001a] to-[#13002f] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Our Latest Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Some of our latest creative UI/UX, branding, and development works.
            Hover to preview each project.
          </p>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-10 overflow-hidden">
          {renderRow(row1, false)} {/* left to right */}
          {renderRow(row2, true)}  {/* right to left */}
          {renderRow(row3, false)} {/* left to right */}
        </div>
      </div>
    </section>
  );
}
