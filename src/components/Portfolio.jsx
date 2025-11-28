import "../styles/Portfolio.css";
import p1 from "../assets/project1.jpg";

function Portfolio() {
  const projects = [
    {
      img: p1,
      title: "The Knowledge Hub (Library Management System)",
      desc: "A full web-based library management system built with Flask and a clean UI.",
      tech: "Python (Flask), HTML, CSS, JavaScript",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="portfolio" className="section portfolio">
      <h2 className="title">My Projects</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p className="project-text">{p.desc}</p>
            <p className="tech">{p.tech}</p>

            <div className="buttons">
              <a href={p.github} className="btn small">GitHub</a>
              <a href={p.demo} className="btn small">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
