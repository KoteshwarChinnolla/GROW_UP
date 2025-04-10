import Link from "next/link";

export default function InternshipsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/internship (1).jpeg')",
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
              <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-6">
                <span className="text-indigo-600 font-medium">
                  Career Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Find Your Perfect{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">
                  Internship
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Find perfect internship opportunities matched to your skills,
                interests, and career goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-4 bg-white" id="how-it-works">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Internship Service Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our internship placement service helps students and early-career
              professionals find valuable work experience opportunities that
              align with their career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Create Your Profile
              </h3>
              <p className="text-gray-600 text-center">
                Build a comprehensive profile highlighting your skills,
                interests, and career goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Get Matched
              </h3>
              <p className="text-gray-600 text-center">
                Our algorithm matches you with internships that align with your
                profile and preferences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Apply & Interview
              </h3>
              <p className="text-gray-600 text-center">
                Apply to matched opportunities and receive support throughout
                the interview process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Internship Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with leading companies across various industries to
              provide exclusive internship opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Exclusive Opportunities
                </h3>
              </div>
              <p className="text-gray-600">
                Access to internship opportunities not available elsewhere, with
                companies ranging from startups to Fortune 500s.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Personalized Matching
                </h3>
              </div>
              <p className="text-gray-600">
                Our algorithm matches you with internships based on your skills,
                interests, and career goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Application Support
                </h3>
              </div>
              <p className="text-gray-600">
                Get help with resume reviews, cover letter writing, and
                interview preparation to increase your chances of success.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mentorship</h3>
              </div>
              <p className="text-gray-600">
                Receive guidance from experienced professionals throughout your
                internship experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Career Growth
                </h3>
              </div>
              <p className="text-gray-600">
                Many of our internships lead to full-time job offers, helping
                you build a long-term career path.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Global Network
                </h3>
              </div>
              <p className="text-gray-600">
                Connect with companies and professionals worldwide, expanding
                your network and opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Available Internships Section */}
      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Internship Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our current internship openings and find the
              perfect opportunity for your career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Internship 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Software Development Engineer
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    Accenture
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Open
                </span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  <span>Remote / Bengaluru</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">⏰</span>
                  <span>3-6 months</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">💰</span>
                  <span>5 LPA</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Posted 2 days ago</span>
                <Link
                  href="https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-4653762-S1799647_en&title=Software+Development+Engineer" target="_blank"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Internship 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                  Lead Generation & Marketing Intern
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    E4 Software Services
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Open
                </span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  <span>Mumbai</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">⏰</span>
                  <span>6 months</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">💰</span>
                  <span>6 LPA</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Posted 1 week ago</span>
                <Link
                  href="https://www.naukri.com/job-listings-lead-generation-marketing-intern-e4-softwares-services-mumbai-0-to-1-years-020425013455?src=jobsearchDesk&sid=17440104005076474&xp=1&px=1&nignbevent_src=jobsearchDeskGNB"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium" target="_blank"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Internship 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Data Science Intern
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    Discover Dollar Technologies
                  </p>
                </div>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  Closing Soon
                </span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  <span>Full Time</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">⏰</span>
                  <span>3 months</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">💰</span>
                  <span>8 LPA</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Closing in 3 days</span>
                <Link
                  href="https://discoverdollar.keka.com/careers/jobdetails/73161" target="_blank"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Internship 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                  UI-UX Designer and UI-UX Intern
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    Equinox Tech Solutions
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Open
                </span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  <span>Bengaluru</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">⏰</span>
                  <span>3 months</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">💰</span>
                  <span>1.25-5 LPA</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Posted 5 days ago</span>
                <Link
                  href="https://www.naukri.com/job-listings-ui-ux-designer-and-ui-ux-intern-equinox-tech-solutions-bengaluru-0-to-3-years-280325008166?src=jobsearchDesk&sid=17440112883754419&xp=3&px=1&nignbevent_src=jobsearchDeskGNB"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium" target="_blank"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Internship 5 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                  Business Development Executive/Sales Executive
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    IndiaMART
                  </p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  Limited Spots
                </span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  <span>Mumbai</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">⏰</span>
                  <span>6-8 months</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">💰</span>
                  <span>4.25 LPA</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Posted 1 day ago</span>
                <Link
                  href="https://www.naukri.com/job-listings-business-development-executive-sales-executive-indiamart-mumbai-all-areas-0-to-3-years-010425003566?src=jobsearchDesk&sid=17440116640127923&xp=2&px=1&nignbevent_src=jobsearchDeskGNB" target="_blank"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://www.linkedin.com/jobs/" target="_blank"
              className="inline-flex items-center px-6 py-3 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-colors font-medium"
            >
              View All Internships
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Internship Journey?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              Create your profile today and get matched with internship
              opportunities that align with your career goals.
            </p>
            <Link
              href="/sign-up"
              className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              Create Your Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
