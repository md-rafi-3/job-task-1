import React from "react";

export default function TeamCard({ name, role, img }) {
  return (
    <div className="bg-[#1a0c36]/80 border border-purple-700/30 p-5 rounded-2xl text-center shadow-md hover:shadow-purple-700/30 transition-all duration-300">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full border-2 border-purple-500 mb-4"
      />
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  );
}
