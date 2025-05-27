import React from "react";
import "../styles/HeroSection.css";
import BifuLogo from "../images/BifuLogo.jpg";
import BifuVideo from "../videos/BifuVideo.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container position-relative overflow-hidden text-center d-flex flex-column justify-content-center align-items-center">
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={BifuVideo} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="hero-content position-relative">
        <img src={BifuLogo} alt="BIFŪ logo" className="bifu-logo" />
        <p className="hero-phrase">
          "Solo muere quien se olvida y siempre brindamos por vos"
        </p>
        <a href="#musica" className="btn btn-outline-light mt-4 hero-button">
          Escuchanos acá!
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
