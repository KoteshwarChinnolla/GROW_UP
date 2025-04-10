"use client";

import { SuccessStories } from "@/components/success-stories";
import { FAQ } from "@/components/faq";
import { SuccessStoriesAndFAQ } from "@/components/success-stories-faq";

export default function ComponentsExample() {
  // Example success stories data
  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      testimonial:
        "After using GrowUp's resume builder, I received calls for interviews within a week. The templates are professional and the ATS optimization really works!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      testimonial:
        "The expert review service was invaluable. They helped me highlight my technical skills in a way that caught the attention of top tech companies.",
      rating: 4,
    },
    {
      name: "Emily Rodriguez",
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
          Component Examples
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          This page demonstrates how to use the Success Stories, FAQ, and
          combined components.
        </p>

        {/* Success Stories Component */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Success Stories Component
          </h2>
          <SuccessStories
            stories={successStories}
            title="Client Success Stories"
            subtitle="Hear from our satisfied clients about their experiences."
          />
        </div>

        {/* FAQ Component */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ Component</h2>
          <FAQ
            faqs={faqs}
            title="Common Questions"
            subtitle="Find answers to frequently asked questions about our services."
          />
        </div>

        {/* Combined Component */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Combined Component
          </h2>
          <SuccessStoriesAndFAQ
            successStories={successStories}
            faqs={faqs}
            title="Client Testimonials & Common Questions"
            subtitle="Hear from our satisfied clients and find answers to frequently asked questions about our services."
            bgColor="bg-indigo-50"
            textColor="text-indigo-900"
            accentColor="text-purple-600"
          />
        </div>

        {/* Custom Styled Components */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">
            Custom Styled Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SuccessStories
              stories={successStories.slice(0, 2)}
              title="Featured Success Stories"
              subtitle="See how we've helped professionals like you."
              bgColor="bg-blue-50"
              textColor="text-blue-900"
              accentColor="text-blue-600"
            />
            <FAQ
              faqs={faqs.slice(0, 2)}
              title="Quick Answers"
              subtitle="Common questions about our services."
              bgColor="bg-green-50"
              textColor="text-green-900"
              accentColor="text-green-600"
              showContactButton={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
