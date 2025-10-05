import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1f1d2b] text-white px-6 md:px-12 py-12">
      {/* Top: Newsletter */}
      <div className="bg-[#292738] p-6 rounded-xl flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="mb-4 md:mb-0">
          <img src="/logo.svg" alt="Metro Solver" className="h-10 mb-2" />
          <p className="text-sm text-gray-300">Join the 25000+ client in our company</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-full text-black w-full md:w-72"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full">
            + Subscribe
          </button>
        </div>
      </div>

      {/* Middle: Links and Contact */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm text-gray-300 mb-12">
        {/* Contact */}
        <div className="md:col-span-1">
          <h4 className="text-white font-semibold mb-2">Got Questions?<br />Call us!</h4>
          <p>Metro Solver Limited<br />Grantham Road, London E12 5LX, United Kingdom</p>
          <p className="mt-2">+44 7496 435046</p>
          <p>office@metrosolver.com</p>
          <div className="mt-4">
            <label htmlFor="currency">Country Currency</label>
            <select id="currency" className="mt-1 w-full bg-[#1f1d2b] border border-gray-500 text-white p-2 rounded">
              <option>GBP - British Pound</option>
              <option>USD - US Dollar</option>
              <option>INR - Indian Rupee</option>
            </select>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul>
            <li>Home</li>
            <li>Our Team</li>
            <li>Our Future</li>
            <li>White Labeling</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">About Us</h4>
          <ul>
            <li>Our Stories</li>
            <li>Career</li>
            <li>Send Message</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Start Earning</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul>
            <li>Digital Marketing</li>
            <li>Creative Writing School</li>
            <li>Web & Software Development</li>
            <li>SEO & Content Services</li>
            <li>Graphic Design</li>
            <li>Multimedia & Video Editing</li>
            <li>Merchandise</li>
            <li>Premium Website</li>
            <li>Premium Domains</li>
            <li>Special Combo</li>
          </ul>
        </div>
      </div>

      {/* Bottom: Partners */}
      <div className="border-t border-gray-700 pt-6">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
          <img src="/partners/meta.png" alt="Meta" className="h-6" />
          <img src="/partners/google.png" alt="Google Marketing Platform" className="h-6" />
          <img src="/partners/microsoft.png" alt="Microsoft Partner" className="h-6" />
          <img src="/partners/aws.png" alt="AWS Partner" className="h-6" />
          <img src="/partners/red.png" alt="Red Partner" className="h-6" />
          <img src="/partners/amazon.png" alt="Amazon SPN" className="h-6" />
          <img src="/partners/tiktok.png" alt="TikTok" className="h-6" />
        </div>

        <div className="text-center text-xs text-gray-400">
          <p>© Metro Solver. All Rights Reserved 2024.</p>
          <p>Metro Solver Ltd Incorporated in England & Wales. Registration No: 11272369</p>
        </div>
      </div>
    </footer>
  );
}
