"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

// ServiceCard Component
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  stat: string;
  slug: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  stat,
  slug,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col h-full border border-gray-100 animate-fade-in hover:scale-[1.02]">
      <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 animate-bounce-slow">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <div className="flex justify-between items-center">
        <Link
          href={`/services/${slug}`}
          className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center cursor-pointer whitespace-nowrap transition-colors duration-300"
        >
          Learn More <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
        </Link>
        <span className="text-gray-500 text-sm">{stat}</span>
      </div>
    </div>
  );
}

// StatsSection Component
export function StatsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-4xl font-bold text-indigo-600 mb-2 animate-count-up">15K+</h3>
            <p className="text-gray-600">Successful Placements</p>
          </div>
          <div className="p-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-4xl font-bold text-indigo-600 mb-2 animate-count-up">98%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="p-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-4xl font-bold text-indigo-600 mb-2 animate-count-up">500+</h3>
            <p className="text-gray-600">Corporate Partners</p>
          </div>
          <div className="p-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-4xl font-bold text-indigo-600 mb-2 animate-count-up">25K+</h3>
            <p className="text-gray-600">Career Transformations</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ThemeProvider Component
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// HeroSection Component
export function HeroSection() {
  return (
    <section className="pt-8 relative overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        <div className="md:w-1/2 bg-gradient-to-r from-indigo-50 to-indigo-100 flex items-center z-10 animate-fade-in">
          <div className="px-6 py-12 md:py-0 md:px-16 lg:px-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 animate-slide-in-left">
              Accelerate Your{" "}
              <span className="text-indigo-600">Career Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              Comprehensive career development services designed to help you
              achieve your professional goals and stand out in today's
              competitive job market.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 relative overflow-hidden animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <img
            src="https://public.readdy.ai/ai/img_res/e3b3662cdf999f64737c73f99764c3db.jpg"
            alt="Career Growth"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

// Header Component
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full z-10 relative animate-fade-in-down">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
            GrowUp
          </Link>
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="/services"
            className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
          >
            Services
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i
            className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-slide-in-down">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/services"
              className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

// Footer Component
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">GrowUp</h3>
            <p className="text-gray-400 mb-6">
              Empowering professionals to achieve their career goals through
              comprehensive development services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition cursor-pointer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition cursor-pointer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition cursor-pointer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition cursor-pointer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/resume-builder"
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Resume Building
                </Link>
              </li>
              <li>
                <Link
                  href="/services/career-guidance"
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/internships"
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/services/online-courses"
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Online Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mock-interviews"
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Mock Interviews
                </Link>
              </li>
              <li>
                <Link
                  href="/services/job-placement"
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Job Placement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-indigo-400"></i>
                <span className="text-gray-400">
                  123 Career Street, Professional City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-indigo-400"></i>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-indigo-400"></i>
                <span className="text-gray-400">info@growup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 GrowUp. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 cursor-pointer"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 cursor-pointer"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// CTASection Component
export function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Your Career Journey Today
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who have accelerated their careers
          with our comprehensive services.
        </p>
      </div>
    </section>
  );
}

