import React from "react";
import Accordion from "./Accordion";
import { Plus } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do you offer emergency plumbing services?",
      answer:
        "Yes, we’re available 24/7 for emergency plumbing, heating, and construction-related issues across Aldershot and surrounding areas.",
    },
    {
      question: "Are your technicians licensed and insured?",
      answer:
        "Absolutely. Every member of our team is fully licensed, insured, and professionally trained to handle all types of residential and commercial jobs.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes, we offer free estimates for all non-emergency services so you always know the cost before work begins.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve Aldershot, Hampshire, and surrounding regions — offering prompt, reliable, and affordable services.",
    },
    {
      question: "How can I request a quote?",
      answer:
        "Simply fill out our contact form or call us directly — our team will respond quickly to arrange your free estimate.",
    },
  ];

  return (
    <section className="w-full bg-[var(--color-gray-faint)] py-16 px-6 flex flex-col items-center text-center">
      <div className="max-w-[800px] w-full">
        <h2 className="text-3xl font-bold text-[var(--color-primary-600)] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[var(--color-gray-500)] mb-10">
          Have questions about our plumbing, heating, or construction services?
          Here are some of the most common things our customers ask us.
        </p>

        <Accordion
          items={faqs}
          icon={<Plus className="text-[var(--color-secondary-500)] w-5 h-5" />}
        />
      </div>
    </section>
  );
};

export default FAQSection;
