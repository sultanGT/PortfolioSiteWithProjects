import './App.css'

function App() {
  return (
    <>
      <div className="floating-social">
        <a href="https://www.linkedin.com/in/sultan-malik-84479114b/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="https://github.com/sultanGT" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <header className="navbar">
        <div className="brand">
          <h1>Sultan Malik</h1>
        </div>

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
            <h1>Welcome to my portfolio</h1>
            <h3>designed by Sultan Malik</h3>

            <a href="#aboutme" className="about-button">
              About
            </a>
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