// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// const serviceRows = [
//   [
//     {
//       title: "UI/UX Design",
//       backgroundClass: "bg-[#e9eeff]",
//       items: [
//         "Mobile App Design (iOS & Android)",
//         "Web Design (Landing Pages, Dashboards, Platforms)",
//         "Wire framing & Prototyping (Low & High Fidelity)",
//         "Design Systems & Style Guides",
//         "Responsive Design for all devices",
//       ],
//     },
//     {
//       title: "User Experience (UX)",
//       backgroundClass: "bg-[#f9f6e1]",
//       items: [
//         "User Research & Analysis",
//         "User Personas & Journey Mapping",
//         "Information Architecture",
//         "Usability Testing",
//         "UX Audits & Improvements",
//       ],
//     },
//     {
//       title: "Website Development",
//       backgroundClass: "bg-[#f0e8fd]",
//       items: [
//         "WordPress Website Design & Development",
//         "Custom Website Layouts",
//         "Landing Page Optimization",
//         "Responsive & Mobile-Friendly Websites",
//       ],
//     },
//   ],
//   [
//     {
//       title: "Tools & Technologies",
//       backgroundClass: "bg-[#e9eeff]",
//       items: [
//         "Figma (Design & Prototyping)",
//         "Canva",
//         "HTML & CSS (Basic Front-End)",
//         "AI Design Tools",
//       ],
//     },
//     {
//       title: "Additional Services",
//       backgroundClass: "bg-[#f9f6e1]",
//       items: [
//         "Website Redesign",
//         "Product Design",
//         "Branding & Visual Identity (Basic)",
//         "Portfolio Design",
//         "UI Enhancements & Improvements",
//       ],
//     },
//     {
//       title: "",
//       backgroundClass: "bg-[#f0e8fd]",
//       cta: "CONTACT ME NOW",
//     },
//   ],
// ];

