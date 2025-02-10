import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../../Styles/events.css";
import workshops from "../../data/workshop.json";
import { Link } from "react-router-dom";
import DetailedView from "../detailed_view/DetailedView";

const Workshop = () => {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <DetailedView type={'workshop'} />
  );
};

export default Workshop;
