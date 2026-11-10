import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    title: "Git Help",
    category: "AI Repository Analyzer",
    tools: "Python, React.js, Node.js, Express, MongoDB, FastAPI, Gemini API",
    description:
      "AI-driven platform that analyzes GitHub repositories for code quality, potential bugs, security vulnerabilities, and generates AI explanations.",
    image: "/images/placeholder.webp",
  },
  {
    num: "02",
    title: "Deepfake Detector",
    category: "Computer Vision & AI",
    tools: "Python, TensorFlow, Keras, OpenCV, Deep Learning, CNNs",
    description:
      "Deep learning and computer vision framework for detecting manipulated media and distinguishing authentic media from AI-generated deepfakes.",
    image: "/images/placeholder.webp",
  },
  {
    num: "03",
    title: "Internship Recommender",
    category: "AI Recommendation Engine",
    tools: "Python, Scikit-learn, Pandas, Content & Collaborative Filtering",
    description:
      "Intelligent recommendation engine matching students' skills and interests with internship opportunities, developed for Smart India Hackathon.",
    image: "/images/placeholder.webp",
  },
  {
    num: "04",
    title: "Club Management",
    category: "Full-Stack Web Dev",
    tools: "React.js, Node.js, Express.js, MongoDB, REST APIs",
    description:
      "Comprehensive management platform organizing college clubs, student participation, activity scheduling, and administrative operations.",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return;
      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tech Stack</h4>
                <p>{project.tools}</p>
                <h4 style={{ marginTop: "14px" }}>Overview</h4>
                <p>{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
