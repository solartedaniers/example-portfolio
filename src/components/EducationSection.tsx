interface EducationItem {
  title: string;
  field: string;
  location: string;
  period: string;
}

interface EducationSectionProps {
  dict: { sections: { education: Record<string, EducationItem> } };
}

export default function EducationSection({ dict }: EducationSectionProps) {
  const edu = dict.sections.education;

  return (
    <section className="flex flex-col gap-4 items-center col-span-12 sm:col-span-6 row-span-3 rounded-2xl bg-gray-200 dark:bg-gray-800 p-6">
      {Object.values(edu).map((item, idx) => (
        <article
          key={idx}
          className={`flex flex-wrap justify-between w-full items-center ${
            idx < Object.values(edu).length - 1 ? 'border-b border-gray-400 pb-4' : ''
          }`}
        >
          <div className="flex flex-col">
            <h2 className="text-gray-900 dark:text-white text-3xl font-bold">{item.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">{item.field}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{item.location}</p>
          </div>
          <span className="bg-gray-300 dark:bg-gray-900 rounded-lg text-gray-900 dark:text-white text-sm p-4 mt-2 sm:mt-0">
            {item.period}
          </span>
        </article>
      ))}
    </section>
  );
}
