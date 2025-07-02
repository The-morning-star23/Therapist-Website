"use client"

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What are your fees?",
      answer: "Individual sessions are $200 per session, and couples sessions are $240 per session. I accept both private pay and insurance, and I'm in-network with BCBS and Aetna."
    },
    {
      question: "Do you take insurance?",
      answer: "Yes, I accept insurance and am in-network with BCBS and Aetna. For out-of-network plans, I've partnered with Mentaya to help you check your eligibility for reimbursement for my services."
    },
    {
      question: "Do you provide online counseling?",
      answer: "Yes, I offer virtual therapy sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. This allows me to serve clients in Michigan and most U.S. states through PSYPACT participation."
    },
    {
      question: "What are your office hours?",
      answer: "I offer in-person sessions on Tuesdays and Thursdays from 10 AM to 6 PM, and virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM."
    },
    {
      question: "What geographic areas do you serve?",
      answer: "I provide telehealth services to clients in Michigan and most U.S. states through PSYPACT participation. For in-person sessions, I'm located at 1287 Maplewood Drive, Los Angeles, CA."
    },
    {
      question: "What services do you offer?",
      answer: "I offer individual psychotherapy for adults, couples counseling, relationship counseling, anxiety and stress management, trauma recovery, and psychological assessments. My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, and mindfulness practices."
    }
  ]

  return (
    <section className="py-24 bg-[#A8C5B8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-gray-800 text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/20 backdrop-blur-sm rounded-lg border border-white/30"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-gray-800 hover:text-gray-900 font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
