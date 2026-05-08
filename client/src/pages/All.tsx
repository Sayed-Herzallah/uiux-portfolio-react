import { Separator } from "@/components/ui/separator";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FaqSection } from "./sections/FaqSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ServicesSection } from "./sections/ServicesSection";

const decorativeImages = {
  servicesToPortfolio: "/figmaAssets/sub-container-1.svg",
  footer: "/figmaAssets/sub-container.svg",
};

const patternedSeparators = [
  {
    src: "/figmaAssets/horizontal-border-pattern-of-alternating-orange-and-pale-pink-sq.png",
    alt: "Decorative separator",
  },
  {
    src: "/figmaAssets/horizontal-border-pattern-of-alternating-orange-and-pale-pink-sq-1.png",
    alt: "Decorative separator",
  },
];

export const All = (): JSX.Element => {
  return (
    <main className="relative flex w-full flex-col items-stretch overflow-x-hidden bg-wwwatnndesigncomlinen">
      <HeaderSection />
      <HeroSection />
      <ServicesSection />
      <section aria-label="Decorative gallery divider" className="w-full">
        <img
          className="block h-auto w-full"
          alt="Sub container"
          src={decorativeImages.servicesToPortfolio}
        />
      </section>
      <PortfolioSection />
      <CallToActionSection />
      <section
        aria-label="Decorative separator"
        className="w-full bg-wwwatnndesigncomlinen"
      >
        <div className="w-full">
          <Separator className="sr-only" />
          <div
            className="h-[54px] w-full bg-cover bg-[50%_50%] bg-repeat-x"
            style={{ backgroundImage: `url(${patternedSeparators[0].src})` }}
            aria-hidden="true"
          />
        </div>
      </section>
      <FaqSection />
      <section
        aria-label="Decorative separator"
        className="w-full bg-wwwatnndesigncomlinen"
      >
        <div className="w-full">
          <Separator className="sr-only" />
          <div
            className="h-[54px] w-full bg-cover bg-[50%_50%] bg-repeat-x"
            style={{ backgroundImage: `url(${patternedSeparators[1].src})` }}
            aria-hidden="true"
          />
        </div>
      </section>
      <footer className="w-full">
        <img
          className="block h-auto w-full"
          alt="Sub container"
          src={decorativeImages.footer}
        />
      </footer>
    </main>
  );
};
