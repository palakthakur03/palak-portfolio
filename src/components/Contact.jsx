import "../styles/Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="title">Contact Me</h2>

      <p className="subtitle">Feel free to reach out!</p>

      <div className="contact-details">
        
        <p>
          <FaEnvelope className="icon" />
          <a href="mailto:palakthakur9672@gmail.com">palakthakur9672@gmail.com</a>
        </p>

        <p>
          <FaPhone className="icon" />
          +91 7275648881
        </p>

        <p>
          <a href="https://www.linkedin.com/in/palak-singh-660b8a253/" target="_blank">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </p>

        <p>
          <a href="https://github.com/palakthakur03" target="_blank">
            <FaGithub className="icon" /> GitHub
          </a>
        </p>

      </div>
    </section>
  );
}

export default Contact;
