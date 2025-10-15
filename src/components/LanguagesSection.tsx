interface LanguagesSectionProps {
  dict: { sections: { languages: string } };
}

export default function LanguagesSection({ dict }: LanguagesSectionProps) {
  return (
    <ul className="flex gap-4 items-center col-span-6 rounded-2xl 
                   bg-gray-200 dark:bg-gray-800 p-10">
      <li className="text-gray-900 dark:text-white text-xl font-bold border-r pr-4">
        {dict.sections.languages}
      </li>
      <li className="text-4xl">🇧🇴</li>
      <li className="text-4xl">🇬🇧</li>
      <li className="text-4xl">🇺🇸</li>
    </ul>
  );
}
