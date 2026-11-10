import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Engineering (AI & ML)</h4>
                <h5>LTCE, University of Mumbai</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Third-year student specializing in Artificial Intelligence and
              Machine Learning. Passionate about intelligent software systems,
              neural networks, computer vision, and building end-to-end AI applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Smart India Hackathon (SIH)</h4>
                <h5>AI Recommendation Engine</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Researched and built an AI-based internship recommendation engine
              for SIH project preparation, matching student skills and interests
              with internship opportunities through content-based and collaborative filtering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML & Web Systems</h4>
                <h5>Git Help & Deepfake Detector</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered Git Help—an AI-powered GitHub repository analyzer with
              code explanation, vulnerability scanning, and Gemini API integration,
              alongside a deep learning project for deepfake media detection.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CS Fundamentals & Architecture</h4>
                <h5>Core Engineering Foundations</h5>
              </div>
              <h3>CORE</h3>
            </div>
            <p>
              In-depth understanding of Data Structures and Algorithms, OOP,
              Database Management Systems, Operating Systems, Computer Networks,
              Distributed Systems, SDLC, and Data Warehousing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
