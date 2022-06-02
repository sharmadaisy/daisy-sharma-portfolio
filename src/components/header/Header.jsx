import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Me from "../../assets/me1.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Daisy Sharma</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />

        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt="" />
            </div>
          </div>
          <div className="about__content">
            <p>Currently promoted to POWER PROGRAMMER role at Infosys.</p>
            <p>
              " I am constantly striving to learn new technologies and look ways to
               better myself in this rapidly changing industry. "
            </p>
          </div>
        </div>

        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          {" "}
          SCROLL DOWN
        </a>
      </div>
    </header>
  );
};

export default Header;
