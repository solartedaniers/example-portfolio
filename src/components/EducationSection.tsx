export default function EducationSection({ dict }: any) {
  const edu = dict.sections.education;

  return (
    <section className="flex flex-col gap-4 items-center col-span-6 row-span-3 rounded-2xl bg-foreground dark:bg-gray-700 p-10">
      {Object.values(edu).map((item: any, idx) => (
        <article
          key={idx}
          className="flex items-center justify-between w-full border-b border-b-grey pb-8 last:border-0"
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
    