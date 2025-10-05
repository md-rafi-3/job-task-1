import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FaHome, FaList, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { MdLabelImportant } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "../assets/Frame.gif";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      <div className="hidden md:flex justify-between items-center text-xs px-10 py-2 text-gray-300">
        <div className="flex gap-5">
          <span>💰 Budget Friendly</span>
          <span>🏆 No. 1 in Europe</span>
          <span>
            🎉 First Order{" "}
            <span className="text-red-400 font-semibold">30% OFF</span>
          </span>
        </div>
        <div className="flex gap-5">
          <span>🔥 Buy Now & Get Offers</span>
          <span>⚡ User Friendly</span>
          <span>📞 24/7 Support</span>
        </div>
      </div>

      {/* ===== Desktop Navbar ===== */}
      <div className="hidden md:flex items-center justify-between px-16 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="h-10 w-10 rounded-full" />
        </NavLink>

        {/* Nav Links */}
        <nav className="flex items-center gap-8 bg-white/10 backdrop-blur-md px-8 py-2 rounded-full shadow-inner border border-white/10">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/services", label: "Services" },
            { path: "/white-label", label: "White Label" },
            { path: "/contact", label: "Contact Us" },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm font-medium px-5 py-1.5 rounded-full transition ${
                  isActive
                    ? "bg-gradient-to-r from-[#6b4eff] to-[#874bff] text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] scale-105"
                    : "text-gray-200 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <FaShoppingCart className="text-xl cursor-pointer hover:text-[#874bff] transition" />
          <button className="bg-gradient-to-r from-[#6b4eff] to-[#874bff] px-6 py-2 rounded-full text-sm font-medium text-white hover:opacity-90 transition shadow-[0_0_15px_rgba(139,92,246,0.4)]">
            Sign In
          </button>
        </div>
      </div>

      {/* ===== Mobile Navbar Top ===== */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-[#0e0122]/80 backdrop-blur-md flex items-center justify-between px-5 py-3 border-b border-white/10 z-[60]">
        <NavLink to="/">
          <img src={Logo} alt="logo" className="h-8 w-8 rounded-full" />
        </NavLink>
        <div className="flex items-center gap-3">
          <FaShoppingCart className="text-lg text-white" />
          <HiMenuAlt3 className="text-2xl text-white" />
        </div>
      </div>

      {/* ===== Mobile Bottom Navbar ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0a0d1a]/95 backdrop-blur-xl flex justify-around py-2.5 border-t border-[#1e2336] z-[60]">
        {[
          { path: "/", icon: <FaHome />, label: "Home" },
          { path: "/services", icon: <FaList />, label: "Services" },
          { path: "/white-label", icon: <MdLabelImportant />, label: "White" },
          { path: "/about", icon: <FaUserAlt />, label: "About" },
        ].map(({ path, icon, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs transition ${
                isActive
                  ? "text-[#874bff] scale-110"
                  : "text-gray-400 hover:text-white"
              }`
            }
          >
            <span className="text-lg mb-1">{icon}</span>
            {label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
