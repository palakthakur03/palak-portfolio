import "../styles/About.css";

function About() {
  return (
    <section id="about" className="section about">
      <h2 className="title">About Me</h2>

      <p className="subtitle">
        I am Palak Singh, a passionate software developer focused on building
        clean, modern and responsive web applications using both frontend and backend technologies.
      </p>

      <div className="about-details">
        <h3>Education</h3>
        <p>BCA — Shri Ramswaroop Memorial College of Engineering and Management, Lucknow</p>

        <h3>Technologies I Know</h3>
        <p>HTML, CSS, JavaScript, React, Python (Flask), SQL, Git, UI/UX, Figma</p>

        <h3>What I'm Good At</h3>
        <p>UI Designing, Clean Code, Problem Solving, Responsive Layouts</p>

        <h3>Strengths</h3>
        <p>Quick Learner, Good Communication, Team Collaboration, Creativity</p>
      </div>
    </section>
  );
}

export default About;
