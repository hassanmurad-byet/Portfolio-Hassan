import React, { useState } from 'react';
import './experience.css';
import muradCV from '../../assets/Muradcv.pdf';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
    {
      id: 0,
      title: "JUNIOR SOFTWARE ENGINEER",
      company: "NAMESPACE IT",
      duration: "05/11/2024 – Current",
      location: "DHAKA, BANGLADESH",
      email: "info@namespaceit.com",
      website: "https://namespaceit.com/",
      description: "Designed and developed Django-based RESTful APIs, integrated them with responsive React/Next.js frontends, and implemented robust web and desktop automation using Selenium and PyAutoGUI to enhance productivity and reduce manual operations.",
      skills: ["FastAPI", "Django", "Numpy", "Selenium", "PyAutoGUI", "PyTorch", "TensorFlow", "React", "Next.js", "JavaScript", "SQL"]
    },
    {
      id: 1,
      title: "SOFTWARE DEVELOPER INTERNSHIP",
      company: "PIONEER ALPHA",
      duration: "20/05/2024 – 20/09/2024",
      location: "DHAKA, BANGLADESH",
      description: "Built a Django-based football league management software for ICFL, inspired by FIFA systems, enabling match scheduling, live score updates, team and player management, and detailed match event tracking with a structured and scalable backend.",
      skills: ["Django", "Python", "React", "Database Design", "REST APIs"]
    }
  ];

  const projects = [
    {
      title: "Windows Estimates Automation Project",
      highlights: [
        "Fixed backend bugs and implemented new features using Python and Django",
        "Built automation scripts with Selenium to streamline repetitive tasks",
        "Developed a desktop automation application using PyAutoGUI and Flask"
      ],
      skills: ["Python", "Django", "Selenium", "PyAutoGUI", "Flask", "AWS (EC2)", "Next.js", "Git"],
      link: "http://www.windowsestimates.com"
    },
    {
      title: "Aionlinecourse Web Project",
      highlights: [
        "Provides online AI training and practical AI tools",
        "Offers career guidance, coaching, and mentoring",
        "Designed to be user-friendly, scalable, and continuously updated"
      ],
      skills: ["Next.js", "React", "GraphQL", "Apollo Client", "Tailwind CSS", "Supabase", "Vercel", "GitHub"],
      link: "https://www.aionlinecourse.com/"
    },
    {
      title: "YouTube Summary Pro",
      highlights: [
        "Automatic YouTube video transcript generation",
        "Multi-language support and timestamp precision",
        "Integrated Google Gemini AI for intelligent summarization",
        "Secure authentication and RESTful API system"
      ],
      skills: ["Django", "Python", "Google Gemini 2.0", "Tailwind CSS", "JavaScript", "MySQL", "RESTful API"],
      link: "https://youtubesummarypro.com/"
    },
    {
      title: "AI Background Remover",
      highlights: [
        "Removes backgrounds from images using AI technology",
        "Handles up to 100 images at once",
        "User tracking system with visitor statistics",
        "API endpoints for easy integration"
      ],
      skills: ["Python", "Django", "OpenCV", "backgroundremover", "PostgreSQL", "Tailwind CSS", "JavaScript"],
      link: "https://bgremoverfree.com/"
    },
    {
      title: "PapersGraph - AI Research Paper Graph Visualization",
      highlights: [
        "FastAPI application with Qdrant vector database",
        "Efficient similarity searches and document retrieval",
        "CSV/JSON file upload with vector storage",
        "Structured graph data retrieval"
      ],
      skills: ["Python", "FastAPI", "Qdrant", "LangChain", "HuggingFace Transformers", "AWS", "Git"],
      link: "https://papersgraph.com/"
    },
    {
      title: "Deep Learning Driver Drowsiness Detection",
      highlights: [
        "CNN-based model for eye-state classification",
        "Real-time facial landmark detection",
        "Real-time alerting system with audio alarms",
        "Reduced false positives through temporal analysis"
      ],
      skills: ["Python", "Tensorflow", "Keras", "OpenCV", "Dlib", "NumPy", "Pandas", "SciPy"],
      link: "https://github.com/hassanmurad-byet/MLBased-Driver-Drowsiness-Detection-Alarming-System"
    },
    {
      title: "Django Based E-commerce Website",
      highlights: [
        "Full-featured e-commerce platform with authentication",
        "Product management and real-time inventory tracking",
        "Integrated shopping cart and payment gateway",
        "Admin dashboard for order processing"
      ],
      skills: ["Python", "Django", "HTML", "CSS", "Git"],
      link: "https://e-commerce-django.onrender.com/"
    }
  ];

  return (
    <section id='experience' className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Work Experience</h2>
        
        {/* Experience Toggle Buttons */}
        <div className="experience-buttons">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`exp-btn ${selectedExperience === index ? 'active' : ''}`}
              onClick={() => setSelectedExperience(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Experience Card */}
        <div className="experience-card-wrapper">
          <div className="experience-card">
            <h3 className="exp-title">{experiences[selectedExperience].title}</h3>
            <p className="exp-company">{experiences[selectedExperience].company}</p>
            <p className="exp-duration">📅 {experiences[selectedExperience].duration}</p>
            <p className="exp-location">📍 {experiences[selectedExperience].location}</p>
            {experiences[selectedExperience].email && (
              <p className="exp-email">📧 {experiences[selectedExperience].email}</p>
            )}
            {experiences[selectedExperience].website && (
              <p className="exp-website">🌐 <a href={experiences[selectedExperience].website} target="_blank" rel="noopener noreferrer">{experiences[selectedExperience].website}</a></p>
            )}
            <p className="exp-description">{experiences[selectedExperience].description}</p>
            <div className="exp-skills">
              {experiences[selectedExperience].skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* CV Download Section */}
        <div className="cv-download-section">
          <a href={muradCV} download="Murad_CV.pdf" className="cv-btn">
            📄 Download Full CV (PDF)
          </a>
        </div>

        {/* Projects Section */}
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3 className="project-title">➤ {project.title}</h3>
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>• {highlight}</li>
                ))}
              </ul>
              <div className="project-skills">
                {project.skills.map((skill, i) => (
                  <span key={i} className="project-skill-tag">{skill}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h2 className="education-title">Education</h2>
          <div className="education-card">
            <h3 className="edu-degree">Bachelor of Science in Computer Science and Engineering</h3>
            <p className="edu-university">IUBAT — International University of Business Agriculture and Technology</p>
            <p className="edu-details">📍 Dhaka, Bangladesh</p>
            <p className="edu-details">📅 01/01/2020 – 05/05/2025</p>
            <p className="edu-details">🎓 Final Grade: 3.17 / 4.00</p>
            <p className="edu-details">📚 Thesis: Deep Learning Based Driver Drowsiness Detection & Alarming System</p>
            <a href="https://iubat.edu" target="_blank" rel="noopener noreferrer" className="edu-website">
              Visit University Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
