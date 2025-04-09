import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import "../styles.css";
import bg from "../assets/bg.jpg";
import Chatbot from "../components/Chatbot";

const Home = () => {
  return (
    <div>
      <header
        className="hero"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 3D Background Shapes */}
        <div className="background-shapes">
          <div className="shape cube"></div>
          <div className="shape circle"></div>
          <div className="shape triangle"></div>
          <div className="shape star"></div>
        </div>

        {/* Hero Images */}
        <div className="hero-images-container">
          {[heroBg, image2, image3].map((img, idx) => (
            <div key={idx} className="image-wrapper pop-up">
              <img src={img} alt={`Hero ${idx + 1}`} className="hero-image" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content fade-in">
          <div
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                display: "inline-block",
                fontSize: "2rem",
              }}
            >
              GrowUp – Where Ambitions Turn Into Opportunities
            </h1>
          </div>
          <h3 style={{ color: "black" }}>
            Find your dream job or the perfect candidate in just a few clicks.
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              marginTop: "0.5rem",
              color: "black",
            }}
          >
            Grow faster. Hire smarter. Work better.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: "bold",
              marginTop: "1rem",
              color: "black",
              textAlign: "center",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Connecting talent with opportunity by browsing thousands of job listings
            from top companies. Connect with top employers and kickstart your career.
            Explore opportunities in IT and Non-IT. Apply with ease and track your job
            applications in real-time. Grow your skills with expert career advice and
            resources.
          </p>
        </div>
      </header>

      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "40px 20px",
          flexWrap: "wrap",
        }}
      >
        {/* Feature Card 1 */}
        <div className="feature-card">
          <h2>Features That Make Us Different</h2>
          <ul>
            <li>Smart Matching: Best-fit jobs based on skills.</li>
            <li>Fast Applications: Apply in seconds.</li>
            <li>Verified Employers: Trusted companies only.</li>
            <li>Real-Time Analytics: Data-driven hiring tools.</li>
          </ul>
        </div>

        {/* Feature Card 2 */}
        <div className="feature-card" style={{ background: "#e0f7fa" }}>
          <h3>For Job Seekers</h3>
          <ul>
            <li>Craft a standout profile to attract top companies.</li>
            <li>Get job alerts tailored to your interests.</li>
            <li>Explore roles including internships and remote jobs.</li>
            <li>Boost visibility on our Featured Talent Board.</li>
          </ul>
        </div>

        {/* Feature Card 3 */}
        <div className="feature-card" style={{ background: "#e8f5e9" }}>
          <h3>For Employers</h3>
          <ul>
            <li>Post jobs and manage applicants with ease.</li>
            <li>Filter talent by skills, experience, and location.</li>
            <li>Schedule interviews and chat with candidates.</li>
            <li>AI-powered recommendations for better hires.</li>
          </ul>
        </div>
      </div>

      {/* ✅ Chatbot Component at the Bottom */}
      <Chatbot />
    </div>
  );
};

export default Home;
