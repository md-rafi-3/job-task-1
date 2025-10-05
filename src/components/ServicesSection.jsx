import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaVideo,
  FaChartLine,
  FaPenNib,
  FaSearch,
  FaCube,
  FaShoppingCart,
  FaCalculator,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ServicesSection() {
  const services = [
    { title: "Graphic Design", icon: <FaPaintBrush /> },
    { title: "Web & Software Development", icon: <FaLaptopCode /> },
    { title: "Multimedia & Video Editing", icon: <FaVideo /> },
    { title: "Digital Marketing", icon: <FaChartLine /> },
    { title: "Creative Writing Solution", icon: <FaPenNib /> },
    { title: "SEO", icon: <FaSearch /> },
    { title: "3D Animation & Visualisation", icon: <FaCube /> },
    { title: "E-Commerce Solution", icon: <FaShoppingCart /> },
    { title: "Accounting", icon: <FaCalculator /> },
  ];

  const Card = ({ icon, title }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card p-6 rounded-2xl shadow-xl bg-[#1b012f]/80 border border-transparent 
      hover:border-purple-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
      transition-all duration-300"
    >
      <div className="text-4xl text-yellow-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">
        We are constantly learning, growing, and improving to deliver you the
        best creative and digital solutions.
      </p>
      <a href="#" className="text-purple-400 hover:underline text-sm">
        Read More →
      </a>
    </motion.div>
  );

  return (
    <div className="min-h-screen w-full text-white py-20 px-5 md:px-10 bg-black relative overflow-hidden">
      {/* Radial Glow BG */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%)",
        }}
      />

      {/* Offer Button */}
      <div className="w-full flex justify-center mb-8">
        <button className="btn bg-gradient-to-r from-purple-600 to-indigo-600 border-none text-white rounded-full px-6 py-2 shadow-md">
          Get My 15% OFF
        </button>
      </div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our creative, digital, and marketing services built to elevate
          your brand.
        </p>
      </div>

      {/* ===== Desktop Grid ===== */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card key={index} icon={service.icon} title={service.title} />
        ))}
      </div>

      {/* ===== Mobile Swiper ===== */}
      <div className="sm:hidden w-full relative max-w-xs mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          loop={true}
          className="pb-14"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Card icon={service.icon} title={service.title} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-4">
          <button className="prev-btn w-10 h-10 rounded-full flex items-center justify-center 
            bg-gradient-to-r from-[#6b4eff] to-[#874bff] text-white shadow-[0_0_10px_rgba(139,92,246,0.5)] 
            hover:scale-110 transition-all duration-300">
            ❮
          </button>
          <button className="next-btn w-10 h-10 rounded-full flex items-center justify-center 
            bg-gradient-to-r from-[#874bff] to-[#6b4eff] text-white shadow-[0_0_10px_rgba(139,92,246,0.5)] 
            hover:scale-110 transition-all duration-300">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
