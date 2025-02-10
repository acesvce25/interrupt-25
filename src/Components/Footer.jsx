import "../Styles/footer.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../assets/interrupt-footer.png";
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <footer>
      <div className="footer-content">
        
        
        <div className="footer-left">
          <img className="logo" src={logo} alt="acelogo" />
        </div>

        
        <div className="footer-center">
          <div className="social-icons-center">
            <a
              href="https://www.instagram.com/acesvce?igsh=MWpxczdvM2s5Mnlhdg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/ace-svce/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a href="mailto:ace.csesvce23@gmail.com">
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
        

        
        <div className="footer-right">
          <div className="footer-section">
            <h3>Participate</h3>
            <ul>
              <li>
                <a className="footer-link" href="/events">Events</a>
              </li>
              <li>
                <a className="footer-link" href="/workshops">Workshops</a>
              </li>
              <li>
                <a className="footer-link" href="/home">Home</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Know More</h3>
            <ul>
              <li>
                <a className="footer-link" href="/sponsors">Sponsors</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} ACE, SVCE Sriperumbudur. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
