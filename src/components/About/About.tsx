import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "./styles";
import RohanAhirrao from "../../assets/RohanAhirrao.png";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Container id="about">
      <div className="about-text">
        <h2 data-aos="fade-left">About me</h2>

        <p data-aos="fade-left" data-aos-delay="100">
          Hi there! I'm Rohan, a passionate Software Engineer skilled in
          frontend and full-stack web development. I specialize in building
          responsive, user-friendly web applications using technologies like
          React.js, Node.js, and Java.
        </p>

        <p
          data-aos="fade-left"
          data-aos-delay="200"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          I enjoy developing dynamic interfaces, integrating APIs, and ensuring
          seamless performance across devices. Along with that, I have hands-on
          experience with backend development, database management, and version
          control tools.
        </p>

        <div className="education" data-aos="fade-left" data-aos-delay="400">
          <h3>Education:</h3>
          <h4>Bachelor of Technology (B.Tech)</h4>
          <p>SSVPS’s BSDCOE, DHULE | Dec 2020 - June 2024</p>
          <p>8.95 CGPA</p>
        </div>

        <div className="experience" data-aos="fade-left" data-aos-delay="550">
          <h3>Experience:</h3>
          <h4>Software Developer</h4>
          <p>Numetry Technology | Jan 2024 - Present</p>
          <p>Pune, India</p>
        </div>

        <h3 data-aos="fade-left" data-aos-delay="600">
          Here are my main skills:
        </h3>

        <div className="hard-skills">
          <div className="hability" data-aos="fade-up" data-aos-delay="100">
            <img src={java} alt="java" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="120">
            <img src={jsIcon} alt="JavaScript" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="130">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="140">
            <img src={typescriptIcon} alt="Typescript" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="150">
            <img src={vueIcon} alt="Vue" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="160">
            <img src={wordpress} alt="Wordpress" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="170">
            <img src={shopify} alt="Shopify" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="180">
            <img src={htmlIcon} alt="Html" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="190">
            <img src={cssIcon} alt="Css" />
          </div>
          <div className="hability" data-aos="fade-up" data-aos-delay="200">
            <img src={boostrapIcon} alt="Bootstrap" />
          </div>
        </div>
      </div>

      <div className="about-image" data-aos="fade-right" data-aos-delay="210">
        <img src={RohanAhirrao} alt="Rohan Ahirrao" />
      </div>
    </Container>
  );
}
