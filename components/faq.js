import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "In which technology should I do my web development?",
    answer: "As the technology opted depends on your requirement and audience targeted, we normally offer a free primary consultation on which technology you should opt for your web designing or development requirement. Just contact us with your requirements for the same!.",
  },
  {
    question: "How much does it cost to hire a web developer ?",
    answer: "You can hire a web development company  on a per-project basis, where the cost of the project completely depends on the scope of the project. When you hire on a per-project basis various teams (UX and web designers, front-end developers, back-end developers, testers, etc) would be involved in your project at different stages and there will also be a dedicated project manager assigned.",
  },
  {
    question: "How to find the best web design company in India? ",
    answer:
      "It would be difficult to find the best web design company, if you didn't approach it in the right way. There are thousands of companies and everyone claims to offer the same level of service. But it's up to you to do some research on the company that you're considering - especially on their previous works, their credentials, their clients, etc then just compare based on their price.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "Yes, we offer technical support . Please purchase a support plan to get 6 months of support.",
  },
];
