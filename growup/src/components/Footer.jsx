import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>GrowUp</h3>
            <p>
              Empowering professionals to achieve their career goals through
              comprehensive development services.
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Resume Building</a></li>
              <li><a href="#">Career Guidance</a></li>
              <li><a href="#">Internships</a></li>
              <li><a href="#">Online Courses</a></li>
              <li><a href="#">Mock Interviews</a></li>
              <li><a href="#">Job Placement</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> Hyderabad, 500001</li>
              <li><i className="fas fa-phone-alt"></i> +91 954816555</li>
              <li><i className="fas fa-envelope"></i> info@growup.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GrowUp. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
