// import { Card, CardContent } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

// const marqueeItems = Array.from({ length: 13 }, () => "figma");

// const sections = [
//   {
//     type: "experience",
//     backgroundClass: "bg-wwwatnndesigncomlinen",
//     title: "Professional Experience",
//     role: "E-xpertise Dev",
//     overview:
//       "Worked on designing user-centered digital products for both web and mobile. Focused on improving usability, enhancing user flows, and delivering clean, modern UI designs in collaboration with developers.",
//     detailsLabel: "Projects :",
//     details:
//       "• Designed UI/UX for web and mobile applications. • Created landing pages with improved usability and conversion optimization. • Collaborated closely with developers to ensure smooth implementation of designs.",
//     media: {
//       kind: "images",
//       className:
//         "grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1.35fr)_minmax(220px,0.72fr)_minmax(0,1.05fr)] lg:gap-10",
//       items: [
//         {
//           alt: "Cover",
//           src: "/figmaAssets/cover--1--1.png",
//           className:
//             "w-full max-w-[537px] rounded-3xl object-cover justify-self-start",
//         },
//         {
//           alt: "Screen shot",
//           src: "/figmaAssets/screen-shot-2026-04-23-at-4-28-29-pm-1.png",
//           className: "w-full max-w-[287px] object-contain justify-self-center",
//         },
//         {
//           alt: "Screen shot",
//           src: "/figmaAssets/screen-shot-2026-02-14-at-8-04-15-pm-1.png",
//           className:
//             "w-full max-w-[422.75px] rounded-3xl border-[12px] border-solid border-[#faf8f5] object-cover justify-self-end",
//         },
//       ],
//     },
//   },
//   {
//     type: "experience",
//     backgroundClass: "bg-[#fdfbf4]",
//     title: "Professional Experience",
//     role: "Freelance UI/UX Designer",
//     overview:
//       "Worked with multiple clients, including UAE-based companies, delivering tailored UI/UX solutions. Focused on building user-friendly interfaces, improving user experience, and designing scalable digital products.",
//     detailsLabel: "Projects :",
//     details:
//       "Children's Learning Platform : Designed an engaging platform focused on simplicity, clarity, and child-friendly navigation.",
//     media: {
//       kind: "single",
//       alt: "Auto layout",
//       src: "/figmaAssets/auto-layout-horizontal.svg",
//       className: "w-full object-contain",
//     },
//   },
//   {
//     type: "experience",
//     backgroundClass: "bg-wwwatnndesigncomlinen",
//     title: "Professional Experience",
//     role: "Freelance UI/UX Designer",
//     overview:
//       "A fitness application designed to help users achieve their health goals through personalized workout plans and progress tracking.",
//     overviewLabel: "Just Run – Fitness Application .. Overview :",
//     detailsLabel: "Details :",
//     details:
//       "Designed a user-friendly interface that motivates users to stay consistent with their fitness routines. • Created user flows for tracking workouts, goals, and daily progress. • Focused on building an engaging and interactive experience. • Designed responsive layouts for mobile use.",
//     media: {
//       kind: "images",
//       className: "grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:gap-20",
//       items: [
//         {
//           alt: "M",
//           src: "/figmaAssets/m-1.png",
//           className:
//             "w-full max-w-[627px] rounded-3xl object-cover justify-self-start",
//         },
//         {
//           alt: "Image",
//           src: "/figmaAssets/image-1689.png",
//           className:
//             "w-full max-w-[567px] rounded-3xl object-cover justify-self-end",
//         },
//       ],
//     },
//   },
//   {
//     type: "experience",
//     backgroundClass: "bg-wwwatnndesigncomlinen",
//     title: "Professional Experience",
//     role: "Freelance UI/UX Designer",
//     overview:
//       "A career guidance platform designed to help users discover suitable career paths based on their skills and interests.",
//     overviewLabel: "Career Compass :",
//     detailsLabel: "Details :",
//     details:
//       "• Designed the full UI/UX of the platform from research to final prototype. • Conducted user research to understand user needs and challenges. • Created user journeys, wireframes, and high-fidelity designs. • Focused on simplifying the decision-making process for users.",
//     media: {
//       kind: "images",
//       className:
//         "grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] lg:gap-10",
//       items: [
//         {
//           alt: "Thumbnail",
//           src: "/figmaAssets/thumbnail--2--1.png",
//           className: "w-full max-w-[742px] object-contain justify-self-start",
//         },
//         {
//           alt: "Thumbnail",
//           src: "/figmaAssets/thumbnail-1.png",
//           className: "w-full max-w-[566px] object-contain justify-self-end",
//         },
//       ],
//     },
//   },
//   {
//     type: "experience",
//     backgroundClass: "bg-wwwatnndesigncomlinen",
//     title: "Professional Experience",
//     role: "Freelance UI/UX Designer",
//     summaryLabel: "Al Waha Recruitment Platform (UAE) : ",
//     summary:
//       "Designed a recruitment platform for hiring workers and drivers with clear user flows and structured experience.",
//     media: {
//       kind: "images",
//       className:
//         "grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,0.98fr)_minmax(0,1fr)] lg:gap-10",
//       items: [
//         {
//           alt: "Mockup",
//           src: "/figmaAssets/mockup-9.png",
//           className:
//             "w-full max-w-[649px] rounded-3xl object-cover justify-self-start",
//         },
//         {
//           alt: "Cover copy",
//           src: "/figmaAssets/cover-copy-15-1.png",
//           className: "w-full max-w-[666px] object-contain justify-self-end",
//         },
//       ],
//     },
//   },
//   {
//     type: "additional",
//     backgroundClass: "bg-wwwatnndesigncomlinen",
//     title: "Additional Projects",
//     overview:
//       "In addition to the projects mentioned above, I have worked on a diverse range of UI/UX and web design projects across different domains, focusing on usability, visual clarity, and user-centered experiences.",
//     listTitle: "Projects Include :",
//     listItems: [
//       "E-commerce website design for a sweets store, focusing on smooth browsing and attractive product presentation.",
//       "Clothing sales mobile application designed to enhance the shopping experience and improve user flow.",
//       "Audiobook mobile application designed to provide an engaging and seamless listening experience with intuitive navigation and user-friendly design.",
//       "Multiple dashboard designs tailored for different use cases with a focus on data clarity and usability.",
//       "Various landing pages and website layouts optimized for engagement and conversion.",
//       "Maybel Website Redesign (UAE): Redesigned an existing website to enhance usability, improve visual hierarchy, and elevate the overall user experience.",
//     ],
//     outro:
//       "I also have more projects beyond the ones mentioned above, which I will be presenting now.",
//     galleries: [
//       {
//         kind: "images",
//         className:
//           "grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:gap-10",
//         items: [
//           {
//             alt: "Image",
//             src: "/figmaAssets/image-133.png",
//             className: "w-full max-w-[658px] object-cover justify-self-start",
//           },
//           {
//             alt: "Image",
//             src: "/figmaAssets/image-136.png",
//             className: "w-full max-w-[653px] object-cover justify-self-end",
//           },
//         ],
//       },
//       {
//         kind: "images",
//         className:
//           "grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:gap-10",
//         items: [
//           {
//             alt: "Cover copy",
//             src: "/figmaAssets/cover--1--copy-3-1.png",
//             className:
//               "w-full max-w-[629px] rounded-3xl object-cover justify-self-start",
//           },
//           {
//             alt: "Copy",
//             src: "/figmaAssets/-----copy-1.png",
//             className:
//               "w-full max-w-[659px] rounded-3xl object-cover justify-self-end",
//           },
//         ],
//       },
//       {
//         kind: "images",
//         className:
//           "grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:gap-10",
//         items: [
//           {
//             alt: "Cover copy",
//             src: "/figmaAssets/cover-copy-2-1.png",
//             className: "w-full max-w-[647px] object-contain justify-self-start",
//           },
//           {
//             alt: "Cover copy",
//             src: "/figmaAssets/cover--1--copy-2-1.png",
//             className:
//               "w-full max-w-[666px] rounded-3xl object-cover justify-self-end",
//           },
//         ],
//       },
//       {
//         kind: "images",
//         className:
//           "grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:gap-[67px]",
//         items: [
//           {
//             alt: "Image",
//             src: "/figmaAssets/image-1691.png",
//             className:
//               "w-full max-w-[661px] rounded-3xl object-cover justify-self-start",
//           },
//           {
//             alt: "Image",
//             src: "/figmaAssets/image-1690.png",
//             className:
//               "w-full max-w-[641px] rounded-3xl object-cover justify-self-end",
//           },
//         ],
//       },
//       {
//         kind: "single",
//         alt: "Auto layout",
//         src: "/figmaAssets/auto-layout-horizontal-1.svg",
//         className: "w-full object-contain",
//       },
//     ],
//   },
//   {
//     type: "wordpress",
//     backgroundClass: "bg-wwwatnndesigncomlinen",
//     title: "Design in WordPress",
//     role: "Freelance UI/UX Designer",
//     project: "Photography Portfolio Website (Saudi Arabia)",
//     details:
//       "• Designed and developed a WordPress portfolio for a photographer. • Focused on showcasing visual work through clean layouts and organized galleries. • Optimized performance and responsiveness across all devices.",
//     link: "https://fatimahhstudio.com/",
//   },
// ];

