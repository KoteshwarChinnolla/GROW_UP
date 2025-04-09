"use client";

import { SuccessStories } from "./success-stories";
import { FAQ } from "./faq";

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
  showContactButton?: boolean;
  contactButtonText?: string;
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
  showContactButton = true,
  contactButtonText = "Contact Support",
}: SuccessStoriesAndFAQProps) {
  return (
    <div>
      <SuccessStories
        title="Success Stories"
        subtitle="See how we've helped professionals achieve their career goals."
        stories={successStories}
        sectionId={`${sectionId}-stories`}
        bgColor={bgColor}
        textColor={textColor}
        accentColor={accentColor}
      />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services."
        faqs={faqs}
        sectionId={`${sectionId}-faq`}
        bgColor={bgColor}
        textColor={textColor}
        accentColor={accentColor}
        showContactButton={showContactButton}
        contactButtonText={contactButtonText}
      />
    </div>
  );
}
