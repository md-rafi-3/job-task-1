import React from "react";
import TeamCard from "./TeamCard";

export default function AboutTeam() {
  const team = [
    {
      name: "John Carter",
      role: "Senior Web Developer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sophia Lee",
      role: "UI/UX Designer",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "David Kim",
      role: "Project Manager",
      img: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    {
      name: "Emma Wilson",
      role: "Marketing Expert",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Michael Brown",
      role: "Full Stack Engineer",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      name: "Olivia Green",
      role: "Creative Director",
      img: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Liam Johnson",
      role: "3D Visualizer",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      name: "Ava Martinez",
      role: "SEO Specialist",
      img: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      name: "Ethan Davis",
      role: "Backend Developer",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];

  return (
    <section className="bg-[#0f0123] text-white py-20 px-10 text-center">
      <h2 className="text-3xl font-bold mb-8">Meet Our Agents</h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>

      {/* View More Button */}
      <button className="mt-10 px-8 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition-all rounded-full shadow-lg">
        View More
      </button>
    </section>
  );
}
