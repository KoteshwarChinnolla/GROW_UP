  <div>
    {/* Hero Section */}
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/job-placements.jpg')",
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
                Career Development
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Dream{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">
                Job
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-8">
              Connect with top employers and find opportunities that match your
              skills and career goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> 