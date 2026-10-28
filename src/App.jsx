import './App.css'
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useRef, useState } from 'react';
import {
  FaWindows,
  FaMicrosoft
} from "react-icons/fa";
import { SiLinux } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { Award, BookOpen, GraduationCap } from "lucide-react";





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

const careerTimeline = [
  {
    date: "October 2026",
    title: "Cloud Certification & Portfolio Development",
    organisation: "Personal Development",
    description:
      "Earned Microsoft Azure Fundamentals (AZ-900) certification and developed a React/Vite portfolio website hosted on GitHub Pages.",
    technologies: ["AZ-900", "React", "Vite", "GitHub Pages"],
  },
  {
    date: "2025 – 2026",
    title: "Professional Development & Career Transition",
    organisation: "Independent Learning",
    description:
      "Following redundancy, spent approximately 12 months pursuing technical opportunities and interviews, completing CKA udemy course training to maintain Linux and develop new skills through lab environments.",
    technologies: ["Kubernetes", "CKA Training", "Linux", "Vagrant"],
  },
  {
    date: "January 2022 – November 2024",
    title: "System Engineer",
    organisation: "Microsoft / Nuance",
    description:
      "Supported 1,000+ Windows/Linux servers across enterprise environments, resolved 200+ critical incidents, led 100+ deployments and patching sessions, and coordinated major incident bridges with DevOps teams and stakeholders.",
    technologies: ["Azure AKS", "Linux", "Kubernetes", "Grafana", "PagerDuty"],
  },
  {
    date: "2019 – 2021",
    title: "Desktop Engineer",
    organisation: "City, University of London",
    description:
      "Delivered technical support to students and staff, managed SCCM imaging, resolved ServiceNow tickets, configured VPN access and troubleshot hardware and software issues.",
    technologies: ["SCCM", "ServiceNow", "VPN", "Windows"],
  },
  {
    date: "2019",
    title: "IT Support",
    organisation: "PC World",
    description:
      "Configured customer devices, installed software, performed data backups and transfers, and resolved hardware and software issues.",
    technologies: ["Hardware", "Windows", "macOS"],
  },
];

