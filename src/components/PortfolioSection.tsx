'use client';

import React from "react";
import { Briefcase, Palette, Camera, Video, Globe } from "lucide-react";

interface PortfolioSectionDict {
  title: string;
}

interface PortfolioSectionProps {
  dict: {
    sections: {
      portfolio: PortfolioSectionDict;
    };
  };
}

export default function PortfolioSection({ dict }: PortfolioSectionProps) {
  const icons = [
    { icon: <Briefcase className="w-5 h-5 text-blue-400" /> },
    { icon: <Palette className="w-5 h-5 text-sky-400" /> },
    { icon: <Camera className="w-5 h-5 text-pink-400" /> },
    { icon: <Video className="w-5 h-5 text-red-500" /> },
    { icon: <Globe className="w-5 h-5 text-fuchsia-400" /> },
  ];

  return (
    <section className="col-span-12 rounded-2xl bg-gray-200 dark:bg-gray-800 p-6 flex flex-col justify-center h-full">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <h3 className="text-gray-900 dark:text-white text-xl font-bold">
          {dict.sections.portfolio.title}
        </h3>
        <span className="h-6 w-px bg-gray-400 dark:bg-gray-600" />
        <div className="flex flex-1 justify-center flex-wrap gap-4">
          {icons.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gray-300 dark:bg-gray-900 
                         text-gray-900 dark:text-white rounded-xl w-20 h-20 text-xl font-medium 
                         hover:opacity-80 transition-opacity"
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
