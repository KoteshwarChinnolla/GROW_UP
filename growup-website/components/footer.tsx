import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">GrowUp</h3>
            <p className="text-gray-400 mb-6">
              Empowering professionals to achieve their career goals through comprehensive development services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/resume-builder"
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Resume Building
                </Link>
              </li>
              <li>
                <Link
                  href="/services/career-guidance"
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link href="/services/internships" className="text-gray-400 hover:text-white transition cursor-pointer">
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/services/online-courses"
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Online Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mock-interviews"
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Mock Interviews
                </Link>
              </li>
              <li>
                <Link
                  href="/services/job-placement"
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  Job Placement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-indigo-400"></i>
                <span className="text-gray-400">1016, 10th floor , DSL abacus IT park ,
                 Uppal , Hyderabad , 500039, India</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-indigo-400"></i>
                <span className="text-gray-400">+91 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-indigo-400"></i>
                <span className="text-gray-400">admin@anasolconsultancyservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 GrowUp. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 cursor-pointer">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 cursor-pointer">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

