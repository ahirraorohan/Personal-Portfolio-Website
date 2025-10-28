import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";

export function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container id="home">
      <div className="hero-text">
        <div data-aos="fade-up">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h1>Rohan Ahirrao</h1>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <h3>Software Engineer</h3>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <p className="small-resume">1 Year Experience</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="800">
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </div>

        <div data-aos="fade-up" data-aos-delay="1000">
          <div className="social-media">
            <a
              href="https://linkedin.com/in/rohan-ahirrao24"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/ahirraorohan"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919403942640&text=Hello+Rohan+I+found+your+contact+through+portfolio+site.%0A%0A"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            {/* Uncomment if you want to include Telegram */}
            {/* <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </a> */}
          </div>
        </div>
      </div>

      <div className="hero-image" data-aos="fade-right" data-aos-delay="1000">
        <img src={Illustration} alt="Illustration" />
      </div>
    </Container>
  );
}
