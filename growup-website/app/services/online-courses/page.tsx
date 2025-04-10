import Link from "next/link";

export default function OnlineCoursesPage() {
  const courses = [
    {
      title: "Technical Interview Preparation",
      category: "Career Development",
      level: "Intermediate",
      duration: "4 weeks",
      rating: "4.8/5",
      icon: "🎯",
    },
    {
      title: "Leadership Skills for New Managers",
      category: "Professional Skills",
      level: "Beginner",
      duration: "6 weeks",
      rating: "4.9/5",
      icon: "👥",
    },
    {
      title: "Data Analysis Fundamentals",
      category: "Technical Skills",
      level: "Beginner",
      duration: "8 weeks",
      rating: "4.7/5",
      icon: "📊",
    },
    {
      title: "Digital Marketing Mastery",
      category: "Marketing",
      level: "Intermediate",
      duration: "5 weeks",
      rating: "4.6/5",
      icon: "📱",
    },
    {
      title: "Project Management Professional",
      category: "Professional Skills",
      level: "Advanced",
      duration: "10 weeks",
      rating: "4.9/5",
      icon: "📋",
    },
  ];

  const categories = [
    {
      name: "Technical Skills",
      description: "Programming, data analysis, cybersecurity, and more",
      icon: "💻",
    },
    {
      name: "Professional Skills",
      description:
        "Leadership, communication, project management, and negotiation",
      icon: "👔",
    },
    {
      name: "Career Development",
      description: "Interview preparation, personal branding, and networking",
      icon: "📈",
    },
    {
      name: "Industry-Specific",
      description:
        "Specialized courses for healthcare, finance, marketing, and other fields",
      icon: "🏢",
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
            backgroundImage: "url('/image.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
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
                Learn New{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">
                  Skills
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
                Access high-quality online courses to enhance your skills and
                advance your career.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="py-20 px-4 bg-white" id="featured-courses">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most popular courses designed to help you advance your career
              and develop in-demand skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">{course.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {course.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {course.category}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {course.level}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-2">
                    <span>★★★★★</span>
                  </div>
                  <span className="text-gray-700 text-sm">{course.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Categories Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of course categories designed to meet
              your professional development needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-center">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Online Courses?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our courses are designed to provide you with practical,
              job-relevant skills that you can apply immediately in your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Expert Instructors
              </h3>
              <p className="text-gray-600 text-center">
                Learn from industry professionals with years of real-world
                experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Flexible Learning
              </h3>
              <p className="text-gray-600 text-center">
                Study at your own pace with 24/7 access to course materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📜</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Recognized Certificates
              </h3>
              <p className="text-gray-600 text-center">
                Earn certificates that demonstrate your skills to potential
                employers.
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
              Ready to Enhance Your Skills?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              Browse our full course catalog and start learning today with a
              7-day free trial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
