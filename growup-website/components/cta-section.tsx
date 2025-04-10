'use client';

export default function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Custom CSS for floating wave animation */}
      <style jsx>{`
        @keyframes wave-float {
          0% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-10px) scaleY(1.05); }
          100% { transform: translateY(0) scaleY(1); }
        }
        
        .wave-float-animate {
          animation: wave-float 6s ease-in-out infinite;
          transform-origin: center bottom;
        }
      `}</style>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
      
      {/* Water floating animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* First wave layer */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
            backgroundSize: '200% 100%'
          }}
        ></div>
        
        {/* Second wave layer - slightly offset for more depth */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
            backgroundSize: '200% 100%'
          }}
        ></div>
        
        {/* Floating wave animation - using SVG */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full">
            <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path 
                fill="rgba(255,255,255,0.1)" 
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="wave-float-animate"
              ></path>
              <path 
                fill="rgba(255,255,255,0.15)" 
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="wave-float-animate"
                style={{ animationDelay: '1s' }}
              ></path>
              <path 
                fill="rgba(255,255,255,0.2)" 
                d="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,234.7C672,224,768,224,864,229.3C960,235,1056,245,1152,245.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="wave-float-animate"
                style={{ animationDelay: '2s' }}
              ></path>
            </svg>
          </div>
        </div>
        
        {/* Additional floating wave layers for more depth */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full">
            <div className="absolute bottom-0 left-0 w-full h-16 bg-white opacity-10 rounded-t-[100%] wave-float-animate"></div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full">
            <div className="absolute bottom-0 left-0 w-full h-12 bg-white opacity-10 rounded-t-[100%] wave-float-animate" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-full">
            <div className="absolute bottom-0 left-0 w-full h-8 bg-white opacity-10 rounded-t-[100%] wave-float-animate" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Career Journey Today
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers
            with our comprehensive services.
          </p>
          <div className="mt-12 flex items-center justify-center gap-8 text-indigo-100">
            <div className="flex items-center">
              <span className="text-2xl mr-2">⭐</span>
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">👥</span>
              <span>15K+ Happy Clients</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🎯</span>
              <span>98% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
