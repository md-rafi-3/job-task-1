import React, { useState } from "react";
import { FaStar, FaGoogle } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ReviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Katie Johnson",
      role: "Founder of Shova",
      text: "Metro Solver with M was the best solution. We are constantly growing, learning, and improving every day with their service.",
      platform: "Google",
      icon: <FaGoogle className="text-yellow-400" />,
    },
    {
      name: "Wade Warren",
      role: "Founder of Shova",
      text: "They delivered exactly what we needed. Amazing communication and dedication from the whole Metro Solver team!",
      platform: "Trustpilot",
      icon: <SiTrustpilot className="text-green-400" />,
    },
    {
      name: "Jenny Wilson",
      role: "Founder of Shova",
      text: "Very professional and fast. Metro Solver made scaling our business effortless.",
      platform: "Google",
      icon: <FaGoogle className="text-yellow-400" />,
    },
    {
      name: "Dianne Russell",
      role: "Co-Founder at Cloudify",
      text: "Their design sense and development speed were beyond expectations. Highly recommended!",
      platform: "Google",
      icon: <FaGoogle className="text-yellow-400" />,
    },
    {
      name: "Robert Fox",
      role: "CEO of NexaTech",
      text: "Reliable, efficient, and creative — they turned our vision into a real digital product.",
      platform: "Trustpilot",
      icon: <SiTrustpilot className="text-green-400" />,
    },
    {
      name: "Eleanor Pena",
      role: "Marketing Lead at Adnova",
      text: "Metro Solver helped us rebrand completely — the results speak for themselves.",
      platform: "Google",
      icon: <FaGoogle className="text-yellow-400" />,
    },
    {
      name: "Theresa Webb",
      role: "Founder of Zentrio",
      text: "Top-notch customer service. Always quick to respond and offer valuable insights.",
      platform: "Trustpilot",
      icon: <SiTrustpilot className="text-green-400" />,
    },
    {
      name: "Esther Howard",
      role: "CTO of Innovex",
      text: "The perfect blend of design and technology. They understood exactly what we needed.",
      platform: "Google",
      icon: <FaGoogle className="text-yellow-400" />,
    },
    {
      name: "Darrell Steward",
      role: "Founder of CodeVision",
      text: "Their workflow is super efficient. Everything was delivered before the deadline.",
      platform: "Google",
      icon: <FaGoogle className="text-yellow-400" />,
    },
  ];

  return (
    <section className="relative w-full py-20 bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), #000000",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold">
          What People <span className="text-purple-400">Say</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here’s what our amazing clients have to say about Metro Solver’s
          solutions.
        </p>

        {/* Swiper Review Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mt-12"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div
                className={`rounded-2xl p-8 text-left border transition-all duration-500 transform cursor-pointer
                ${
                  activeIndex % reviews.length === i
                    ? "scale-105 bg-gradient-to-r from-[#6d28d9]/50 to-[#3b82f6]/50 border-purple-400/60 shadow-2xl shadow-purple-700/40"
                    : "bg-[#0d0b14] border-purple-900/20 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
                }`}
              >
                {/* Stars */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed mb-6">{r.text}</p>

                {/* Reviewer Info */}
                <div>
                  <h4 className="font-semibold text-lg">{r.name}</h4>
                  <p className="text-gray-500 text-sm mb-3">{r.role}</p>
                </div>

                {/* Platform */}
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  {r.icon}
                  <span>Review by {r.platform}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
