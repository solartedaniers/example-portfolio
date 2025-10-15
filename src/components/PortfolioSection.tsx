'use client';

import { Briefcase, Palette, Camera, Video, Globe } from "lucide-react";

export default function PortfolioSection() {
  const icons = [
    { icon: <Briefcase className="w-5 h-5 text-blue-400" /> },
    { icon: <Palette className="w-5 h-5 text-sky-400" /> },
    { icon: <Camera className="w-5 h-5 text-pink-400" /> },
    { icon: <Video className="w-5 h-5 text-red-500" /> },
    { icon: <Globe className="w-5 h-5 text-fuchsia-400" /> },
  ];

  return (
    <section className="col-span-12 bg-card rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="h-5 w-[2px] bg-gray-500"></span>
        <h2 className="text-lg font-semibold text-white">Portfolio</h2>
      </div>
      <div className="flex flex-wrap gap-3 mt-1">
        {icons.map((item, index) => (
          <div key={index} className="flex items-center justify-center bg-foreground text-white px-3 py-2 rounded-xl">
            {item.icon}
          </div>
        ))}
      </div>
    </section>
  );
}
