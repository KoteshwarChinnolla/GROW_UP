"use client";

import { SuccessStoriesAndFAQ } from "@/components/ui/success-stories-faq";

export default function SuccessStoriesFAQExample() {
  // Example success stories data
  const successStories = [
    {
      name: "Shyam Singh",
      role: "Marketing Manager",
      testimonial:
        "After using GrowUp's resume builder, I received calls for interviews within a week. The templates are professional and the ATS optimization really works!",
      rating: 5,
    },
    { 
      name: "Priyanka Reddy",
      role: "Software Engineer",
      testimonial:
        "The expert review service was invaluable. They helped me highlight my technical skills in a way that caught the attention of top tech companies.",
      rating: 4,
    },
    {
      name: "Anushka Sharma",
      role: "Healthcare Professional",
      testimonial:
        "As someone switching careers, I was struggling to showcase my transferable skills. GrowUp's resume builder helped me create a resume that landed me my dream job in a new industry.",
      rating: 5,
    },
  ];

  // Example FAQs data
  const faqs = [
    {
      question: "How does the resume builder work?",
      answer:
        "Our resume builder provides ATS-friendly templates and AI-powered suggestions. Simply input your information, and the tool will format everything professionally.",
    },
    {
      question: "What types of mock interviews do you offer?",
      answer:
        "We offer industry-specific mock interviews with both AI simulation and live sessions with industry experts. Interviews cover behavioral, technical, and case-study formats.",
    },
    {
      question: "Are the courses certified or recognized by employers?",
      answer:
        "Yes, our courses are developed in partnership with industry leaders and many include certifications that are recognized by employers. We regularly update our curriculum based on market demand and employability factors to ensure relevance.",
    },
    {
      question: "How does the internship matching process work?",
      answer:
        "Our platform analyzes your profile, skills, and career goals to match you with relevant internship opportunities. We partner with companies ranging from startups to Fortune 500s. You can set preferences for location, industry, and role type to refine your matches.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Success Stories & FAQ Example
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          This page demonstrates how to use the SuccessStoriesAndFAQ component
          with custom data.
        </p>

        {/* Default styling */}
        <SuccessStoriesAndFAQ successStories={successStories} faqs={faqs} />

        {/* Custom styling */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Custom Styled Example
          </h2>
          <SuccessStoriesAndFAQ
            title="Client Testimonials & Common Questions"
            subtitle="Hear from our satisfied clients and find answers to frequently asked questions about our services."
            successStories={successStories}
            faqs={faqs}
            bgColor="bg-indigo-50"
            textColor="text-indigo-900"
            accentColor="text-purple-600"
          />
        </div>
      </div>
    </div>
  );
}
