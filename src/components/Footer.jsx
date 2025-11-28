import "../styles/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#hero" className="footer-logo">Palak<span>Singh</span></a>

        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/palak-singh-660b8a253/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/palakthakur03" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>

      <p className="footer-copy">© 2025 Palak Singh. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
