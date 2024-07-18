import { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
import { AccordionItemProps } from "../types";

const accContent: AccordionItemProps[] = [
  {
    title: "What is Github and how does it work?",
    content:
      "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
  },
  {
    title: "How do I see GitHub's availability?",
    content: "Check our real-time status report",
  },
  {
    title: "His mother had always taught him",
    content:
      "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  },
  {
    title: "There are different types of secrets.",
    content:
      "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
  },
];

const Accordion = () => {
  const [accordionContent, setAccordionContent] = useState<
    AccordionItemProps[]
  >([]);

  useEffect(() => {
    setAccordionContent(accContent);
  }, []);

  return (
    <div className="flex justify-center w-full my-5">
      <div className="flex flex-col justify-center w-1/2">
        {accordionContent.map((accItem, index) => (
          <AccordionItem
            key={index}
            title={accItem.title}
            content={accItem.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
