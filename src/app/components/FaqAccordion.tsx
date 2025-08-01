"use client";

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const faqs = [
  {
    question: "What should I bring to my first consultation?",
    answer: "Please bring all documents relevant to your case, including any correspondence, contracts, police reports, and a form of personal identification. A written summary of events can also be very helpful.",
  },
  {
    question: "How are your legal fees structured?",
    answer: "Our legal fees vary depending on the complexity and nature of the case. We offer several fee structures, including fixed fees for certain services and hourly rates. We will discuss all fee arrangements transparently during your initial consultation.",
  },
  {
    question: "How long will my case take?",
    answer: "The duration of a legal case can vary significantly based on many factors, such as the complexity of the issue, the court's schedule, and the level of cooperation from the opposing party. We strive to resolve matters as efficiently as possible and will provide you with a realistic timeline based on the specifics of your case.",
  },
  {
    question: "Do I need to make an appointment?",
    answer: "Yes, we recommend making an appointment to ensure that a lawyer is available to meet with you and give your matter the attention it deserves. You can schedule an appointment by calling our office or using the contact form on our website.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-2">
      {faqs.map((faq, index) => (
        <AnimatedSection key={index} className="border-b border-gray-200 py-4" delay={`${index * 0.1}s`}>
          <div className="faq-question">
            <button
              type="button"
              className="flex justify-between items-center w-full text-left text-xl font-semibold text-[#0a192f] py-2 hover:text-[#D4AF37] transition"
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              <i className={`fas fa-chevron-down transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
          <div
            className="faq-answer"
            style={{ maxHeight: openIndex === index ? '200px' : '0' }} // Adjust maxHeight as needed
          >
            <p className="pt-4 text-gray-600">{faq.answer}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default FaqAccordion;