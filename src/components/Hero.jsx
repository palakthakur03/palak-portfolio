import "../styles/Hero.css";
import profile from "../assets/profile.jpg";
import resume from "../assets/Palak_Singh__Resume.pdf";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>Hello, I'm <span>Palak Singh</span></h1>
        <p>Software Developer | Python (Flask) | Frontend | UI/UX Enthusiast</p>

        <div className="hero-buttons">
          <a href="#contact" className="btn">Hire Me</a>
          <a href={resume} download className="resume-btn">Download Resume</a>
        </div>
      </div>

      <div className="hero-img">
        <img src={profile} alt="profile" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
