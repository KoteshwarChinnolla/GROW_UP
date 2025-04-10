"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface SuccessStory {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SuccessStoriesAndFAQProps {
  title?: string;
  subtitle?: string;
  successStories: SuccessStory[];
  faqs: FAQItem[];
  sectionId?: string;
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function SuccessStoriesAndFAQ({
  title = "Success Stories & FAQs",
  subtitle = "See how we've helped professionals achieve their career goals and find answers to common questions.",
  successStories,
  faqs,
  sectionId = "success-stories-faq",
  bgColor = "bg-gray-50",
  textColor = "text-gray-900",
  accentColor = "text-indigo-600",
}: SuccessStoriesAndFAQProps) {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  return (
    <section id={sectionId} className={`py-16 px-4 ${bgColor}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${accentColor} mb-4`}>
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold ${textColor} mb-8 text-center`}>
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <p className="text-gray-600 text-sm">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{story.testimonial}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < story.rating ? "" : "text-gray-300"
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h3 className={`text-2xl font-bold ${textColor} mb-8 text-center`}>
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto">
            <Accordion
              type="single"
              collapsible
              value={openItem || undefined}
              onValueChange={(value) => setOpenItem(value)}
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-indigo-600 hover:no-underline hover:bg-gray-50">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Still have questions?
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Contact Support <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
