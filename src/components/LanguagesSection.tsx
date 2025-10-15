"use client";

export default function LanguagesSection({ dict }: { dict: any }) {
  return (
    <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
      <li className="text-white text-xl font-bold border-r pr-4">
        {dict.sections.languages}
      </li>
      <li className="text-4xl">🇧🇴</li>
      <li className="text-4xl">🇬🇧</li>
      <li className="text-4xl">🇺🇸</li>
    </ul>
  );
}
