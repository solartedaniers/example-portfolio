'use client';

import { User, Mail, Phone, Flag } from "lucide-react";

export default function DetailsSection() {
  const details = [
    { icon: <User className="w-5 h-5 text-yellow-400" />, text: "26 years" },
    { icon: <Mail className="w-5 h-5 text-red-400" />, text: "iamsunilfreelancer.com" },
    { icon: <Phone className="w-5 h-5 text-green-400" />, text: "+91 9899052055" },
    { icon: <Flag className="w-5 h-5 text-orange-400" />, text: "India" },
  ];

  return (
    <section className="col-span-12 bg-card rounded-2xl p-5 flex flex-col gap-4">
      {/* Encabezado con barra vertical */}
      <div className="flex items-center gap-3">
        <span className="h-5 w-[2px] bg-gray-500"></span>
        <h2 className="text-lg font-semibold text-white">Details</h2>
      </div>

      {/* Contenedor de detalles */}
      <div className="flex flex-wrap gap-3 mt-1">
        {details.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-foreground text-white px-3 py-2 rounded-xl"
          >
            {item.icon}
            <span className="text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
