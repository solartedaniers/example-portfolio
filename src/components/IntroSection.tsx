interface IntroSectionProps {
  dict: { intro: string };
}

export default function IntroSection({ dict }: IntroSectionProps) {
  return (
    <p className="p-5 text-2xl text-gray-900 dark:text-white col-span-9 
                  rounded-2xl bg-gray-200 dark:bg-gray-800">
      {dict.intro}
    </p>
  );
}
