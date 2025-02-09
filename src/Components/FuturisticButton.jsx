import React from "react";
import "../Styles/button.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FuturisticButton = ({ text, icon, onClick }) => {
  return (
    <button className="futuristic-button" onClick={onClick}>
      <div className="button-content">
        <span className="button-icon" data-aos="flip-right">
          {icon}
        </span>
        <span className="button-text" data-aos="fade-left">
          {text}
        </span>
      </div>
    </button>
  );
};

export default FuturisticButton;
