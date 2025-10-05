import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaRegClock, FaPlayCircle } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

const podcastData = [
  {
    id: 1,
    title: "How Brands Can Prepare for Black Friday & Christmas",
    duration: "30 Minute",
    date: "Mar 11, 2025",
    image: "https://images.unsplash.com/photo-1587614382346-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Boosting Sales with Digital Marketing in 2025",
    duration: "28 Minute",
    date: "Feb 25, 2025",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "How AI Impacts Brand Visibility",
    duration: "35 Minute",
    date: "Mar 1, 2025",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Mastering Social Media Strategies",
    duration: "33 Minute",
    date: "Mar 15, 2025",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function PodcastSection() {
  return (
    <section className="relative py-20 px-6 bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), #000000",
        }}
      />

      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Did You Hear about <br /> Our Podcast?
          </h2>
        </div>
        <p className="text-gray-400 text-sm md:text-base mt-4 md:mt-0 max-w-md">
          Based on the description of Metro Solver and the image provided, here
          is a 6-step process that Metro Solver uses to scale a customer's
          business.
        </p>
      </div>

      {/* Swiper Section */}
      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="pb-16"
        >
          {podcastData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#151025] to-[#0b0615] shadow-[0_0_30px_rgba(139,92,246,0.25)] hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] transition-all duration-500 hover:-translate-y-1">
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 hover:opacity-100 transition-all">
                    <FaPlayCircle className="text-5xl text-purple-500 hover:scale-110 transition-all" />
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex gap-3">
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/60 rounded-full text-xs">
                      <FaRegClock className="text-purple-400" />
                      {item.duration}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/60 rounded-full text-xs">
                      <BsCalendarDate className="text-purple-400" />
                      {item.date}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-4">
          <button className="swiper-prev w-10 h-10 flex items-center justify-center rounded-full bg-[#1a132d] hover:bg-purple-700 transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <span className="text-xl">‹</span>
          </button>
          <button className="swiper-next w-10 h-10 flex items-center justify-center rounded-full bg-[#1a132d] hover:bg-purple-700 transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <span className="text-xl">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
