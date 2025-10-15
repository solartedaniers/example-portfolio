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
    <section className="flex flex-col gap-4 items-center col-span-6 row-span-3 rounded-2xl bg-foreground p-10">
      {Object.values(edu).map((item, idx) => (
        <article
          key={idx}
          className={`flex items-center justify-between w-full ${
            idx < Object.values(edu).length - 1 ? 'border-b border-b-grey pb-8' : ''
          }`}
        >
          <span className="flex flex-col">
            <h2 className="text-white text-3xl font-bold">{item.title}</h2>
            <p className="text-grey text-lg">{item.field}</p>
            <p className="text-grey text-sm">{item.location}</p>
          </span>
          <span className="bg-background rounded-lg text-white text-sm p-4">
            {item.period}
          </span>
        </article>
      ))}
    </section>
  );
}
