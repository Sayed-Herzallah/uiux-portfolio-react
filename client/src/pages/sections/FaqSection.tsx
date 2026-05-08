import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    question: "How do you start a UI/UX design project?",
    answer:
      "I usually start by understanding the project goals, target users, and business needs. Then I move to research, create user personas, and define the user flow before starting the actual design.",
  },
  {
    value: "item-2",
    question: "How long does a UI/UX project usually take?",
    answer:
      "The timeline depends on the project size and complexity. Simple projects may take a few days, while larger apps or websites can take several weeks including research, design, and revisions.",
  },
  {
    value: "item-3",
    question: "Can I request changes after the design is delivered?",
    answer:
      "Yes, revisions are always part of the process. I usually include feedback rounds to ensure the final design matches the client&apos;s expectations and business goals.",
  },
  {
    value: "item-4",
    question: "What tools do you use for UI/UX design?",
    answer: "I mainly use Figma for UI/UX design and prototyping.",
  },
  {
    value: "item-5",
    question: "Do you also provide development or only design?",
    answer:
      "I focus mainly on UI/UX design, but I make sure all designs are developer-friendly and well-structured for easy handoff to development teams.",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="relative w-full self-stretch bg-[#f1e8fe]">
      <div className="mx-auto flex w-full max-w-[2400px] flex-col items-center justify-center px-6 py-20 sm:px-10 lg:px-20 xl:px-40 xl:py-[120px]">
        <div className="flex w-full flex-col items-start gap-6">
          <header className="w-full">
            <h2 className="[font-family:'Poppins',Helvetica] text-3xl font-normal leading-tight tracking-[-1.63px] text-black sm:text-4xl lg:text-5xl xl:text-6xl xl:leading-[77.4px]">
              Frequently Asked Questions
            </h2>
          </header>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="flex w-full flex-col gap-6 py-8"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-none"
              >
                <AccordionTrigger className="w-full border-b border-[#00000078] px-6 py-6 text-left hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0 [&>svg]:text-black">
                  <span className="[font-family:'Poppins',Helvetica] pr-6 text-lg font-medium leading-[1.5] tracking-[-0.67px] text-black sm:text-[22px] lg:text-[28px] lg:leading-[44px]">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-6">
                  <p className="[font-family:'Poppins',Helvetica] text-base font-light leading-[1.7] tracking-[-0.67px] text-black sm:text-[22px] lg:text-[28px] lg:leading-[44px]">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
