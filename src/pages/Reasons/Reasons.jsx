import React from "react";

const reasons = [
  {
    title: "Enjoy on your TV",
    desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: "📺",
  },
  {
    title: "Download your shows to watch offline",
    desc: "Save your favorites easily and always have something to watch.",
    icon: "⬇️",
  },
  {
    title: "Watch everywhere",
    desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "🚀",
  },
  {
    title: "Create profiles for kids",
    desc: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: "😊",
  },
];

const Reasons = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10">
          More Reasons to Join
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 h-80
                         bg-gradient-to-br from-[#1a2040] via-[#24163a] to-[#2a0f25]"
            >
              <h3 className="text-2xl font-bold mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-300 text-l leading-relaxed">
                {reason.desc}
              </p>

              {/* Icon */}
              <div className="absolute bottom-6 right-6 text-5xl opacity-90">
                {reason.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