function App() {

  const [navbarVisible, setNavbarVisible] = useState(
  () => window.scrollY > 100
);

useEffect(() => {
  const handleScroll = () => {
    setNavbarVisible(window.scrollY > 100);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const [contactFormState, handleContactSubmit] = useForm('mzedqwwy');
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

      <header className={`navbar ${navbarVisible ? '' : 'navbar-hidden'}`}>

<nav className="navbar-links">
  <a href="#home" className="navbar-top">
  <span>↑</span>
</a>
  <a href="#aboutme">About Me</a>
  <a href="#projects">Projects</a>
  <a href="#recommendations">Recommendations</a>
  <a href="#skills">Skills</a>
  <a href="#experience">Experience</a>
  <a href="#contact">Contact</a>
</nav>

      </header>

      <main>
        <section id="home" className="introduction-section">
          <div className="introduction-content">
            <div className="introduction-label">
              <span className="introduction-status-dot"></span>
              SYSTEMS ENGINEER · CLOUD · SUPPORT
            </div>

            <h1>
              Hi, I'm Sultan.
              <br />
              I have a passion for supporting IT infrastructure
              <br />
              <span>Here's my portfolio.</span>
            </h1>
            <p>
              Systems Engineer focused on cloud infrastructure,
              monitoring and supporting production environments.
            </p>

            <div className="introduction-actions">
              <a href="#aboutme" className="introduction-button secondary">
                About Me
              </a>
              <a href="#projects" className="introduction-button primary">
                View My Projects
              </a>
            </div>
          </div>
        </section>

<section id="aboutme" className="about-section">
  <div className="about-container">

    <div className="about-heading">
      <div className="about-label">
        <span className="about-dot"></span>
        A LITTLE ABOUT ME
      </div>

      <h2>
        The person behind
        <br />
        the infrastructure.
      </h2>
    </div>

    <div className="about-description">
      <p>
        I'm a Systems Engineer with experience supporting
        mission-critical production environments at Microsoft.
        My work spans cloud infrastructure, Linux and Windows
        systems, Kubernetes, monitoring and incident management.
      </p>

      <p>
        I have experience in 1st, 2nd and 3rd line support roles and I am looking to further develop my career in supporting cloud infrastructure.
      </p>

      <a  className="about-link" 
          href="https://www.linkedin.com/in/sultan-m-84479114b/"
          target="_blank"
          rel="noreferrer"      
      >
        Explore my experience
        <span aria-hidden="true">↗</span>
      </a>
    </div>

  </div>
</section>


<section id="projects" className="projects-section">
  <div className="projects-container">
    <div className="projects-title">
      <span className="projects-eyebrow">
        <span className="projects-dot"></span>
        PROJECTS
      </span>

      <h1>
        Things I've<br />
        been building.
      </h1>

      <p>
        A selection of personal projects showcasing
        my skills and technical experience.
      </p>
    </div>

    <div className="projects-grid">

      {/* Portfolio Website */}
      <article className="project-card">
        <div className="project-image project-video">
        <video
          controls
          playsInline
          preload="metadata"
          src={`${import.meta.env.BASE_URL}videos/portfolio-demo.mp4`}
        />
        </div>

        <div className="project-info">
          <span className="project-status project-status-complete">
            Completed
          </span>

          <h2>Professional Portfolio Website</h2>

          <p>
            A responsive portfolio website built with React.js and Vite,
            showcasing modern frontend development and DevOps practices.
            Features automated deployment to GitHub Pages using GitHub
            Actions, Docker containerisation, and version control with Git.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Docker</span>
            <span>JavaScript</span>
            <span>Git</span>
            <span>GitHub Pages</span>
          </div>

          <a
            href="https://github.com/sultanGT/PortfolioSiteWithProjects"
            target="_blank"
            rel="noreferrer"
            className="project-button"
          >
            View on GitHub
          </a>
        </div>
      </article>

      {/* Linux Infrastructure Lab */}
      <article className="project-card project-card-wip">
<div className="project-image project-video">
  <video
    controls
    playsInline
    preload="metadata"
    src={`${import.meta.env.BASE_URL}videos/linux-demo.mp4`}
  />
</div>

        <div className="project-info">
          <span className="project-status project-status-wip">
            Work in Progress
          </span>

          <h2>Linux Server Monitoring & Automation</h2>

          <p>
            Building an Ubuntu Linux Server featuring Nginx
            web hosting, Bash-based health monitoring, automated systemd
            checks, incident simulation and logging.
          </p>

          <div className="project-tech">
            <span>Ubuntu Server</span>
            <span>Linux</span>
            <span>Bash Scripting</span>
            <span>Systemd Automation</span>
            <span>VirtualBox</span>
          </div>

          <a
            href="https://github.com/sultanGT/linux-infrastructure-lab"
            target="_blank"
            rel="noreferrer"
            className="project-button"
          >
            View on GitHub
          </a>
        </div>
      </article>

    </div>
  </div>
</section>


<section id="recommendations" className="recommendations-section">
<div className="recommendations-title">
  <div className="recommendations-eyebrow">
    <span className="recommendations-dot"></span>
    RECOMMENDATIONS · FEEDBACK · EXPERIENCE
  </div>

  <h2>
    What others say<br />
    about my work.
  </h2>

  <p>
    Feedback from people I've worked with at Microsoft.  
  </p>
    <a
  href="https://www.linkedin.com/in/sultan-m-84479114b/details/recommendations/"
  target="_blank"
  rel="noopener noreferrer"
  className="recommendations-link"
>
  View all recommendations <span aria-hidden="true">↗</span>
</a>
</div>

  <RecommendationCarousel />
</section>



<section id="skills" className="skills-section">
  <div className="skills-container">

    {/* LEFT SIDE — Heading and description */}
    <div className="skills-intro">
      <span className="skills-eyebrow">
        <span className="skills-dot"></span>
        SKILLS & TECHNOLOGIES
      </span>

      <h1>
        Technologies<br />
        I work with.
      </h1>

      <p>
        Tools and technologies I use to build, monitor
        and support modern infrastructure.
      </p>
    </div>

    {/* RIGHT SIDE — Technology cards */}
    <div className="skills-grid">

      <div className="skill">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
          alt="Azure"
          className="skill-icon"
        />
        <div className="skill-details">
          <h3>Azure</h3>
          <p>Infrastructure upgrading & patching, ALA logs, Azure Monitoring tools, RBAC & Active directory</p>
        </div>
      </div>

      <div className="skill">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
          alt="Kubernetes"
          className="skill-icon"
        />
        <div className="skill-details">
          <h3>Kubernetes</h3>
          <p>L1 support for prod clusters, ArgoCD patching, Harness CI/CD</p>
        </div>
      </div>

      <div className="skill">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg"
          alt="Grafana"
          className="skill-icon"
        />
        <div className="skill-details">
          <h3>Monitoring</h3>
          <p>Graphana monitoring for kubernetes clusters, Azure monitoring, Zenoss server management</p>
        </div>
      </div>

      <div className="skill">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
          alt="Linux"
          className="skill-icon"
        />
        <div className="skill-details">
          <h3>Linux</h3>
          <p>System patching, monitoring and troubleshooting</p>
        </div>
      </div>

      <div className="skill">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg"
          alt="Windows Server"
          className="skill-icon"
        />
        <div className="skill-details">
          <h3>Windows Server</h3>
          <p>System patching, monitoring and troubleshooting</p>
        </div>
      </div>

      <div className="skill">
        <img
          src="https://cdn.simpleicons.org/atlassian/0052CC"
          alt="Atlassian"
          className="skill-icon"
        />
        <div className="skill-details">
          <h3>ITSM</h3>
          <p>Jira, ServiceNow & Remedyforce</p>
        </div>
      </div>

    </div>
  </div>
</section>


<section id="experience" className="experience-section">
  <div className="experience-container">

    {/* LEFT COLUMN */}
    <div className="experience-left">
      <div className="experience-eyebrow">
        <span className="experience-eyebrow-dot" />
        CAREER JOURNEY
      </div>

      <h2>Experience &amp; professional growth.</h2>

      <p className="experience-intro">
        From supporting enterprise infrastructure to developing
        expertise in cloud technologies, Kubernetes and DevOps.
      </p>

      <div className="experience-left-divider" />

      <h3 className="experience-qualifications-heading">
        EDUCATION, CERTIFICATIONS &amp; TRAINING
      </h3>

      <div className="experience-qualifications">

        <div className="experience-qualification">
          <div className="experience-qualification-icon">
  <Award size={25} strokeWidth={2} />
</div>
          <div>
            <h4>Microsoft Azure Fundamentals</h4>
            <p>Microsoft Certified · AZ-900</p>
            <span>15 October 2026</span>
          </div>
        </div>

        <div className="experience-qualification">
          <div className="experience-qualification-icon">
            <div className="experience-qualification-icon">
  <img
    src="https://cdn.simpleicons.org/udemy/A435F0"
    alt="Udemy"
    className="experience-udemy-logo"
  />
</div>
  <BookOpen size={25} strokeWidth={2} />
</div>
          <div>
            <h4>Certified Kubernetes Administrator</h4>
            <p>CKA Udemy Course</p>
            <span>Course completed · 2026</span>
          </div>
        </div>

        <div className="experience-qualification">
          <div className="experience-qualification-icon">🎓</div>
          <div>
            <h4>BSc (Hons) Computer Science</h4>
            <p>City, University of London</p>
            <span>2:1 · Placement Year · July 2021</span>
          </div>
        </div>

      </div>

      <a href="#experience-timeline" className="experience-explore">
        Explore my experience ↗
      </a>
    </div>

    {/* RIGHT COLUMN */}
    <div id="experience-timeline" className="experience-timeline">
      {careerTimeline.map((item, index) => (
        <article className="experience-timeline-item" key={index}>
          <span
            className={`experience-timeline-dot ${
              index >= 3 ? "experience-timeline-dot-muted" : ""
            }`}
          />

          <div className="experience-timeline-content">
            <span className="experience-date">{item.date}</span>
            <h3>{item.title}</h3>
            <h4>{item.organisation}</h4>
            <p>{item.description}</p>

            <div className="experience-tags">
              {item.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>

  </div>
</section>



<section id="contact" className="contact-section">
  <div className="contact-container">

    {/* LEFT COLUMN */}
    <div className="contact-intro">
      <span className="contact-eyebrow">
        <span className="contact-dot"></span>
        CONTACT ME
      </span>

      <h1>
        Let's get<br />
        in touch.
      </h1>

      <p>
        Interested in discussing an
        opportunity or looking for someone
  with a strong technical background? Feel free to
  get in touch.
      </p>

      <div className="contact-links">
        <a href="mailto:sultan-malik@hotmail.co.uk">
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/sultan-m-84479114b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/sultanGT"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="contact-form-container">

      {contactFormState.succeeded ? (
        <div className="contact-success" role="status">
          <div className="contact-success-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m8 12 2.5 2.5L16 9" />
            </svg>
          </div>

          <h3>Message sent successfully!</h3>

          <p>
            Thank you for getting in touch.
            I'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleContactSubmit}
          className="contact-form"
          action="mailto:sultan-malik@hotmail.co.uk"
          method="POST"
          encType="text/plain"
        >

          {/* NAME AND EMAIL */}
          <div className="form-row">
            <div className="contact-field">
              <label htmlFor="contact-name">
              </label>

              <input
                id="contact-name"
                type="text"
                name="Name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">
              </label>

              <input
                id="contact-email"
                type="email"
                name="Email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* SUBJECT */}
          <div className="contact-field">
            <label htmlFor="contact-subject">
            </label>

            <input
              id="contact-subject"
              type="text"
              name="Subject"
              placeholder="What is this about?"
              required
            />
          </div>

          {/* MESSAGE */}
          <div className="contact-field">
            <label htmlFor="contact-message">
            </label>

            <textarea
              id="contact-message"
              name="Message"
              placeholder="Write your message here..."
              rows="7"
              required
            ></textarea>
          </div>

          {/* EXISTING VALIDATION ERRORS */}
          <ValidationError
            prefix="Email"
            field="email"
            errors={contactFormState.errors}
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={contactFormState.errors}
          />

          {/* EXISTING FORM ERROR MESSAGE */}
          {contactFormState.errors &&
            !contactFormState.succeeded &&
            contactFormState.errors.getFormErrors().length > 0 && (
              <p role="alert" className="contact-error">
                Your message could not be sent.
                Please try again.
              </p>
            )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="contact-submit-button"
            disabled={contactFormState.submitting}
          >
            {contactFormState.submitting
              ? "Sending..."
              : "Send Message"}
          </button>

        </form>
      )}

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