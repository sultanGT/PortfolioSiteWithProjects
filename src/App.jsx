import './App.css'
import React, { useState } from 'react';

function RecommendationCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const recommendations = [
    {
      name: 'Gurpreet Singh Chana',
      role: 'Service Engineer 2 · Microsoft',
      text: `I had the pleasure of working closely with Sultan while serving as his Shift Lead on our team. During our time together, Sultan demonstrated a high level of professionalism, technical skill, and dedication as a Service Engineer. His role involved supporting and monitoring various systems, ensuring smooth operations, and swiftly addressing any issues that arose.

Sultan consistently showed a strong understanding of the systems we worked with and was quick to learn new processes or technologies. He was proactive in identifying potential problems before they escalated, and his troubleshooting skills were excellent. Even during high-pressure situations, Sultan remained calm, methodical, and solution-oriented.

In addition to his technical abilities, Sultan is a great team player. He is always willing to help others and collaborate on tasks that ensured the success of the entire shift. His positive attitude and willingness to take initiative made him an invaluable part of the team.

Sultan would be a great asset to any organization, and I highly recommend him for any position that requires strong technical expertise, reliability, and teamwork.`,
      linkedin: 'https://www.linkedin.com/in/gurpreet-singh-chana-47888224/'
    },
    {
      name: 'Przemek Sadowski',
      role: 'Service Engineer Manager · Microsoft',
      text: `I have the pleasure of working with Sultan, and I can confidently say he is an exceptional professional. Sultan consistently goes above and beyond, making valuable contributions to projects while driving process improvements. He has a strong ability to deliver results efficiently without compromising on quality. Sultan’s communication skills are outstanding, and he excels at building collaborative relationships with both colleagues and stakeholders. His expertise in Linux and DevOps is evident—he approaches complex challenges with confidence and consistently delivers high-quality solutions.`,
      linkedin: 'https://www.linkedin.com/in/przemek-sadowski-91002322/'
    },
    {
      name: 'Aroshana Haththotuwa',
      role: 'Global Service Engineering Manager · Microsoft',
      text: `I am delighted to recommend Sultan, a highly valued member of our Service Reliability Center (SRC) team. Sultan has played a pivotal role in supporting our high-profile UK sovereign clients on Microsoft/Nuance products such as IVR, NDEP, MIX, and Gatekeeper. His exceptional organizational skills and dedication have been instrumental in ensuring the seamless operation and reliability of these critical systems.

In addition to his SRC responsibilities, Sultan has excelled in the hybrid role of an Incident Manager during critical incident bridges. His ability to remain calm under pressure and coordinate effectively with various stakeholders has been crucial in resolving incidents swiftly and efficiently.

Sultan’s commitment to professional growth is truly commendable. He quickly upskilled his knowledge in Azure and Kubernetes, stepping into a senior position when our team underwent changes. His proactive approach and willingness to take on new challenges have made a significant impact on our team’s success.

Sultan is a reliable, knowledgeable, and dedicated professional who consistently goes above and beyond to deliver outstanding results. I have no doubt that he will continue to excel in any future endeavours and be a valuable asset to any team.`,
      linkedin: 'https://www.linkedin.com/in/aroshana-haththotuwa-42274059/'
    }
  ];

  const goToRecommendation = (index) => {
    setActiveIndex(index);
  };

  const getPosition = (index) => {
    const total = recommendations.length;
    const difference = (index - activeIndex + total) % total;

    if (difference === 0) return 'active';
    if (difference === 1) return 'right';
    return 'left';
  };

  return (
    <div className="recommendations-carousel">
      <div className="recommendation-track">

        {recommendations.map((recommendation, index) => {
          const position = getPosition(index);
          const isHovered = hoveredIndex === index;

          return (
            <article
              key={recommendation.name}
              className={`recommendation-card ${position}-card ${isHovered ? 'hovered-card' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                if (position !== 'active') {
                  goToRecommendation(index);
                }
              }}
            >
<div className="recommendation-person">
  <strong>{recommendation.name}</strong>
  <span>{recommendation.role}</span>
</div>

<p>{recommendation.text}</p>


            </article>
          );
        })}

      </div>
    </div>
  );
}

function App() {
  return (
    <>
<div className="floating-social">
  <a
    href="https://www.linkedin.com/in/sultanm-profile"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="social-link linkedin"
  >
    <span className="social-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 20.45H7.1V8.99H3.54v11.46z"
          fill="currentColor"
        />
      </svg>
    </span>

    <span className="social-name">LinkedIn</span>
  </a>

  <a
    href="https://github.com/sultanGT"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="social-link github"
  >
    <span className="social-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 .67a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.28c0 .32.22.69.83.57A12 12 0 0 0 12 .67z"
          fill="currentColor"
        />
      </svg>
    </span>

    <span className="social-name">GitHub</span>
  </a>
</div>

      <header className="navbar">
        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#aboutme">About me</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
<div className="hero-content">
  <div className="hero-eyebrow">
    SYSTEMS ENGINEER · CLOUD · DEVOPS
  </div>

  <h1>
    Welcome to my
    <span> portfolio</span>
  </h1>

  <p>
    Systems Engineer focused on cloud infrastructure,
    automation and reliable production environments.
  </p>

  <div className="hero-actions">
    <a href="#projects" className="hero-button primary">
      View My Projects
    </a>

    <a href="#aboutme" className="hero-button secondary">
      About Me
    </a>
  </div>
</div>
        </section>

<section id="projects" className="projects-section">
  <div className="projects-title">
    <h1>My Projects</h1>
    <p>Projects demonstrating my technical skills and development journey</p>
  </div>

  <div className="projects-grid">

    <article className="project-card">
      <div className="project-image">
        <div className="project-placeholder">
          REACT
        </div>
      </div>

      <div className="project-info">
        <h2>Professional Portfolio Website</h2>

        <p>
          A professional portfolio website rebuilt using React.js and Vite,
          with source control through Git and deployment using GitHub Pages.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>Vite</span>
          <span>JavaScript</span>
          <span>Git</span>
          <span>GitHub Pages</span>
        </div>

        <a
          href="https://github.com/sultanGT/sultanGT.github.io"
          target="_blank"
          rel="noreferrer"
          className="project-button"
        >
          View on GitHub
        </a>
      </div>
    </article>


    <article className="project-card">
      <div className="project-image">
        <div className="project-placeholder">
          DEVOPS
        </div>
      </div>

      <div className="project-info">
        <h2>Containerised Web Application</h2>

        <p>
          A DevOps project demonstrating containerisation, NGINX web serving,
          Docker image creation and deployment workflows.
        </p>

        <div className="project-tech">
          <span>Docker</span>
          <span>NGINX</span>
          <span>Linux</span>
          <span>Git</span>
        </div>

        <a
          href="https://github.com/sultanGT"
          target="_blank"
          rel="noreferrer"
          className="project-button"
        >
          View Projects
        </a>
      </div>
    </article>

  </div>
</section>


<section id="recommendations" className="recommendations-section">
  <div className="recommendations-title">
    <h1>Recommendations</h1>
    <p>What colleagues and managers say about working with me</p>
  </div>

  <RecommendationCarousel />
</section>

<section id="skills" className="skills-section">
  <div className="skills-title">
    <h1>My Expertise</h1>
    <p>Technologies and tools I work with</p>
  </div>

  <div className="skills-grid">
    <div className="skill">
      <div className="skill-icon">LINUX</div>
      <h3>Linux</h3>
      <p>Server administration, troubleshooting and production support.</p>
    </div>

    <div className="skill">
      <div className="skill-icon">WIN</div>
      <h3>Windows</h3>
      <p>Windows Server, Active Directory and enterprise troubleshooting.</p>
    </div>

    <div className="skill">
      <div className="skill-icon">AZ</div>
      <h3>Azure</h3>
      <p>Azure infrastructure, monitoring, AKS and cloud operations.</p>
    </div>

    <div className="skill">
      <div className="skill-icon">K8S</div>
      <h3>Kubernetes</h3>
      <p>Cluster and pod investigation, troubleshooting and operations.</p>
    </div>

    <div className="skill">
      <div className="skill-icon">DOCKER</div>
      <h3>Docker</h3>
      <p>Containerisation and deployment workflows.</p>
    </div>

    <div className="skill">
      <div className="skill-icon">GIT</div>
      <h3>Git</h3>
      <p>Source control, GitHub workflows and project versioning.</p>
    </div>
  </div>
</section>

<section id="aboutme" className="about-section">
  <div className="about-content">
    <div className="about-text">
      <h1>About Me</h1>

      <p>
        I am a Systems Engineer with 4+ years of experience supporting
        enterprise infrastructure, cloud platforms and production
        environments.
      </p>

      <p>
        My experience includes Microsoft Azure, Kubernetes, Linux, Windows
        Server, monitoring, incident management and infrastructure
        operations. I have worked in production environments where
        troubleshooting, system reliability and rapid incident response are
        critical.
      </p>

      <p>
        I am currently developing my skills further in DevOps, cloud
        engineering, automation and modern infrastructure technologies.
      </p>

      <div className="about-details">
        <div>
          <strong>Experience</strong>
          <span>4+ Years</span>
        </div>

        <div>
          <strong>Specialisation</strong>
          <span>Systems &amp; Cloud Engineering</span>
        </div>

        <div>
          <strong>Education</strong>
          <span>BSc (Hons) Computer Science</span>
        </div>
      </div>

      <a
        href="/cv.pdf"
        className="cv-button"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a>
    </div>
  </div>
</section>

<section id="contact" className="contact-section">
  <div className="contact-content">
    <div className="contact-title">
      <h1>Contact Me</h1>
      <p>
        Interested in working together or have a question? Get in touch.
      </p>
    </div>

    <form
      className="contact-form"
      action="mailto:sultan-malik@hotmail.co.uk"
      method="POST"
      encType="text/plain"
    >
      <div className="form-row">
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="Email"
          placeholder="Your Email"
          required
        />
      </div>

      <input
        type="text"
        name="Subject"
        placeholder="Subject"
        required
      />

      <textarea
        name="Message"
        placeholder="Your Message"
        rows="7"
        required
      ></textarea>

      <button type="submit">
        Send Message
      </button>
    </form>

    <div className="contact-links">
      <a
        href="mailto:sultan-malik@hotmail.co.uk"
      >
        Email
      </a>

      <a
        href="https://www.linkedin.com/in/sultan-m-84479114b/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/sultanGT"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
</section>
      </main>

      <footer>
        Copyright © 2026 Sultan Malik
      </footer>
    </>
  )
}

export default App