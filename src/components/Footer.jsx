import React, { useEffect, useState } from "react";

export default function FooterSection() {
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .map((c) => ({
            name: c.name.common,
            code: c.cca2,
            flag: c.flags.svg || c.flags.png,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(sorted);
        setSelected(sorted.find((c) => c.code === "GB"));
      })
      .catch(console.error);
  }, []);

  const partnerLogos = [
    "/logos/meta.svg",
    "/logos/google.svg",
    "/logos/microsoft.svg",
    "/logos/aws.svg",
    "/logos/amazon.svg",
    "/logos/tiktok.svg",
  ];

  const footerLinks = {
    Company: ["About Us", "Our Mission", "Case Studies", "Blog", "Career"],
    Support: [
      "Help Center",
      "Contact Support",
      "Terms & Conditions",
      "Refund Policy",
      "Start Earning",
    ],
    Services: [
      "Digital Marketing",
      "Web Development",
      "Graphic Design",
      "Creative Writing",
      "E-Commerce Solutions",
      "Video Editing",
    ],
  };

  return (
    <footer className="relative bg-[#090414] text-white overflow-hidden">
      {/* ===== Background Map ===== */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20 -z-10"
        style={{
          backgroundImage: "url('/images/world-map.svg')",
        }}
      />

     
       
      {/* ===== Footer Main Section ===== */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-lg font-semibold mb-3">Got Questions? Call Us!</h4>
          <p className="text-gray-400 text-sm mb-2">
            Metro Solver Limited <br />
            Grantham Road, London E12 6LX
          </p>
          <p className="text-gray-400 text-sm mb-1">📞 +447946860435</p>
          <p className="text-gray-400 text-sm mb-1">📞 +447485660825</p>
          <p className="text-gray-400 text-sm">✉️ contact@metrosolver.com</p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-lg font-semibold mb-3">{title}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {links.map((link) => (
                <li
                  key={link}
                  className="hover:text-purple-400 cursor-pointer transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ===== Country Dropdown Section ===== */}
      <div className="max-w-7xl mx-auto px-6 pb-10 border-t border-[#3a2760]/30">
        <div className="relative mt-6 w-full sm:w-80">
          <label
            htmlFor="country"
            className="block text-gray-400 text-sm mb-2 font-medium"
          >
            🌍 Choose Your Country
          </label>

          <div className="relative flex items-center bg-[#120a25]/80 border border-[#3a2760]/60 rounded-full px-3 py-2 hover:border-purple-500 transition">
            {selected && (
              <img
                src={selected.flag}
                alt={selected.name}
                className="w-6 h-6 rounded-full mr-2 border border-[#3a2760]/60"
              />
            )}

            <select
              id="country"
              value={selected ? selected.code : ""}
              onChange={(e) => {
                const c = countries.find((c) => c.code === e.target.value);
                setSelected(c);
              }}
              className="w-full bg-transparent text-white appearance-none focus:outline-none cursor-pointer pr-8"
            >
              {countries.map((c) => (
                <option
                  key={c.code}
                  value={c.code}
                  className="bg-[#0f0820] text-white"
                >
                  {c.name}
                </option>
              ))}
            </select>

            <svg
              className="absolute right-4 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* ===== Bottom Logos ===== */}
      <div className="bg-[#0a0518] border-t border-[#3a2760]/30 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 items-center">
          {partnerLogos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="partner"
              className="h-6 opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          © 2025 Metro Solver. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
