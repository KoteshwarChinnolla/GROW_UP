import HeroSection from "@/components/hero-section";
import CTASection from "@/components/cta-section";
import StatsSection from "@/components/stats-section";
import ServiceCard from "@/components/service-card";
import { SuccessStories } from "@/components/success-stories";
import { FAQ } from "@/components/faq";
import ScrollAnimation from "./components/scroll-animation";

export default function Home() {
  const services = [
    {
      icon: <i className="fas fa-file-alt text-2xl text-indigo-600 animate-pulse-slow"></i>,
      title: "Resume Building",
      description:
        "Create professional, ATS-friendly resumes with our expert tools and templates tailored to your industry.",
      stat: "1000+ Templates",
      slug: "resume-builder",
    },
    {
      icon: <i className="fas fa-compass text-2xl text-indigo-600 animate-rotate-slow"></i>,
      title: "Career Guidance",
      description:
        "Get personalized career advice from industry experts to help you navigate your professional journey.",
      stat: "50+ Career Paths",
      slug: "career-guidance",
    },
    {
      icon: <i className="fas fa-briefcase text-2xl text-indigo-600 animate-float"></i>,
      title: "Internships",
      description:
        "Find perfect internship opportunities matched to your skills, interests, and career goals.",
      stat: "2500+ Opportunities",
      slug: "internships",
    },
    {
      icon: <i className="fas fa-graduation-cap text-2xl text-indigo-600 animate-wiggle"></i>,
      title: "Online Courses",
      description:
        "Enhance your skills with our comprehensive library of courses designed by industry professionals.",
      stat: "300+ Courses",
      slug: "online-courses",
    },
    {
      icon: <i className="fas fa-video text-2xl text-indigo-600 animate-pulse-slow"></i>,
      title: "Mock Interviews",
      description:
        "Practice with realistic interview simulations and receive feedback to improve your performance.",
      stat: "95% Success Rate",
      slug: "mock-interviews",
    },
    {
      icon: <i className="fas fa-handshake text-2xl text-indigo-600 animate-float"></i>,
      title: "Job Placement",
      description:
        "Connect with top employers and receive support throughout your job application process.",
      stat: "10,000+ Placements",
      slug: "job-placement",
    },
  ];

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
    <>
      {/* Hero Section - No animation wrapper needed as it's the first element */}
      <HeroSection />

      {/* Featured Services Section */}
      <ScrollAnimation>
        <section id="services" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive tools and resources to help you build your career
                path and achieve your professional goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    stat={service.stat}
                    slug={service.slug}
                  />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Stats Section - Moved above Success Stories */}
      <ScrollAnimation>
        <StatsSection />
      </ScrollAnimation>

      {/* Success Stories Section */}
      <ScrollAnimation>
        <SuccessStories
          stories={successStories}
          title="Client Success Stories"
          subtitle="Hear from our satisfied clients about their experiences."
        />
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation>
        <FAQ
          faqs={faqs}
          title="Common Questions"
          subtitle="Find answers to frequently asked questions about our services."
        />
      </ScrollAnimation>

      <ScrollAnimation>
        <CTASection />
      </ScrollAnimation>
    </>
  );
}