// export const HeroSection = (): JSX.Element => {
//   return (
//     <section className="relative w-full self-stretch bg-[#fdfbf4]">
//       <div className="mx-auto flex w-full max-w-[2400px] flex-col items-center">
//         <img
//           className="relative mt-[-26.50px] h-[235px] w-full self-stretch object-cover"
//           alt="Hero"
//           src="/figmaAssets/hero.svg"
//         />
//         <div className="w-full max-w-[2400px] px-4 py-20 sm:px-6 lg:px-12 xl:px-24 2xl:px-40">
//           <div className="grid gap-8">
//             {serviceRows.map((row, rowIndex) => (
//               <div
//                 key={`service-row-${rowIndex}`}
//                 className="grid grid-cols-1 gap-8 lg:grid-cols-3"
//               >
//                 {row.map((card, cardIndex) => (
//                   <Card
//                     key={`${card.title || card.cta}-${cardIndex}`}
//                     className={`border-0 rounded-none shadow-none ${card.backgroundClass} min-h-[420px] lg:min-h-[667px]`}
//                   >
//                     <CardContent className="flex h-full flex-col items-center px-8 pb-10 pt-12 text-center sm:px-10 lg:px-12">
//                       {card.cta ? (
//                         <div className="flex h-full w-full items-center justify-center">
//                           <Button
//                             type="button"
//                             variant="outline"
//                             className="h-auto rounded-none border border-black bg-transparent px-6 py-5 shadow-[0px_2px_2px_#00000040] hover:bg-transparent"
//                           >
//                             <span className="[font-family:'Poppins',Helvetica] text-center text-[24px] font-medium leading-[22px] text-wwwfindingdesigncoukwoodsmoke sm:text-[28px] lg:text-[32px]">
//                               {card.cta}
//                             </span>
//                           </Button>
//                         </div>
//                       ) : (
//                         <>
//                           <h2 className="[font-family:'Poppins',Helvetica] text-center text-[28px] font-medium leading-[1.4] tracking-[-1.63px] text-black sm:text-[34px] lg:text-[40px] lg:leading-[77.4px]">
//                             {card.title}
//                           </h2>
//                           <div className="mt-[17.5px] w-full max-w-[410px] [font-family:'Poppins',Helvetica] text-left text-[20px] font-normal leading-[1.6] tracking-[-0.67px] text-black sm:text-[24px] lg:text-[28px] lg:leading-[44px]">
//                             {card.items?.map((item, itemIndex) => (
//                               <p key={`${item}-${itemIndex}`}>{item}</p>
//                             ))}
//                           </div>
//                         </>
//                       )}
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceRows = [
  [
    {
      title: "UI/UX Design",
      backgroundClass: "bg-[#e9eeff]",
      items: [
        "Mobile App Design (iOS & Android)",
        "Web Design (Landing Pages, Dashboards, Platforms)",
        "Wire framing & Prototyping (Low & High Fidelity)",
        "Design Systems & Style Guides",
        "Responsive Design for all devices",
      ],
    },
    {
      title: "User Experience (UX)",
      backgroundClass: "bg-[#f9f6e1]",
      items: [
        "User Research & Analysis",
        "User Personas & Journey Mapping",
        "Information Architecture",
        "Usability Testing",
        "UX Audits & Improvements",
      ],
    },
    {
      title: "Website Development",
      backgroundClass: "bg-[#f0e8fd]",
      items: [
        "WordPress Website Design & Development",
        "Custom Website Layouts",
        "Landing Page Optimization",
        "Responsive & Mobile-Friendly Websites",
      ],
    },
  ],
  [
    {
      title: "Tools & Technologies",
      backgroundClass: "bg-[#e9eeff]",
      items: [
        "Figma (Design & Prototyping)",
        "Canva",
        "HTML & CSS (Basic Front-End)",
        "AI Design Tools",
      ],
    },
    {
      title: "Additional Services",
      backgroundClass: "bg-[#f9f6e1]",
      items: [
        "Website Redesign",
        "Product Design",
        "Branding & Visual Identity (Basic)",
        "Portfolio Design",
        "UI Enhancements & Improvements",
      ],
    },
    {
      title: "",
      backgroundClass: "bg-[#f0e8fd]",
      cta: "CONTACT ME NOW",
    },
  ],
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch bg-[#fdfbf4]">
      <div className="mx-auto flex w-full max-w-[2400px] flex-col items-center">
        <img
          className="relative mt-[-26.50px] h-[235px] w-full self-stretch object-cover"
          alt="Hero"
          src="/figmaAssets/hero.svg"
        />
        <div className="w-full max-w-[2400px] px-4 py-12 sm:px-6 lg:px-12 xl:px-24 2xl:px-40">
          <div className="grid gap-6">
            {serviceRows.map((row, rowIndex) => (
              <div
                key={`service-row-${rowIndex}`}
                className="grid grid-cols-1 gap-6 lg:grid-cols-3"
              >
                {row.map((card, cardIndex) => (
                  <Card
                    key={`${card.title || card.cta}-${cardIndex}`}
                    className={`border-0 rounded-none shadow-none ${card.backgroundClass}`}
                  >
                    <CardContent className="flex h-full flex-col items-center px-6 pb-8 pt-8 text-center sm:px-8 lg:px-10">
                      {card.cta ? (
                        <div className="flex h-full min-h-[200px] w-full items-center justify-center">
                          <Button
                            type="button"
                            variant="outline"
                            className="h-auto rounded-none border border-black bg-transparent px-6 py-4 shadow-[0px_2px_2px_#00000040] hover:bg-transparent"
                          >
                            <span className="[font-family:'Poppins',Helvetica] text-center text-[20px] font-medium leading-[1.4] text-wwwfindingdesigncoukwoodsmoke sm:text-[24px] lg:text-[28px]">
                              {card.cta}
                            </span>
                          </Button>
                        </div>
                      ) : (
                        <>
                          <h2 className="[font-family:'Poppins',Helvetica] text-center text-[24px] font-medium leading-[1.3] tracking-[-1.2px] text-black sm:text-[28px] lg:text-[32px]">
                            {card.title}
                          </h2>
                          <ul className="mt-4 w-full max-w-[410px] list-none text-left">
                            {card.items?.map((item, itemIndex) => (
                              <li
                                key={`${item}-${itemIndex}`}
                                className="flex items-start gap-2 py-1 [font-family:'Poppins',Helvetica] text-[16px] font-normal leading-[1.6] tracking-[-0.4px] text-black sm:text-[18px] lg:text-[20px] lg:leading-[1.7]"
                              >
                                <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-black" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};