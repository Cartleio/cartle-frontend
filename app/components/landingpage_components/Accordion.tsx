"use client";
import { useState } from "react";

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: JSX.Element;
}): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`rounded-xl border py-4  bg-white shadow-[0px_30px_44px_20px_rgba(231,_231,_231,_0.35)] py-8 my-4 px-6 grid ${
        isExpanded ? "gap-4 border border-[#FF7600]" : "border-[#f7f7f7] gap-0"
      }`}
    >
      <button
        className="text-gray-900 font-semibold leading-[170%] text-lg flex items-center gap-10 justify-between text-left w-full"
        type="button"
        onClick={toggleAccordion}
      >
        {question}

        {isExpanded ? (
          <div className="rounded-full p-3 bg-[#FF7600]">
            <svg
              width="19"
              height="12"
              viewBox="0 0 19 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.23438 1.88281L9.49096 10.1021L17.7476 1.88281"
                stroke="white"
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : (
          <div className="rounded-full p-3 shadow-md">
            <svg
              width="11"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 17.916L9.59427 9.65943L1.375 1.40284"
                stroke="#FF7600"
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </button>

      <div
        className={`transition-all h-full ease-linear text-gray-500 overflow-hidden ${
          isExpanded ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default Accordion;
