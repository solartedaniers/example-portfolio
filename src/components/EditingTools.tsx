interface EditingToolsProps {
  dict: { sections: { editingTools: string } };
}

export default function EditingTools({ dict }: EditingToolsProps) {
  return (
    <ul className="flex flex-wrap gap-4 items-center col-span-12 sm:col-span-6 rounded-2xl bg-gray-200 dark:bg-gray-800 p-6">
      <li className="text-gray-900 dark:text-white text-xl font-bold border-r pr-4">
        {dict.sections.editingTools}
      </li>
      <li className="flex items-center bg-[#000155] rounded-lg font-bold text-[#a0a0f9] text-xl px-4 py-2">Ae</li>
      <li className="flex items-center bg-[#02035e] rounded-lg font-bold text-[#9997f9] text-xl px-4 py-2">Pr</li>
    </ul>
  );
}
