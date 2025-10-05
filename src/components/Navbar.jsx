"use client";
import React, { useEffect, useState } from "react";
import { FaHome, FaList, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { MdLabelImportant } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Optional scroll effect (adds subtle background when scrolling)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0e0122]/80 backdrop-blur-md border-b border-[#251144]"
          : "bg-transparent"
      }`}
    >
      {/* ===== Top Info Bar ===== */}
      <div className="hidden md:flex justify-between items-center text-xs px-6 py-2 bg-transparent backdrop-blur-md">
        <div className="flex gap-4 text-gray-200">
          <span>Budget friendly</span>
          <span>No. 1 in Europe</span>
          <span>
            On your first order{" "}
            <span className="text-red-400 font-semibold">30% OFF</span>
          </span>
        </div>
        <div className="flex gap-4 text-gray-300">
          <span>All products buy now get the offer</span>
          <span>User Friendly</span>
          <span>24/7 Service</span>
        </div>
      </div>

      {/* ===== Desktop Navbar ===== */}
      <div className="hidden md:flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="h-8 w-8" />
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-6 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full shadow-inner border border-white/10">
          <button className="px-4 py-1 rounded-full bg-gradient-to-r from-[#6b4eff] to-[#874bff] text-sm font-medium">
            Home
          </button>
          <button className="text-gray-200 hover:text-white text-sm">
            About Us
          </button>
          <div className="relative group">
            <button className="text-gray-200 hover:text-white text-sm flex items-center gap-1">
              Services
            </button>
            <div className="absolute hidden group-hover:block bg-[#151a2c] rounded-lg p-3 mt-2 shadow-lg w-40">
              <p className="hover:text-[#874bff] text-sm cursor-pointer">
                Web Design
              </p>
              <p className="hover:text-[#874bff] text-sm cursor-pointer">
                White Labelling
              </p>
            </div>
          </div>
          <button className="text-gray-200 hover:text-white text-sm">
            White Label
          </button>
          <button className="text-gray-200 hover:text-white text-sm">
            Contact Us
          </button>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <FaShoppingCart className="text-xl cursor-pointer hover:text-[#874bff]" />
          <button className="bg-gradient-to-r from-[#6b4eff] to-[#874bff] px-5 py-2 rounded-full text-sm font-medium">
            Sign In
          </button>
        </div>
      </div>

      {/* ===== Topbar (Mobile) ===== */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md flex items-center justify-between px-5 py-3 border-b border-white/10">
        <img src="/logo.svg" alt="logo" className="h-7 w-7" />
        <div className="flex items-center gap-3">
          <FaShoppingCart className="text-lg" />
          <HiMenuAlt3 className="text-2xl" />
        </div>
      </div>

      {/* ===== Bottom Navbar (Mobile) ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0a0d1a]/90 backdrop-blur-md flex justify-around py-2 border-t border-[#1e2336] z-50">
        <button
          onClick={() => setActive("home")}
          className={`flex flex-col items-center text-xs ${
            active === "home" ? "text-[#874bff]" : "text-gray-400"
          }`}
        >
          <FaHome className="text-lg mb-1" />
          Home
        </button>

        <button
          onClick={() => setActive("services")}
          className={`flex flex-col items-center text-xs ${
            active === "services" ? "text-[#874bff]" : "text-gray-400"
          }`}
        >
          <FaList className="text-lg mb-1" />
          Services
        </button>

        <button
          onClick={() => setActive("white")}
          className={`flex flex-col items-center text-xs ${
            active === "white" ? "text-[#874bff]" : "text-gray-400"
          }`}
        >
          <MdLabelImportant className="text-lg mb-1" />
          White Label
        </button>

        <button
          onClick={() => setActive("about")}
          className={`flex flex-col items-center text-xs ${
            active === "about" ? "text-[#874bff]" : "text-gray-400"
          }`}
        >
          <FaUserAlt className="text-lg mb-1" />
          About
        </button>
      </div>
    </header>
  );
};

export default Navbar;
