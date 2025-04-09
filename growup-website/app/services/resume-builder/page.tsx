import Link from "next/link";

export default function ResumeBuilderPage() {
  const features = [
    {
      title: "ATS-Friendly Templates",
      description:
        "Our templates are designed to pass through Applicant Tracking Systems with ease, ensuring your resume gets seen by hiring managers.",
      icon: <i className="fas fa-check-circle text-indigo-600 mr-2"></i>,
    },
    {
      title: "Industry-Specific Formats",
      description:
        "Choose from templates specifically designed for your industry, highlighting the skills and experiences that matter most.",
      icon: <i className="fas fa-check-circle text-indigo-600 mr-2"></i>,
    },
    {
      title: "Expert Review",
      description:
        "Get your resume reviewed by industry professionals who can provide personalized feedback and suggestions.",
      icon: <i className="fas fa-check-circle text-indigo-600 mr-2"></i>,
    },
    {
      title: "Keyword Optimization",
      description:
        "Our AI-powered tool helps you optimize your resume with industry-specific keywords to increase your chances of getting noticed.",
      icon: <i className="fas fa-check-circle text-indigo-600 mr-2"></i>,
    },
    {
      title: "Easy-to-Use Builder",
      description:
        "Our intuitive drag-and-drop interface makes it easy to create a professional resume in minutes.",
      icon: <i className="fas fa-check-circle text-indigo-600 mr-2"></i>,
    },
    {
      title: "Multiple Format Export",
      description:
        "Export your resume in multiple formats (PDF, DOCX, TXT) to ensure compatibility with any application system.",
      icon: <i className="fas fa-check-circle text-indigo-600 mr-2"></i>,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/ResumeWriting_Neomaster.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/60"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-white font-medium">
                  Professional Resume Builder
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Create Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">
                  Perfect Resume
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                Create professional, ATS-friendly resumes with our expert tools
                and templates tailored to your industry. Stand out from the
                competition and land your dream job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#pricing"
                  className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition shadow-lg cursor-pointer whitespace-nowrap inline-block text-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our resume building service offers everything you need to create a
              professional, eye-catching resume that gets results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  {feature.icon}
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50" id="how-it-works">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creating a professional resume has never been easier. Follow these
              simple steps to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Choose a Template
              </h3>
              <p className="text-gray-600">
                Browse our library of industry-specific templates and select the
                one that best fits your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fill in Your Details
              </h3>
              <p className="text-gray-600">
                Use our intuitive editor to add your personal information, work
                experience, education, and skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Download & Apply
              </h3>
              <p className="text-gray-600">
                Export your finished resume in your preferred format and start
                applying for jobs with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4" id="pricing">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your needs and budget. All plans
              include access to our resume builder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">Perfect for beginners</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $9.99
                <span className="text-lg text-gray-600 font-normal">
                  /month
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>5 Resume Templates</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>PDF Export</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Basic ATS Optimization</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-times mr-2"></i>
                  <span>Expert Review</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-times mr-2"></i>
                  <span>Cover Letter Builder</span>
                </li>
              </ul>
              <Link
                href="#"
                className="block w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition text-center"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-indigo-600 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Professional
              </h3>
              <p className="text-gray-600 mb-6">For serious job seekers</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $19.99
                <span className="text-lg text-gray-600 font-normal">
                  /month
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>20 Resume Templates</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>All Export Formats</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Advanced ATS Optimization</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>1 Expert Review/month</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Cover Letter Builder</span>
                </li>
              </ul>
              <Link
                href="#"
                className="block w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition text-center"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 mb-6">For career professionals</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $29.99
                <span className="text-lg text-gray-600 font-normal">
                  /month
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>All Resume Templates</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>All Export Formats</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Premium ATS Optimization</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Unlimited Expert Reviews</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Cover Letter & LinkedIn Profile</span>
                </li>
              </ul>
              <Link
                href="#"
                className="block w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our resume building service has helped job seekers land
              their dream jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "After using GrowUp's resume builder, I received calls for
                interviews within a week. The templates are professional and the
                ATS optimization really works!"
              </p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The expert review service was invaluable. They helped me
                highlight my technical skills in a way that caught the attention
                of top tech companies."
              </p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Emily Rodriguez</h4>
                  <p className="text-gray-600 text-sm">
                    Healthcare Professional
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "As someone switching careers, I was struggling to showcase my
                transferable skills. GrowUp's resume builder helped me create a
                resume that landed me my dream job in a new industry."
              </p>
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your Professional Resume?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers
            with our resume building service.
          </p>
          <Link
            href="#"
            className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition shadow-lg cursor-pointer whitespace-nowrap inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
