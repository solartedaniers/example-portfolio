export default function InterestsSection({ dict }: any) {
  return (
    <ul className="flex items-center col-span-9 gap-4 p-5 rounded-2xl bg-foreground dark:bg-gray-700">
      <li className="text-white text-lg font-bold border-r pr-4">
        {dict.sections.interests.title}
      </li>
      {dict.sections.interests.items.map((item: string) => (
        <li
          key={item}
          className="flex items-center bg-background rounded-lg text-white text-sm px-4 py-2"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
