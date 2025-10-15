'use client';

import React from 'react';

interface DetailItemProps {
  value: string;
  icon: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ value, icon }) => (
  <span className="flex items-center gap-2 bg-gray-300 dark:bg-gray-900 rounded-lg text-gray-900 dark:text-white text-sm px-4 py-2 whitespace-nowrap">
    <span className="text-lg">{icon}</span> {value}
  </span>
);

interface DetailsSectionProps {
  dict: {
    sections: {
      details: {
        title: string;
        age: string;
        email: string;
        phone: string;
        location: string;
      };
    };
  };
}

export default function DetailsSection({ dict }: DetailsSectionProps) {
  const details = dict.sections.details;

  const detailItems = [
    { value: details.age, icon: '🎂' },
    { value: details.email, icon: '✉️' },
    { value: details.phone, icon: '📞' },
    { value: details.location, icon: '🇮🇳' },
  ];

  return (
    <section className="col-span-12 rounded-2xl bg-gray-200 dark:bg-gray-800 p-6 flex flex-col justify-center h-full">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <h3 className="text-gray-900 dark:text-white text-xl font-bold">
          {details.title}
        </h3>
        <span className="h-6 w-px bg-gray-400 dark:bg-gray-600" />
        <div className="flex flex-1 justify-center flex-wrap gap-4">
          {detailItems.map((item) => (
            <DetailItem key={item.value} value={item.value} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
