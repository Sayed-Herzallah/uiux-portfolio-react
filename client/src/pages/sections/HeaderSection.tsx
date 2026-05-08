import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const headerActions = [
  {
    label: "Download CV",
    href: "#",
  },
];

const heroActions = [
  {
    label: "CONTACT ME",
    href: "https://www.atnndesign.com/inquire",
    icon: "→",
  },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="relative flex w-full flex-col self-stretch bg-wwwatnndesigncomlinen">
      <header className="w-full border-b border-[#212121e0] bg-wwwatnndesigncomlinen">
        <div className="mx-auto flex w-full max-w-[2400px] items-center justify-between px-6 py-6 md:px-10 lg:px-16">
          <img
            className="h-[60px] w-[86px] shrink-0 object-contain"
            alt="Screen"
            src="/figmaAssets/screen 1.svg"
          />
          <nav aria-label="Header actions" className="flex items-center">
            {headerActions.map((action) => (
              <Button
                key={action.label}
                asChild
                variant="ghost"
                className="h-auto px-4 py-2 hover:bg-transparent"
              >
                <a
                  href={action.href}
                  className="rotate-[-0.30deg] [font-family:'Unbounded',Helvetica] text-[22px] font-normal leading-[30px] tracking-[-0.67px] text-black md:text-[26px] lg:text-[29.5px]"
                >
                  {action.label}
                </a>
              </Button>
            ))}
          </nav>
        </div>
      </header>
      <div className="w-full bg-wwwatnndesigncomlinen">
        <div className="mx-auto flex w-full max-w-[2400px] px-6 pb-20 pt-16 md:px-10 md:pb-24 md:pt-24 lg:px-20 lg:pb-32 lg:pt-52 xl:px-32 2xl:px-40">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,1.1fr)] lg:gap-8 xl:gap-12">
            <div className="flex min-w-0 flex-col items-start">
              <Card className="w-full border-0 bg-transparent shadow-none">
                <CardContent className="flex flex-col items-start gap-8 p-0">
                  <h1 className="[font-family:'Poppins',Helvetica] text-[32px] font-medium leading-[1.15] tracking-[-1.63px] text-black md:text-[44px] lg:text-[56px] xl:text-6xl">
                    Hi , I am Hanaa Mahmoud
                  </h1>
                  <p className="max-w-[596px] [font-family:'Poppins',Helvetica] text-lg font-light leading-[1.57] tracking-[-0.67px] text-black md:text-[22px] lg:text-[26px] lg:leading-[44px] xl:text-[28px]">
                    UI/UX Designer crafting intuitive, scalable, and accessible
                    digital experiences Detail-oriented UI/UX Designer with a
                    background in Computer and Information Sciences. I
                    specialize in user research, wire-framing, and prototyping
                    using Figma, and I also design and build websites using
                    WordPress.
                  </p>
                  <div className="flex items-center gap-8">
                    {heroActions.map((action) => (
                      <Button
                        key={action.label}
                        asChild
                        variant="secondary"
                        className="h-auto rounded-none bg-wwwatnndesigncomblue-chalk px-6 py-4 shadow-[0px_2px_2px_#00000040] hover:bg-wwwatnndesigncomblue-chalk/90"
                      >
                        <a
                          href={action.href}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          <span className="[font-family:'Poppins',Helvetica] text-[22px] font-medium leading-[22px] tracking-[0] text-wwwfindingdesigncoukwoodsmoke md:text-[28px] lg:text-[32px]">
                            {action.label}
                          </span>
                          <span className="[font-family:'Arial-Regular',Helvetica] text-[17.3px] font-normal leading-[22px] text-wwwfindingdesigncoukwoodsmoke">
                            {action.icon}
                          </span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex w-full justify-center lg:justify-end">
              <img
                className="h-auto w-full max-w-[1071px] object-contain"
                alt="Frame"
                src="/figmaAssets/frame-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
