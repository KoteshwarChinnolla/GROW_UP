import Link from "next/link";

export default function CareerGuidancePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://www.simplilearn.com/ice9/free_resources_article_thumb/millennials-advance-your-career-article.jpg')",
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
                  Professional Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Navigate Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">
                  Career Path
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Get personalized career advice from industry experts to help you
                navigate your professional journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="#how-it-works"
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/30 transition-colors shadow-lg hover:shadow-xl border border-white/30 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-4 bg-white" id="how-it-works">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Career Guidance Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our career guidance service connects you with experienced
              professionals who can provide personalized advice tailored to your
              specific career goals and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Initial Assessment
              </h3>
              <p className="text-gray-600 text-center">
                We evaluate your skills, experience, and career goals to
                understand your unique situation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Expert Matching
              </h3>
              <p className="text-gray-600 text-center">
                We connect you with industry experts who have experience in your
                field of interest.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Personalized Plan
              </h3>
              <p className="text-gray-600 text-center">
                Your advisor creates a customized career development plan
                tailored to your goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                One-on-One Sessions
              </h3>
              <p className="text-gray-600 text-center">
                Regular meetings with your advisor to discuss progress and
                address challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Resource Access
              </h3>
              <p className="text-gray-600 text-center">
                Get access to tools, templates, and resources to support your
                career journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">6</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Progress Tracking
              </h3>
              <p className="text-gray-600 text-center">
                Regular check-ins to monitor your progress and adjust the plan
                as needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Holistic Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that effective career guidance requires a comprehensive
              approach that considers all aspects of your professional life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Skills Assessment
                </h3>
              </div>
              <p className="text-gray-600">
                Comprehensive evaluation of your technical and soft skills to
                identify strengths and areas for development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Goal Setting
                </h3>
              </div>
              <p className="text-gray-600">
                Help you define clear, achievable career goals aligned with your
                interests and values.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Market Analysis
                </h3>
              </div>
              <p className="text-gray-600">
                Insights into industry trends, job market demands, and
                opportunities in your field of interest.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Action Planning
                </h3>
              </div>
              <p className="text-gray-600">
                Develop a step-by-step plan with actionable items to help you
                achieve your career goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Networking Support
                </h3>
              </div>
              <p className="text-gray-600">
                Guidance on building and leveraging your professional network to
                advance your career.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Continuous Growth
                </h3>
              </div>
              <p className="text-gray-600">
                Ongoing support and resources to help you continuously develop
                and advance in your career.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take the Next Step in Your Career?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              Schedule a free 15-minute consultation with one of our career
              advisors to learn how we can help you achieve your professional
              goals.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
