import Link from "next/link";

export default function MockInterviewsPage() {
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
                  Interview Preparation
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ace Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">
                  Next Interview
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Practice with realistic interview simulations and receive expert
                feedback to improve your performance.
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
              How Our Mock Interviews Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mock interview service provides realistic interview practice
              with industry professionals who can give you valuable feedback and
              insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Select Industry & Role
              </h3>
              <p className="text-gray-600 text-center">
                We'll match you with an interviewer who has experience in your
                field.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Schedule Session
              </h3>
              <p className="text-gray-600 text-center">
                Choose a time that works for you for a 45-60 minute interview
                session.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Complete Interview
              </h3>
              <p className="text-gray-600 text-center">
                Participate in a realistic interview simulation via video call.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Receive Feedback
              </h3>
              <p className="text-gray-600 text-center">
                Get detailed feedback on your performance and specific
                suggestions for improvement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Review Recording
              </h3>
              <p className="text-gray-600 text-center">
                Access a recording of your interview to review your performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interview Types Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interview Types We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the type of interview that best matches your needs and
              career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Behavioral Interviews
                </h3>
              </div>
              <p className="text-gray-600">
                Practice answering questions about your past experiences and how
                you handled specific situations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Technical Interviews
                </h3>
              </div>
              <p className="text-gray-600">
                Demonstrate your technical skills and problem-solving abilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Case Interviews
                </h3>
              </div>
              <p className="text-gray-600">
                Work through business cases and scenarios common in consulting
                and business roles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Panel Interviews
                </h3>
              </div>
              <p className="text-gray-600">
                Practice interviewing with multiple interviewers simultaneously.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🔥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Stress Interviews
                </h3>
              </div>
              <p className="text-gray-600">
                Learn to stay calm and composed under pressure.
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
              Ready to Improve Your Interview Skills?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              Schedule a mock interview with one of our industry professionals
              and get personalized feedback to help you ace your next interview.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
