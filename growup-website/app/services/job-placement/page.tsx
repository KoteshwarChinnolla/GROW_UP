import Link from "next/link";

export default function JobPlacementPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://wolfcareers.com/wp-content/uploads/2021/12/job-placement-min.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/85 via-indigo-900/65 to-purple-900/75"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-8">
          <div className="max-w-3xl">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-6">
                <span className="text-indigo-600 font-medium">
                  Career Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Find Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">
                  Dream Job
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Connect with top employers and receive support throughout your
                job application process.
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
              Our Job Placement Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work closely with both job seekers and employers to ensure the
              right match, leading to successful, long-term employment
              relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Profile Creation
              </h3>
              <p className="text-gray-600 text-center">
                We start by understanding your skills, experience, career goals,
                and preferences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Job Matching
              </h3>
              <p className="text-gray-600 text-center">
                Our team identifies suitable job opportunities that align with
                your profile.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Application Support
              </h3>
              <p className="text-gray-600 text-center">
                We help you tailor your resume and prepare for interviews for
                specific positions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Interview Coordination
              </h3>
              <p className="text-gray-600 text-center">
                We schedule interviews with potential employers and provide
                feedback.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Offer Negotiation
              </h3>
              <p className="text-gray-600 text-center">
                We assist with salary and benefits negotiation to ensure you get
                the best possible offer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">6</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Onboarding Support
              </h3>
              <p className="text-gray-600 text-center">
                We provide guidance during the transition to your new role.
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
              Why Choose Our Job Placement Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on placements that lead to career growth and
              satisfaction.
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
                Access to jobs that aren't advertised on public job boards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Employer Relationships
                </h3>
              </div>
              <p className="text-gray-600">
                We have established relationships with top employers who trust
                our recommendations.
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
                We consider not just skills, but also company culture and work
                environment preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Comprehensive Support
                </h3>
              </div>
              <p className="text-gray-600">
                Guidance throughout the entire job search and hiring process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Long-term Success
                </h3>
              </div>
              <p className="text-gray-600">
                We focus on placements that lead to career growth and
                satisfaction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Salary Optimization
                </h3>
              </div>
              <p className="text-gray-600">
                We help you negotiate the best possible compensation package for
                your skills and experience.
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
              Ready to Find Your Next Career Opportunity?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              Create a profile to get started with our job placement service and
              connect with employers looking for candidates like you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
