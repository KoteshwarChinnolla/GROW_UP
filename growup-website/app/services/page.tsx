import ServiceCard from "@/components/service-card"

export default function ServicesPage() {
  const services = [
    {
      icon: <i className="fas fa-file-alt text-2xl text-indigo-600"></i>,
      title: "Resume Building",
      description:
        "Create professional, ATS-friendly resumes with our expert tools and templates tailored to your industry.",
      stat: "1000+ Templates",
      slug: "resume-builder",
    },
    {
      icon: <i className="fas fa-compass text-2xl text-indigo-600"></i>,
      title: "Career Guidance",
      description:
        "Get personalized career advice from industry experts to help you navigate your professional journey.",
      stat: "50+ Career Paths",
      slug: "career-guidance",
    },
    {
      icon: <i className="fas fa-briefcase text-2xl text-indigo-600"></i>,
      title: "Internships",
      description: "Find perfect internship opportunities matched to your skills, interests, and career goals.",
      stat: "2500+ Opportunities",
      slug: "internships",
    },
    {
      icon: <i className="fas fa-graduation-cap text-2xl text-indigo-600"></i>,
      title: "Online Courses",
      description: "Enhance your skills with our comprehensive library of courses designed by industry professionals.",
      stat: "300+ Courses",
      slug: "online-courses",
    },
    {
      icon: <i className="fas fa-video text-2xl text-indigo-600"></i>,
      title: "Mock Interviews",
      description: "Practice with realistic interview simulations and receive feedback to improve your performance.",
      stat: "95% Success Rate",
      slug: "mock-interviews",
    },
    {
      icon: <i className="fas fa-handshake text-2xl text-indigo-600"></i>,
      title: "Job Placement",
      description: "Connect with top employers and receive support throughout your job application process.",
      stat: "10,000+ Placements",
      slug: "job-placement",
    },
  ]

  return (
    <div className="pt-24">
      <div className="bg-indigo-50 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Comprehensive tools and resources to help you build your career path and achieve your professional goals.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              stat={service.stat}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