// const RenderMedia = ({
//   media,
// }: {
//   media:
//     | {
//         kind: "single";
//         alt: string;
//         src: string;
//         className: string;
//       }
//     | {
//         kind: "images";
//         className: string;
//         items: { alt: string; src: string; className: string }[];
//       };
// }) => {
//   if (media.kind === "single") {
//     return (
//       <div className="w-full overflow-hidden rounded-[32px] bg-transparent shadow-[0px_4px_4px_#00000040]">
//         <img className={media.className} alt={media.alt} src={media.src} />
//       </div>
//     );
//   }

//   return (
//     <div className="w-full overflow-hidden rounded-[32px] bg-transparent px-4 py-6 shadow-[0px_4px_4px_#00000040] sm:px-6 md:px-8 lg:px-10">
//       <div className={media.className}>
//         {media.items.map((item, index) => (
//           <img
//             key={`${item.src}-${index}`}
//             className={item.className}
//             alt={item.alt}
//             src={item.src}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const MarqueeBand = () => {
//   return (
//     <section className="w-full bg-wwwatnndesigncomgeraldine">
//       <div className="overflow-hidden py-6">
//         <div className="flex min-w-max items-center gap-11 px-6 md:px-10 lg:px-16">
//           {marqueeItems.map((item, index) => (
//             <button
//               key={`${item}-${index}`}
//               type="button"
//               className="[font-family:'Poppins',Helvetica] text-[28px] font-medium leading-[44px] tracking-[-0.67px] text-black transition-opacity hover:opacity-80 focus:outline-none focus:ring-0 md:text-[32px]"
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export const PortfolioSection = (): JSX.Element => {
//   return (
//     <section className="relative w-full">
//       <div className="flex w-full flex-col">
//         {sections.map((section, sectionIndex) => (
//           <div key={`${section.title}-${sectionIndex}`} className="w-full">
//             <section className={`${section.backgroundClass} w-full`}>
//               <div className="mx-auto flex w-full max-w-[2400px] justify-center px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-20 lg:py-[120px] xl:px-32 2xl:px-40">
//                 <Card className="w-full max-w-[1570px] rounded-none border-0 bg-[#ffffff99] shadow-[0px_4px_4px_#00000040]">
//                   <CardContent className="px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-11 lg:py-[120px]">
//                     {section.type === "experience" && (
//                       <div className="flex flex-col gap-16">
//                         <header className="w-full px-0 md:px-2.5">
//                           <div className="flex max-w-[1481px] flex-col gap-8">
//                             <h2 className="[font-family:'Poppins',Helvetica] text-4xl font-medium leading-[1.2] tracking-[-1.63px] text-black sm:text-5xl lg:text-6xl lg:leading-[77.4px]">
//                               {section.title}
//                             </h2>
//                             {"summary" in section ? (
//                               <p className="[font-family:'Poppins',Helvetica] text-[24px] font-normal leading-[40px] tracking-[-0.76px] text-black md:text-[28px] lg:text-[32px] lg:leading-[44px]">
//                                 <span className="font-medium tracking-[-0.24px]">
//                                   {section.role}
//                                   <br />
//                                   <br />
//                                 </span>
//                                 <span className="font-medium text-[24px] tracking-[-0.19px] md:text-[26px] lg:text-[28px]">
//                                   {section.summaryLabel}
//                                 </span>
//                                 <span className="text-[24px] tracking-[-0.19px] md:text-[26px] lg:text-[28px]">
//                                   {" "}
//                                   {section.summary}
//                                 </span>
//                               </p>
//                             ) : (
//                               <div className="[font-family:'Poppins',Helvetica] text-[24px] font-normal leading-[40px] tracking-[-0.76px] text-black md:text-[28px] lg:text-[32px] lg:leading-[44px]">
//                                 <p>
//                                   <span className="font-medium tracking-[-0.24px]">
//                                     {section.role}
//                                     <br />
//                                   </span>
//                                 </p>
//                                 <p>
//                                   <span className="text-[24px] tracking-[-0.19px] md:text-[26px] lg:text-[28px]">
//                                     {" "}
//                                   </span>
//                                   {"overviewLabel" in section &&
//                                   section.overviewLabel ? (
//                                     <span className="font-medium text-[24px] tracking-[-0.19px] md:text-[26px] lg:text-[28px]">
//                                       {section.overviewLabel}
//                                     </span>
//                                   ) : (
//                                     <span className="font-medium text-[24px] tracking-[-0.19px] md:text-[26px] lg:text-[28px]">
//                                       Overview :
//                                     </span>
//                                   )}
//                                   {!("overviewLabel" in section) ||
//                                   section.overviewLabel === "Overview :" ? (
//                                     <span className="text-[24px] tracking-[-0.19px] md:text-[26px] lg:text-[28px]">
//                                       {" "}
//                                       {section.overview}
//                                     </span>
//                                   ) : (
//                                     <span className="text-[24px] tracking-[-0.19px] md:text-[26px] lg:text-[28px]">
//                                       {" "}
//                                       {section.overview}
//                                     </span>
//                                   )}
//                                 </p>
//                                 <p className="pt-4">
//                                   <span className="font-medium text-[24px] tracking-[-0.19px] md:text-[26px] lg:text-[28px]">
//                                     {section.detailsLabel}
//                                   </span>
//                                   <span className="text-[24px] tracking-[-0.19px] md:text-[26px] lg:text-[28px]">
//                                     {" "}
//                                     {section.details}
//                                   </span>
//                                 </p>
//                               </div>
//                             )}
//                           </div>
//                         </header>
//                         <div className="flex w-full flex-col gap-16">
//                           <Separator className="h-px w-full bg-transparent" />
//                           <RenderMedia media={section.media} />
//                         </div>
//                       </div>
//                     )}

//                     {section.type === "additional" && (
//                       <div className="flex flex-col gap-16">
//                         <header className="w-full px-0 md:px-2.5">
//                           <div className="flex max-w-[1481px] flex-col gap-8">
//                             <h2 className="[font-family:'Poppins',Helvetica] text-4xl font-medium leading-[1.2] tracking-[-1.63px] text-black sm:text-5xl lg:text-6xl lg:leading-[77.4px]">
//                               {section.title}
//                             </h2>
//                             <div className="[font-family:'Poppins',Helvetica] text-[24px] font-normal leading-[40px] tracking-[-0.67px] text-black md:text-[26px] lg:text-[28px] lg:leading-[44px]">
//                               <p>
//                                 <span className="font-medium tracking-[-0.19px]">
//                                   Overview
//                                 </span>
//                                 <span className="font-medium text-[28px] tracking-[-0.24px] md:text-[30px] lg:text-[32px]">
//                                   {" "}
//                                   :
//                                 </span>
//                               </p>
//                               <p className="pt-2 tracking-[-0.19px]">
//                                 {section.overview}
//                               </p>
//                               <p className="pt-4">
//                                 <span className="font-medium tracking-[-0.19px]">
//                                   {section.listTitle}
//                                 </span>
//                               </p>
//                               <div className="pt-2 tracking-[-0.19px]">
//                                 {section.listItems.map((item, index) => (
//                                   <p key={`${item}-${index}`}>{item}</p>
//                                 ))}
//                               </div>
//                               <p className="pt-4 tracking-[-0.19px]">
//                                 {section.outro}
//                               </p>
//                             </div>
//                           </div>
//                         </header>
//                         <div className="flex flex-col gap-16 pb-16">
//                           {section.galleries.map((gallery, galleryIndex) => (
//                             <div
//                               key={`gallery-${galleryIndex}`}
//                               className="flex flex-col gap-16"
//                             >
//                               <Separator className="h-px w-full bg-transparent" />
//                               <RenderMedia media={gallery} />
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {section.type === "wordpress" && (
//                       <div className="flex flex-col gap-8 px-0 md:px-2.5">
//                         <header className="max-w-[1481px]">
//                           <h2 className="[font-family:'Poppins',Helvetica] text-4xl font-medium leading-[1.2] tracking-[-1.63px] text-black sm:text-5xl lg:text-6xl lg:leading-[77.4px]">
//                             {section.title}
//                           </h2>
//                         </header>
//                         <div className="[font-family:'Poppins',Helvetica] text-[24px] font-normal leading-[40px] tracking-[-0.76px] text-black md:text-[28px] lg:text-[32px] lg:leading-[44px]">
//                           <p>
//                             <span className="font-medium tracking-[-0.24px]">
//                               {section.role}
//                               <br />
//                               <br />
//                             </span>
//                             <span className="font-medium text-[24px] tracking-[-0.19px] md:text-[26px] lg:text-[28px]">
//                               {section.project}
//                             </span>
//                             <span className="text-[24px] tracking-[-0.19px] md:text-[26px] lg:text-[28px]">
//                               {" "}
//                               {section.details}
//                             </span>
//                           </p>
//                         </div>
//                         <a
//                           className="[font-family:'Poppins',Helvetica] w-fit text-[24px] font-normal leading-[40px] tracking-[-0.67px] text-black underline md:text-[26px] lg:text-[28px] lg:leading-[44px]"
//                           href={section.link}
//                           rel="noopener noreferrer"
//                           target="_blank"
//                         >
//                           {section.link}
//                         </a>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               </div>
//             </section>
//             {sectionIndex !== sections.length - 1 && <MarqueeBand />}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

import React from "react";
import "./PortfolioSection.css";

// ─── Data ────────────────────────────────────────────────────────────────────

// const marqueeItems = Array.from({ length: 13 }, () => "figma");
const marqueeItems = [
  "UI/UX Design ✦",
  "User Research ✦",
  "Wireframing ✦",
  "Prototyping ✦",
  "WordPress ✦",
  "Design Systems ✦",
  "Usability Testing ✦",
  "Mobile Design ✦",
  "Web Design ✦",
  "Visual Design ✦",
  "Figma ✦",
  "User Flows ✦",
  "High-Fidelity Design ✦",
];
const sections = [
  {
    type: "experience",
    backgroundClass: "bg-linen",
    title: "Professional Experience",
    role: "E-xpertise Dev",
    overview:
      "Worked on designing user-centered digital products for both web and mobile. Focused on improving usability, enhancing user flows, and delivering clean, modern UI designs in collaboration with developers.",
    detailsLabel: "Projects :",
    details:
      "• Designed UI/UX for web and mobile applications. • Created landing pages with improved usability and conversion optimization. • Collaborated closely with developers to ensure smooth implementation of designs.",
    media: {
      kind: "images",
      className: "media-grid media-grid--3col",
      items: [
        {
          alt: "Cover",
          src: "/figmaAssets/cover--1--1.png",
          className: "media-img media-img--left media-img--rounded",
        },
        {
          alt: "Screen shot",
          src: "/figmaAssets/screen-shot-2026-04-23-at-4-28-29-pm-1.png",
          className: "media-img media-img--center media-img--contain",
        },
        {
          alt: "Screen shot",
          src: "/figmaAssets/screen-shot-2026-02-14-at-8-04-15-pm-1.png",
          className: "media-img media-img--right media-img--rounded media-img--bordered",
        },
      ],
    },
  },
  {
    type: "experience",
    backgroundClass: "bg-cream",
    title: "Professional Experience",
    role: "Freelance UI/UX Designer",
    overview:
      "Worked with multiple clients, including UAE-based companies, delivering tailored UI/UX solutions. Focused on building user-friendly interfaces, improving user experience, and designing scalable digital products.",
    detailsLabel: "Projects :",
    details:
      "Children's Learning Platform : Designed an engaging platform focused on simplicity, clarity, and child-friendly navigation.",
    media: {
      kind: "single",
      alt: "Auto layout",
      src: "/figmaAssets/auto-layout-horizontal.svg",
      className: "media-img media-img--full",
    },
  },
  {
    type: "experience",
    backgroundClass: "bg-linen",
    title: "Professional Experience",
    role: "Freelance UI/UX Designer",
    overview:
      "A fitness application designed to help users achieve their health goals through personalized workout plans and progress tracking.",
    overviewLabel: "Just Run – Fitness Application .. Overview :",
    detailsLabel: "Details :",
    details:
      "Designed a user-friendly interface that motivates users to stay consistent with their fitness routines. • Created user flows for tracking workouts, goals, and daily progress. • Focused on building an engaging and interactive experience. • Designed responsive layouts for mobile use.",
    media: {
      kind: "images",
      className: "media-grid media-grid--2col",
      items: [
        {
          alt: "M",
          src: "/figmaAssets/m-1.png",
          className: "media-img media-img--left media-img--rounded",
        },
        {
          alt: "Image",
          src: "/figmaAssets/image-1689.png",
          className: "media-img media-img--right media-img--rounded",
        },
      ],
    },
  },
  {
    type: "experience",
    backgroundClass: "bg-linen",
    title: "Professional Experience",
    role: "Freelance UI/UX Designer",
    overview:
      "A career guidance platform designed to help users discover suitable career paths based on their skills and interests.",
    overviewLabel: "Career Compass :",
    detailsLabel: "Details :",
    details:
      "• Designed the full UI/UX of the platform from research to final prototype. • Conducted user research to understand user needs and challenges. • Created user journeys, wireframes, and high-fidelity designs. • Focused on simplifying the decision-making process for users.",
    media: {
      kind: "images",
      className: "media-grid media-grid--2col-asym",
      items: [
        {
          alt: "Thumbnail",
          src: "/figmaAssets/thumbnail--2--1.png",
          className: "media-img media-img--left media-img--contain",
        },
        {
          alt: "Thumbnail",
          src: "/figmaAssets/thumbnail-1.png",
          className: "media-img media-img--right media-img--contain",
        },
      ],
    },
  },
  {
    type: "experience",
    backgroundClass: "bg-linen",
    title: "Professional Experience",
    role: "Freelance UI/UX Designer",
    summaryLabel: "Al Waha Recruitment Platform (UAE) : ",
    summary:
      "Designed a recruitment platform for hiring workers and drivers with clear user flows and structured experience.",
    media: {
      kind: "images",
      className: "media-grid media-grid--2col",
      items: [
        {
          alt: "Mockup",
          src: "/figmaAssets/mockup-9.png",
          className: "media-img media-img--left media-img--rounded",
        },
        {
          alt: "Cover copy",
          src: "/figmaAssets/cover-copy-15-1.png",
          className: "media-img media-img--right media-img--contain",
        },
      ],
    },
  },
  {
    type: "additional",
    backgroundClass: "bg-linen",
    title: "Additional Projects",
    overview:
      "In addition to the projects mentioned above, I have worked on a diverse range of UI/UX and web design projects across different domains, focusing on usability, visual clarity, and user-centered experiences.",
    listTitle: "Projects Include :",
    listItems: [
      "E-commerce website design for a sweets store, focusing on smooth browsing and attractive product presentation.",
      "Clothing sales mobile application designed to enhance the shopping experience and improve user flow.",
      "Audiobook mobile application designed to provide an engaging and seamless listening experience with intuitive navigation and user-friendly design.",
      "Multiple dashboard designs tailored for different use cases with a focus on data clarity and usability.",
      "Various landing pages and website layouts optimized for engagement and conversion.",
      "Maybel Website Redesign (UAE): Redesigned an existing website to enhance usability, improve visual hierarchy, and elevate the overall user experience.",
    ],
    outro:
      "I also have more projects beyond the ones mentioned above, which I will be presenting now.",
    galleries: [
      {
        kind: "images",
        className: "media-grid media-grid--2col",
        items: [
          { alt: "Image", src: "/figmaAssets/image-133.png", className: "media-img media-img--left" },
          { alt: "Image", src: "/figmaAssets/image-136.png", className: "media-img media-img--right" },
        ],
      },
      {
        kind: "images",
        className: "media-grid media-grid--2col",
        items: [
          { alt: "Cover copy", src: "/figmaAssets/cover--1--copy-3-1.png", className: "media-img media-img--left media-img--rounded" },
          { alt: "Copy", src: "/figmaAssets/-----copy-1.png", className: "media-img media-img--right media-img--rounded" },
        ],
      },
      {
        kind: "images",
        className: "media-grid media-grid--2col",
        items: [
          { alt: "Cover copy", src: "/figmaAssets/cover-copy-2-1.png", className: "media-img media-img--left media-img--contain" },
          { alt: "Cover copy", src: "/figmaAssets/cover--1--copy-2-1.png", className: "media-img media-img--right media-img--rounded" },
        ],
      },
      {
        kind: "images",
        className: "media-grid media-grid--2col",
        items: [
          { alt: "Image", src: "/figmaAssets/image-1691.png", className: "media-img media-img--left media-img--rounded" },
          { alt: "Image", src: "/figmaAssets/image-1690.png", className: "media-img media-img--right media-img--rounded" },
        ],
      },
      {
        kind: "single",
        alt: "Auto layout",
        src: "/figmaAssets/auto-layout-horizontal-1.svg",
        className: "media-img media-img--full",
      },
    ],
  },
  {
    type: "wordpress",
    backgroundClass: "bg-linen",
    title: "Design in WordPress",
    role: "Freelance UI/UX Designer",
    project: "Photography Portfolio Website (Saudi Arabia)",
    details:
      "• Designed and developed a WordPress portfolio for a photographer. • Focused on showcasing visual work through clean layouts and organized galleries. • Optimized performance and responsiveness across all devices.",
    link: "https://fatimahhstudio.com/",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const RenderMedia = ({ media }) => {
  if (media.kind === "single") {
    return (
      <div className="media-wrapper media-wrapper--single">
        <img className={media.className} alt={media.alt} src={media.src} />
      </div>
    );
  }

  return (
    <div className="media-wrapper media-wrapper--grid">
      <div className={media.className}>
        {media.items.map((item, index) => (
          <img
            key={`${item.src}-${index}`}
            className={item.className}
            alt={item.alt}
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
};

// const MarqueeBand = () => (
//   <section className="marquee-band">
//     <div className="marquee-track">
//       <div className="marquee-content">
//         {[...marqueeItems, ...marqueeItems].map((item, index) => (
//           <button
//             key={`${item}-${index}`}
//             type="button"
//             className="marquee-item"
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   </section>
// );
const MarqueeBand = () => (
  <section className="marquee-band">
    <div className="marquee-track">
      <div className="marquee-content">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <button key={index} type="button" className="marquee-item">
            {item} <span className="marquee-dot">✦</span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

// ─── Section renderers ────────────────────────────────────────────────────────

const ExperienceSection = ({ section }) => (
  <div className="section-inner">
    <header className="section-header">
      <div className="section-header__content">
        <h2 className="section-title">{section.title}</h2>

        {"summary" in section ? (
          <p className="section-body">
            <span className="text-bold">
              {section.role}
              <br /><br />
            </span>
            <span className="text-bold text-md">{section.summaryLabel}</span>
            <span className="text-md"> {section.summary}</span>
          </p>
        ) : (
          <div className="section-body">
            <p>
              <span className="text-bold">{section.role}<br /></span>
            </p>
            <p>
              <span className="text-md"> </span>
              {section.overviewLabel ? (
                <span className="text-bold text-md">{section.overviewLabel}</span>
              ) : (
                <span className="text-bold text-md">Overview :</span>
              )}
              <span className="text-md"> {section.overview}</span>
            </p>
            <p className="pt">
              <span className="text-bold text-md">{section.detailsLabel}</span>
              <span className="text-md"> {section.details}</span>
            </p>
          </div>
        )}
      </div>
    </header>

    <div className="section-media-wrapper">
      <div className="separator" />
      <RenderMedia media={section.media} />
    </div>
  </div>
);

const AdditionalSection = ({ section }) => (
  <div className="section-inner">
    <header className="section-header">
      <div className="section-header__content">
        <h2 className="section-title">{section.title}</h2>
        <div className="section-body text-sm-body">
          <p>
            <span className="text-bold">Overview</span>
            <span className="text-bold text-lg-colon"> :</span>
          </p>
          <p className="pt-sm">{section.overview}</p>
          <p className="pt">
            <span className="text-bold">{section.listTitle}</span>
          </p>
          <div className="pt-sm">
            {section.listItems.map((item, index) => (
              <p key={`${item}-${index}`}>{item}</p>
            ))}
          </div>
          <p className="pt">{section.outro}</p>
        </div>
      </div>
    </header>

    <div className="galleries-wrapper">
      {section.galleries.map((gallery, galleryIndex) => (
        <div key={`gallery-${galleryIndex}`} className="gallery-block">
          <div className="separator" />
          <RenderMedia media={gallery} />
        </div>
      ))}
    </div>
  </div>
);

const WordPressSection = ({ section }) => (
  <div className="section-inner section-inner--wp">
    <header className="section-header--wp">
      <h2 className="section-title">{section.title}</h2>
    </header>
    <div className="section-body">
      <p>
        <span className="text-bold">
          {section.role}
          <br /><br />
        </span>
        <span className="text-bold text-md">{section.project}</span>
        <span className="text-md"> {section.details}</span>
      </p>
    </div>
    <a
      className="wp-link"
      href={section.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {section.link}
    </a>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export const PortfolioSection = () => {
  return (
    <section className="portfolio-root">
      <div className="portfolio-sections">
        {sections.map((section, sectionIndex) => (
          <div key={`${section.title}-${sectionIndex}`} className="portfolio-section-wrap">
            <section className={`portfolio-section-bg ${section.backgroundClass}`}>
              <div className="portfolio-section-outer">
                <div className="portfolio-card">
                  <div className="portfolio-card__body">
                    {section.type === "experience" && (
                      <ExperienceSection section={section} />
                    )}
                    {section.type === "additional" && (
                      <AdditionalSection section={section} />
                    )}
                    {section.type === "wordpress" && (
                      <WordPressSection section={section} />
                    )}
                  </div>
                </div>
              </div>
            </section>

            {sectionIndex !== sections.length - 1 && <MarqueeBand />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;