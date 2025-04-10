"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  sectionId?: string;
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function FAQ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services.",
  faqs,
  sectionId = "faq",
  bgColor = "bg-gray-50",
  textColor = "text-gray-900",
  accentColor = "text-indigo-600",
}: FAQProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id={sectionId} className={`py-20 px-4 ${bgColor}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${accentColor} mb-4`}>
            {title}
          </h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
          value={openItem || undefined}
          onValueChange={setOpenItem}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
