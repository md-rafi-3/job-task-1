import React, { useState } from 'react';

// Mock data
const data = [
  {
    id: 1,
    title: "How to prepare for studying abroad",
    category: "Blog",
    author: "Admin",
    date: "Sep 1, 2023",
    image: "/images/blog1.jpg"
  },
  {
    id: 2,
    title: "Top 5 destinations for Indian students",
    category: "Blog",
    author: "Admin",
    date: "Sep 2, 2023",
    image: "/images/blog2.jpg"
  },
  {
    id: 3,
    title: "Visa application checklist",
    category: "Blog",
    author: "Admin",
    date: "Sep 3, 2023",
    image: "/images/blog3.jpg"
  },
  {
    id: 4,
    title: "Riya's success story in Germany",
    category: "Success Stories",
    author: "Admin",
    date: "Aug 20, 2023",
    image: "/images/success1.jpg"
  },
  {
    id: 5,
    title: "From Kolkata to Canada: Ankit's journey",
    category: "Success Stories",
    author: "Admin",
    date: "Aug 25, 2023",
    image: "/images/success2.jpg"
  },
  {
    id: 6,
    title: "How Priya cracked her student visa for UK",
    category: "Success Stories",
    author: "Admin",
    date: "Aug 28, 2023",
    image: "/images/success3.jpg"
  },
  {
    id: 7,
    title: "Case study: University application success",
    category: "Case Studies",
    author: "Admin",
    date: "July 15, 2023",
    image: "/images/case1.jpg"
  },
  {
    id: 8,
    title: "Scholarship grant case: Australia",
    category: "Case Studies",
    author: "Admin",
    date: "July 18, 2023",
    image: "/images/case2.jpg"
  },
  {
    id: 9,
    title: "Part-time job trends for students abroad",
    category: "Case Studies",
    author: "Admin",
    date: "July 20, 2023",
    image: "/images/case3.jpg"
  }
];

const tabs = ["Blog", "Success Stories", "Case Studies"];

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("Blog");

  const filteredData = data.filter((item) => item.category === activeTab);

  return (
    <div className="blog-section px-4 py-8 bg-gray-100 min-h-screen">
      <h2 className="text-center text-3xl font-bold mb-8">
        The Success Stories, <br /> Case Studies & Blog
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-6 gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-full border ${
              activeTab === tab
                ? 'bg-purple-700 text-white'
                : 'bg-white text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-purple-600 font-semibold">
                {item.category}
              </span>
              <h3 className="text-lg font-bold mt-2">{item.title}</h3>
              <div className="text-gray-500 text-sm mt-2">
                By {item.author} | {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
