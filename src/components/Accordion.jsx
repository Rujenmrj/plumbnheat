import React, { useState, useRef } from "react";

const Accordion = ({ items, icon }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-[800px] min-w-[330px]">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-full bg-[var(--primary-300)] rounded-md cursor-pointer overflow-hidden"
        >
          <button
            className={`flex items-center justify-between w-full px-4 py-3 gap-3 text-[var(--dark-brand)] font-bold focus:outline-none text-left ${
              openIndex === index ? "border-b border-gray-300" : ""
            }`}
            onClick={() => toggle(index)}
          >
            <span className="flex-1 text-left">{item.question}</span>
            <span
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-45" : "rotate-0"
              }`}
            >
              {icon}
            </span>
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              maxHeight:
                openIndex === index
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
            }}
            className="px-4 overflow-hidden transition-[max-height] duration-300 ease-in-out text-[var(--dark-brand)]"
          >
            <div className="py-3 text-left">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
