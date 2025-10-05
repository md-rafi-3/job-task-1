import React, { useState } from "react";

const data = [
  // Success Stories
  {
    id: 1,
    title: "The Future of Metro Systemology Campaign",
    category: "Success Stories",
    author: "Admin",
    date: "Sep 1, 2023",
    image: "https://via.placeholder.com/400x250?text=Success+1",
  },
  {
    id: 2,
    title: "Scaling Success: Real-World Metro Insights",
    category: "Success Stories",
    author: "Admin",
    date: "Sep 3, 2023",
    image: "https://via.placeholder.com/400x250?text=Success+2",
  },
  {
    id: 3,
    title: "Client Growth Journey with Metro Solver",
    category: "Success Stories",
    author: "Admin",
    date: "Sep 5, 2023",
    image: "https://via.placeholder.com/400x250?text=Success+3",
  },

  // Case Studies
  {
    id: 4,
    title: "Case Study: Optimizing PPC Campaigns",
    category: "Case Studies",
    author: "Admin",
    date: "Aug 15, 2023",
    image: "https://via.placeholder.com/400x250?text=Case+1",
  },
  {
    id: 5,
    title: "Case Study: Converting Leads into Clients",
    category: "Case Studies",
    author: "Admin",
    date: "Aug 18, 2023",
    image: "https://via.placeholder.com/400x250?text=Case+2",
  },
  {
    id: 6,
    title: "Case Study: Data-Driven Marketing Success",
    category: "Case Studies",
    author: "Admin",
    date: "Aug 22, 2023",
    image: "https://via.placeholder.com/400x250?text=Case+3",
  },

  // Blog
  {
    id: 7,
    title: "The Evolution of Digital Branding",
    category: "Blog",
    author: "Admin",
    date: "Jul 12, 2023",
    image: "https://via.placeholder.com/400x250?text=Blog+1",
  },
  {
    id: 8,
    title: "How Automation Shapes Client Experience",
    category: "Blog",
    author: "Admin",
    date: "Jul 20, 2023",
    image: "https://via.placeholder.com/400x250?text=Blog+2",
  },
  {
    id: 9,
    title: "AI in Digital Campaigns: The Future is Now",
    category: "Blog",
    author: "Admin",
    date: "Jul 25, 2023",
    image: "https://via.placeholder.com/400x250?text=Blog+3",
  },
];

const tabs = ["Success Stories", "Case Studies", "Blog"];

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("Success Stories");

  const filteredData = data.filter((item) => item.category === activeTab);

  return (
    <section className="relative py-20 px-6 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), #000000",
        }}
      />

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          The Success Stories, <br /> Case Studies & Blog
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore our journey through stories, research and insights that define
          Metro Solver’s excellence.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10 flex-wrap gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.6)] scale-105"
                : "bg-[#0e0e0e] text-gray-300 border border-gray-700 hover:text-white hover:border-purple-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto transition-all duration-500">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-gradient-to-br from-[#151025] to-[#0b0615] border border-gray-800 shadow-[0_0_25px_rgba(139,92,246,0.2)] hover:shadow-[0_0_45px_rgba(139,92,246,0.4)] overflow-hidden transition-all duration-500 hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <div className="text-sm text-gray-400">
                {item.author} • {item.date}
              </div>
              <div className="mt-4 flex justify-between text-xs text-gray-400">
                <span>Digital Media</span>
                <span>PPC Leader, CPA</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-medium shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all">
          View More
        </button>
      </div>
    </section>
  );
}
