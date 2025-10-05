import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full py-20 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.25), transparent 70%), #000",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          Watch Our <span className="text-purple-400">Journey</span>
        </h2>

        {/* Video Preview */}
        <div className="relative w-full md:w-3/4 mx-auto rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)] border border-purple-600/30">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Video Thumbnail"
            className="w-full h-[400px] object-cover opacity-90"
          />

          {/* Play Button */}
          <button
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-20 h-20 bg-purple-600/30 rounded-full flex items-center justify-center border border-purple-400 hover:scale-110 transition-all duration-300">
              <FaPlay className="text-3xl text-purple-300 ml-1" />
            </div>
          </button>
        </div>

        {/* DaisyUI Modal */}
        {open && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setOpen(false)}
          >
            <div
              className="relative w-[90%] md:w-[70%] lg:w-[60%] rounded-2xl overflow-hidden shadow-2xl border border-purple-700/40"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="https://videos.pexels.com/video-files/3183150/3183150-uhd_2560_1440_25fps.mp4"
                autoPlay
                controls
                className="w-full rounded-2xl"
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-lg hover:bg-purple-700/70"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
