"use client"

import { useState } from "react"
import "../../styles/FAQ.css"

export default function FAQ() {
  const faqs = [
    {
      question: "What are your fees?",
      answer:
        "Individual sessions are $200 per session, and couples sessions are $240 per session. I accept both private pay and insurance, and I'm in-network with BCBS and Aetna.",
    },
    {
      question: "Do you take insurance?",
      answer:
        "Yes, I accept insurance and am in-network with BCBS and Aetna. For out-of-network plans, I've partnered with Mentaya to help you check your eligibility for reimbursement for my services.",
    },
    {
      question: "Do you provide online counseling?",
      answer:
        "Yes, I offer virtual therapy sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. This allows me to serve clients in Michigan and most U.S. states through PSYPACT participation.",
    },
    {
      question: "What are your office hours?",
      answer:
        "I offer in-person sessions on Tuesdays and Thursdays from 10 AM to 6 PM, and virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM.",
    },
    {
      question: "What geographic areas do you serve?",
      answer:
        "I provide telehealth services to clients in Michigan and most U.S. states through PSYPACT participation. For in-person sessions, I'm located at 1287 Maplewood Drive, Los Angeles, CA.",
    },
    {
      question: "What services do you offer?",
      answer:
        "I offer individual psychotherapy for adults, couples counseling, relationship counseling, anxiety and stress management, trauma recovery, and psychological assessments. My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, and mindfulness practices.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
            >
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
