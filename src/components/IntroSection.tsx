export default function IntroSection({ dict }: any) {
  return (
    <p className="p-5 text-2xl text-white col-span-9 rounded-2xl bg-foreground dark:bg-gray-700">
      {dict.intro}
    </p>
  );
}
