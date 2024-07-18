import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { AccordionItemProps } from "../types";

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-3">
      <div className="flex flex-row border-b-2 border-cyan-900">
        <span className="flex-1 font-medium">{title}</span>
        <span>
          {isOpen ? (
            <MinusCircleIcon
              onClick={() => setIsOpen(!isOpen)}
              className="size-5"
            />
          ) : (
            <PlusCircleIcon
              onClick={() => setIsOpen(!isOpen)}
              className="size-5"
            />
          )}
        </span>
      </div>
      <div>{isOpen && <span className="text-cyan-100">{content}</span>}</div>
    </div>
  );
};

export default AccordionItem;