// FAQ Component
export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  const faqs = [
    {
      question: "How does the resume builder work?",
      answer:
        "Our resume builder provides ATS-friendly templates and AI-powered suggestions. Simply input your information, and the tool will format everything professionally. You can export to PDF, Word, or HTML formats, and receive feedback on how to improve your resume's effectiveness.",
    },
    {
      question: "What types of mock interviews do you offer?",
      answer:
        "We offer industry-specific mock interviews with both AI simulation and live sessions with industry experts. Interviews cover behavioral, technical, and case-study formats. You'll receive feedback, areas for improvement, and suggested responses to help you ace your real interviews.",
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
    {
      question: "Do you provide personalized career guidance?",
      answer:
        "Absolutely! We offer one-on-one career coaching sessions with industry experts who provide personalized guidance based on your unique situation. Additionally, our AI-powered career path tool can help you map out your professional journey with tailored recommendations.",
    },
    {
      question: "Is there a free version of the platform?",
      answer:
        "Yes, we offer a free basic plan that includes limited access to our resume builder, some courses, and career resources. Premium plans unlock the full suite of tools, unlimited mock interviews, personalized coaching, and priority access to exclusive opportunities.",
    },
    {
      question: "How frequently are job opportunities updated?",
      answer:
        "Our job database is updated daily with new opportunities. Premium members receive instant notifications for positions matching their profile. We source jobs directly from employer partners and trusted job boards to ensure quality listings.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services and platform.
          </p>
        </div>

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
                className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left text-indigo-600 hover:no-underline hover:bg-gray-50 transition-colors duration-300">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-lg text-gray-700 mb-6">Still have questions?</p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300 hover:scale-105">
              Contact Support <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// InternshipsPage Component
export function InternshipsPage() {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  const faqs = [
    {
      question: "How does the internship matching process work?",
      answer:
        "Our platform analyzes your profile, skills, and career goals to match you with relevant internship opportunities. We partner with companies ranging from startups to Fortune 500s. You can set preferences for location, industry, and role type to refine your matches.",
    },
    {
      question: "What types of internships are available?",
      answer:
        "We offer internships across various industries including technology, finance, healthcare, marketing, and more. Opportunities range from remote to in-person positions, with both part-time and full-time options available to accommodate your schedule.",
    },
    {
      question: "Do I need prior experience to apply for internships?",
      answer:
        "Not necessarily. Many of our internship opportunities are designed for students and early-career professionals. We focus on matching you with positions that align with your current skill level and provide opportunities for growth and learning.",
    },
    {
      question: "How long do internships typically last?",
      answer:
        "Internship durations vary by position and company. We offer opportunities ranging from short-term (1-3 months) to long-term (6-12 months) internships. Some positions may also have the potential to convert to full-time roles after completion.",
    },
    {
      question: "Is there a fee to use the internship matching service?",
      answer:
        "We offer both free and premium internship matching services. The free tier gives you access to basic internship listings, while our premium service provides personalized matching, application support, and direct connections with hiring managers.",
    },
    {
      question:
        "Do you provide support during the internship application process?",
      answer:
        "Yes, we offer comprehensive support throughout your internship journey. This includes resume reviews, interview preparation, application guidance, and feedback to help you present yourself effectively to potential employers.",
    },
  ];

  return (
    <div className="pt-24">
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Internships
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                Find perfect internship opportunities matched to your skills,
                interests, and career goals.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/internship (1).jpeg"
                alt="Internship Opportunities"
                className="rounded-lg shadow-xl"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2>Discover the Perfect Internship</h2>
          <p>
            Our internship placement service helps students and early-career
            professionals find valuable work experience opportunities that align
            with their career goals. We partner with leading companies across
            various industries to provide exclusive internship opportunities for
            our members.
          </p>

          <h3>Why Choose Our Internship Service?</h3>
          <ol>
            <li>
              Access to exclusive internship opportunities not available
              elsewhere
            </li>
            <li>
              Personalized matching based on your skills, interests, and career
              goals
            </li>
            <li>Preparation support for applications and interviews</li>
            <li>Mentorship during your internship experience</li>
            <li>Potential for conversion to full-time employment</li>
          </ol>

          <h3>Featured Internship Partners</h3>
          <p>
            We work with companies ranging from innovative startups to Fortune
            500 corporations across technology, finance, healthcare, marketing,
            and more. Our partners are committed to providing meaningful
            learning experiences that help interns develop valuable skills and
            industry connections.
          </p>

          <div className="mt-12 bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ready to start your internship search?
            </h3>
            <p className="mb-6">
              Create a profile to browse our current internship opportunities
              and get matched with positions that fit your skills and interests.
            </p>
            <Link
              href="/sign-up"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-lg cursor-pointer whitespace-nowrap inline-block"
            >
              Create Profile
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our internship services.
            </p>
          </div>

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
      </section>
    </div>
  );
}

// SuccessStoriesAndFAQ Component
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-3xl md:text-4xl font-bold ${accentColor} mb-4`}>
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold ${textColor} mb-8 text-center animate-fade-in`}>
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 animate-pulse"></div>
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
          <h3 className={`text-2xl font-bold ${textColor} mb-8 text-center animate-fade-in`}>
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
                  className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-indigo-600 hover:no-underline hover:bg-gray-50 transition-colors duration-300">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <p className="text-lg text-gray-700 mb-6">
                Still have questions?
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300 hover:scale-105">
                Contact Support <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
