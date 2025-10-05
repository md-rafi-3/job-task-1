import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaVideo, FaChartLine, FaPenNib, FaSearch, FaCube, FaShoppingCart, FaCalculator } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    { title: 'Graphic Design', icon: <FaPaintBrush />, active: false },
    { title: 'Web & Software Development', icon: <FaLaptopCode />, active: true },
    { title: 'Multimedia & Video Editing', icon: <FaVideo />, active: false },
    { title: 'Digital Marketing', icon: <FaChartLine />, active: false },
    { title: 'Creative Writing Solution', icon: <FaPenNib />, active: false },
    { title: 'SEO', icon: <FaSearch />, active: false },
    { title: '3D Animation & Visualisation', icon: <FaCube />, active: false },
    { title: 'E-Commerce Solution', icon: <FaShoppingCart />, active: false },
    { title: 'Accounting', icon: <FaCalculator />, active: false },
  ];

  return (
    <div className="min-h-screen w-full  text-white py-20 px-10">
      {/* Offer Bar */}
      <div className="w-full flex justify-center mb-8">
        <button className="btn bg-gradient-to-r from-purple-600 to-indigo-600 border-none text-white rounded-full px-6">
          Get My 15% OFF
        </button>
      </div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="card p-6 rounded-2xl shadow-xl bg-[#1b012f]/80 border 
        hover:border-purple-500 hover:shadow-purple-700/40  border-transparent
            transition-all duration-300"
          >
            <div className="text-4xl text-yellow-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm mb-4">
              We are constantly growing or learning and improving. Enter your personal real estate sanct‑uary, where finding the ideal home is effortless.
            </p>
            <a href="#" className="text-purple-400 hover:underline text-sm">Read More →</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
