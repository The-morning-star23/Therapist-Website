'use client'


import React, { useState } from 'react';
import './styels//FAQ.css';

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
  {
    question: "What are your fees?",
    answer: "$200 for individual sessions, $240 for couples sessions.",
  },
  {
    question: "What are your office hours?",
    answer: "In-person: Tue & Thu, 10 AM–6 PM. Virtual: Mon, Wed & Fri, 1 PM–5 PM.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-16 px-6 md:px-16 bg-[#fefaf4]">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item border-b pb-4">
            <button
              className="faq-question flex justify-between items-center w-full text-left font-medium text-lg text-gray-800 focus:outline-none"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="faq-answer mt-2 text-gray-700 text-base transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
