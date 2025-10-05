import React from "react";
import {
  FaRocket,
  FaCode,
  FaPalette,
  FaBullhorn,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    { icon: <FaRocket />, title: "Research", angle: 270 },
    { icon: <FaCode />, title: "Development", angle: 330 },
    { icon: <FaPalette />, title: "Design", angle: 30 },
    { icon: <FaBullhorn />, title: "Marketing", angle: 90 },
    { icon: <FaUsers />, title: "Teamwork", angle: 150 },
    { icon: <FaChartLine />, title: "Growth", angle: 210 },
  ];

  return (
    <section className="relative flex items-center justify-center py-32 bg-black overflow-hidden text-white">
      {/* Background glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), #000",
        }}
      />

      {/* Center circle */}
      <div className="relative w-[480px] h-[480px] flex items-center justify-center">
        <div className="relative w-48 h-48 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-700/40 to-indigo-700/40 border border-purple-500/30 shadow-[0_0_80px_rgba(139,92,246,0.6)] animate-pulse">
          <h2 className="text-2xl font-bold text-center leading-tight">
            How<br />It Works?
          </h2>
        </div>

        {/* Orbit circle outline */}
        <svg
          className="absolute w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50%"
            cy="50%"
            r="220"
            stroke="rgba(139,92,246,0.3)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6 8"
          />
        </svg>

        {/* Outer nodes */}
        {steps.map((step, i) => {
          const r = 220;
          const x = r * Math.cos((step.angle * Math.PI) / 180);
          const y = r * Math.sin((step.angle * Math.PI) / 180);
          return (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-800/40 to-indigo-800/40 border border-purple-500/30 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300">
                <span className="text-xl text-purple-400">{step.icon}</span>
                <span className="text-sm font-medium">{step.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
