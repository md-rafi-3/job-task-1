import React from "react";

export default function AboutMission() {
  return (
    <section className="bg-[#0e0122] text-white py-20 px-8 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* ===== Left Section ===== */}
        <div className="space-y-10">
          {/* Mission Block */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
              alt="Teamwork"
              className="rounded-xl border border-purple-600/30 mb-4 shadow-lg"
            />
            <h3 className="text-2xl font-semibold mb-2">Metro Solver Mission</h3>
            <p className="text-gray-400">
              We aim to empower businesses with innovative solutions that deliver
              real results and inspire creativity in every step of the journey.
              Our mission is to help clients grow with purpose and vision.
            </p>
          </div>

          {/* Vision Block */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Global Reach and Vision</h3>
            <p className="text-gray-400 mb-4">
              From local startups to global enterprises, we help brands connect
              with their audience through powerful, meaningful design and
              strategic communication.
            </p>
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80"
              alt="Vision"
              className="rounded-xl border border-purple-600/30 shadow-lg"
            />
          </div>
        </div>

        {/* ===== Right Section ===== */}
        <div className="flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Discussion"
            className="rounded-2xl shadow-xl border border-purple-700/40"
          />
        </div>
      </div>
    </section>
  );
}
