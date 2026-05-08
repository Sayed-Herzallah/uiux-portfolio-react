import { Card, CardContent } from "@/components/ui/card";

const aboutParagraphs = [
  "I'm a passionate UI/UX Designer with a solid foundation in Computer and Information Sciences from Mansoura University (Very Good grade). My journey in design is driven by a commitment to creating user-centered solutions that combine aesthetics with functionality.",
  "My Approach : I focus on understanding user needs through research, validating ideas with prototyping, and collaborating closely with developers to bring designs to life. Every design decision is intentional and backed by user insights.",
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto flex w-full max-w-[2400px] flex-col">
        <img
          className="relative -mt-[26.5px] h-[235px] w-full object-cover"
          alt="Hero"
          src="/figmaAssets/hero.svg"
        />
        <div className="mx-auto flex w-full max-w-[1869px] justify-center px-4 pb-12 md:px-6 lg:px-8">
          <Card className="w-full border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,596px)_minmax(320px,593px)] lg:justify-center lg:gap-12 xl:gap-16">
                <article className="flex min-w-0 flex-col justify-center gap-8 py-4 lg:min-h-[822px]">
                  <header>
                    <h2 className="[font-family:'Poppins',Helvetica] text-4xl font-medium leading-tight tracking-[-1.63px] text-black sm:text-5xl lg:text-6xl lg:leading-[77.4px]">
                      About Me
                    </h2>
                  </header>
                  <div className="flex max-w-[596px] flex-col gap-8">
                    {aboutParagraphs.map((paragraph, index) => (
                      <p
                        key={`about-paragraph-${index}`}
                        className="[font-family:'Poppins',Helvetica] text-xl font-normal leading-9 tracking-[-0.67px] text-black sm:text-2xl md:text-[26px] lg:text-[28px] lg:leading-[44px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
                <div className="flex justify-center lg:justify-end">
                  <figure className="relative w-full max-w-[593px]">
                    <div className="absolute left-[2.34%] top-px flex w-full justify-center">
                      <div className="h-10 w-32 bg-wwwatnndesigncomcarnation-pink" />
                    </div>
                    <img
                      className="relative z-10 mt-3 block w-full max-w-[593px] object-cover"
                      alt="Portrait"
                      src="/figmaAssets/43f4772f-7261-4558-9442-d1191cd603f3-1.png"
                    />
                  </figure>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
