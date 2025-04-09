export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[700px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://public.readdy.ai/ai/img_res/e3b3662cdf999f64737c73f99764c3db.jpg')",
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
                Career Development Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Accelerate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">
                Career Growth
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              Comprehensive career development services designed to help you
              achieve your professional goals and stand out in today's
              competitive job market.
            </p>
            <div className="pt-6">
              <a 
                href="#services" 
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:bg-indigo-50 transition-colors"
              >
                Explore Our Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}