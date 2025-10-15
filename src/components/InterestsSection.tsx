interface InterestsSectionProps {
  dict: {
    sections: {
      interests: {
        title: string;
        items: string[];
      };
    };
  };
}

export default function InterestsSection({ dict }: InterestsSectionProps) {
  return (
    <ul className="flex flex-wrap items-center col-span-12 sm:col-span-9 gap-4 p-5 rounded-2xl bg-gray-200 dark:bg-gray-800">
      <li className="text-gray-900 dark:text-white text-lg font-bold border-r pr-4">
        {dict.sections.interests.title}
      </li>
      {dict.sections.interests.items.map((item) => (
        <li
          key={item}
          className="flex items-center justify-center bg-gray-300 dark:bg-gray-900 rounded-lg text-gray-900 dark:text-white text-sm px-4 py-2"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
