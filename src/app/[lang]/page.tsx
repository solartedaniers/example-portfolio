import { getDictionary } from "../i18n/dictionaries";
import { Lang } from "../i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AvatarSection from "@/components/AvatarSection";
import IntroSection from "@/components/IntroSection";
import InterestsSection from "@/components/InterestsSection";
import ExperienceCard from "@/components/ExperienceCard";
import DesignTools from "@/components/DesignTools";
import EducationSection from "@/components/EducationSection";
import EditingTools from "@/components/EditingTools";
import LanguagesSection from "@/components/LanguagesSection";
import PortfolioSection from "@/components/PortfolioSection";
import DetailsSection from "@/components/DetailsSection";

import ThemeToggle from "@/components/ThemeToggle";

export default async function HomePage(props: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await props.params; 
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex justify-center transition-colors duration-300 bg-background text-foreground min-h-screen p-4">
      {/* Language & Theme Toggle */}
      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <LanguageSwitcher currentLang={lang} />
        <ThemeToggle />
      </div>

      {/* Main Grid */}
      <main className="grid grid-cols-12 container mt-20 gap-10 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
        <AvatarSection />
        <IntroSection dict={dict} />
        <InterestsSection dict={dict} />
        <ExperienceCard data={dict.sections.experience.freelance} />
        <ExperienceCard data={dict.sections.experience.meetzed} />
        <DesignTools dict={dict} />
        <EducationSection dict={dict} />
        <EditingTools dict={dict} />
        <LanguagesSection dict={dict} />
        <PortfolioSection />
        <DetailsSection /> 
      </main>
    </div>
  );
}
