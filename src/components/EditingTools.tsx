export default function EditingTools({ dict }: any) {
  return (
    <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground dark:bg-gray-700 p-10">
      <li className="text-white text-xl font-bold border-r pr-4">
        {dict.sections.editingTools}
      </li>
      <li className="flex items-center bg-[#000155] rounded-lg font-bold text-[#a0a0f9] text-xl px-4 py-2">Ae</li>
      <li className="flex items-center bg-[#02035e] rounded-lg font-bold text-[#9997f9] text-xl px-4 py-2">Pr</li>
    </ul>
  );
}
