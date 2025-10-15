interface ExperienceData {
  title: string;
  role: string;
  period: string;
  bullets: string[];
}

interface ExperienceCardProps {
  data: ExperienceData;
}

export default function ExperienceCard({ data }: ExperienceCardProps) {
  return (
    <article className="col-span-12 sm:col-span-6 rounded-2xl bg-gray-200 dark:bg-gray-800 p-6">
      <section className="flex flex-wrap justify-between border-b border-gray-400 pb-4">
        <header className="flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{data.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{data.role}</p>
        </header>
        <span className="bg-gray-300 dark:bg-gray-900 rounded-lg text-gray-900 dark:text-white text-sm p-4 mt-2 sm:mt-0">
          {data.period}
        </span>
      </section>
      <ul className="list-disc list-inside text-gray-900 dark:text-white text-sm mt-4">
        {data.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
