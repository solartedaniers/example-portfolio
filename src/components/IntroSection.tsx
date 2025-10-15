interface IntroSectionProps {
  dict: { intro: string };
}

export default function IntroSection({ dict }: IntroSectionProps) {
  return (
    <p className="p-5 text-2xl text-white col-span-9 rounded-2xl bg-foreground">
      {dict.intro}
    </p>
  );
}
