import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const contactItems = [
  {
    icon: "/figmaAssets/frame-126614-2.svg",
    alt: "Email",
    text: "Email : hanaamahmoud27@icloud.com",
  },
  {
    icon: "/figmaAssets/frame-126614.svg",
    alt: "Whatsapp",
    text: "whatsapp : 01016163175",
  },
  {
    icon: "/figmaAssets/frame-126614-1.svg",
    alt: "Location",
    text: "Location : Mansoura, Egypt",
  },
];

const decorativeImages = [
  {
    src: "/figmaAssets/vibrant-pop-art-megaphone-png-with-pink-rays---free-download-by-.png",
    alt: "Vibrant pop art",
    className:
      "absolute left-0 top-0 z-10 w-[110px] -translate-x-[24%] -translate-y-[2%] object-cover sm:w-[140px] lg:w-[170px] xl:w-[198px]",
  },
  {
    src: "/figmaAssets/--2.png",
    alt: "Element",
    className:
      "absolute bottom-[-20px] left-[4%] z-10 h-[78px] w-auto object-cover sm:bottom-[-24px] sm:h-[96px] lg:bottom-[-30px] lg:h-[110px] xl:h-[125px]",
  },
  {
    src: "/figmaAssets/---1--1.png",
    alt: "Element",
    className:
      "absolute right-[-18px] top-[45%] z-10 h-[96px] w-auto -translate-y-1/2 object-cover sm:right-[-24px] sm:h-[120px] lg:right-[-34px] lg:h-[150px] xl:right-[-50px] xl:h-[182px]",
  },
];

const smileys = [
  {
    src: "/figmaAssets/smiley-face-with-a-curved-smiling-mouth-and-two-oval-eyes-on-a-l.png",
    alt: "Decorative smiley",
    className:
      "absolute left-[46%] top-[19%] z-10 h-[30px] w-[30px] bg-cover bg-center sm:h-[34px] sm:w-[34px] lg:h-[39px] lg:w-[39px]",
  },
  {
    src: "/figmaAssets/smiley-face-with-a-curved-smiling-mouth-and-two-oval-eyes-on-a-l-1.png",
    alt: "Decorative smiley",
    className:
      "absolute right-[8%] top-[38%] z-10 h-[30px] w-[30px] bg-cover bg-center sm:h-[34px] sm:w-[34px] lg:h-[39px] lg:w-[39px]",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <div className="flex w-full flex-col items-stretch">
        <img
          className="relative mt-[-26.50px] h-[160px] w-full object-cover sm:h-[190px] lg:h-[235px]"
          alt="Hero"
          src="/figmaAssets/hero.svg"
        />
        <div className="mx-auto flex w-full max-w-[2400px] justify-center px-4 pb-10 sm:px-6 lg:px-8 lg:pb-16">
          <Card className="relative w-full max-w-[1600px] overflow-visible border-0 bg-wwwatnndesigncomlinen shadow-none rounded-none">
            <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 justify-center">
              <Badge className="h-auto rounded-none bg-wwwatnndesigncomvivid-tangerine px-4 pb-[4.8px] pt-[6.4px] font-www-atnndesign-com-arial-regular-upper text-[length:var(--www-atnndesign-com-arial-regular-upper-font-size)] font-[number:var(--www-atnndesign-com-arial-regular-upper-font-weight)] leading-[var(--www-atnndesign-com-arial-regular-upper-line-height)] tracking-[var(--www-atnndesign-com-arial-regular-upper-letter-spacing)] text-wwwfindingdesigncoukwoodsmoke [font-style:var(--www-atnndesign-com-arial-regular-upper-font-style)] hover:bg-wwwatnndesigncomvivid-tangerine">
                LET&#39;S WORK TOGETHER
              </Badge>
            </div>
            {smileys.map((smiley, index) => (
              <div
                key={`smiley-${index}`}
                className={smiley.className}
                aria-hidden="true"
                style={{ backgroundImage: `url(${smiley.src})` }}
              />
            ))}

            {decorativeImages.map((image, index) => (
              <img
                key={`decorative-${index}`}
                className={image.className}
                alt={image.alt}
                src={image.src}
              />
            ))}

            <CardContent className="px-6 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-16 lg:pb-20 xl:px-24 xl:pb-28 xl:pt-20">
              <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,669px)_minmax(320px,655.35px)] lg:gap-[80px] xl:gap-[117.33px]">
                <article className="relative flex max-w-[669px] flex-col items-start justify-center gap-8">
                  <header>
                    <h2 className="[font-family:'Poppins',Helvetica] text-[40px] font-normal leading-[1.15] tracking-[-1.63px] text-black sm:text-[48px] lg:text-6xl xl:whitespace-nowrap">
                      Let&#39;s Work Together
                    </h2>
                  </header>
                  <address className="not-italic">
                    <ul className="flex flex-col gap-8">
                      {contactItems.map((item, index) => (
                        <li
                          key={`contact-${index}`}
                          className="flex items-center gap-5 sm:gap-6 lg:gap-8"
                        >
                          <img
                            className="h-[52px] w-[53px] shrink-0"
                            alt={item.alt}
                            src={item.icon}
                          />
                          <span className="[font-family:'Poppins',Helvetica] text-xl font-normal leading-[1.57] tracking-[-0.67px] text-black sm:text-2xl lg:text-[28px] lg:leading-[44px]">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </address>
                </article>
                <div className="relative flex w-full justify-center lg:justify-end">
                  <img
                    className="h-auto w-full max-w-[655.35px]"
                    alt="Div camp img wrap"
                    src="/figmaAssets/div-camp-img-wrap.svg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
