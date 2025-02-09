import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Interrupt from "../assets/interrupt-footer.png";
import Countdown from "./Countdown";
import FuturisticButton from "../Components/FuturisticButton";
import { FaCalendarAlt, FaWrench, FaHandshake, FaImages } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();

  return (
    <div className="homepage-container" id="home">
        <img src={Interrupt} alt="about interrupt" className="large-logo" data-aos="zoom-in" />
      <div className="content">
        <h3 data-aos='fade-left'>The Annual Technical Fest of ACE</h3>
        <p data-aos='fade-right'>Sri Venkateswara College of Engineering</p>{" "}
      </div>
      <div className="event-dates">
        <p data-aos='flip-left'>21st February 2025</p>
      </div>

      <div className="button-container">
        <div className="big-button-group">
          <FuturisticButton
            text="Events"
            icon={<FaCalendarAlt />}
            onClick={() => navigate("/events")}
            className="big-btn"
          />{" "}
        </div>
        <div className="big-button-group">
          <FuturisticButton
            text="Workshops"
            icon={<FaWrench />}
            onClick={() => navigate("/workshop")}
          />
        </div>
      </div>
      {<Countdown />}
      {<About />}
      {<Footer />}
    </div>
  );
}
