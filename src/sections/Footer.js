import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "../assets/Svgs/star_white_48dp.svg";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }
  h3 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: "Kaushan Script";

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;

  font-size: ${(props) => props.theme.fontlg};
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section id="contact">
      <LogoContainer>
        {/* <img data-scroll data-scroll-speed="2" src={Logo} alt="Wibe Studio" /> */}
        <h3 data-scroll data-scroll-speed="-1">
          Portfolio
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}>home</li>
          <li onClick={() => handleScroll(".about")}>about</li>
          <li onClick={() => handleScroll("#skill")}>Skills</li>
          <li onClick={() => handleScroll("#project")}>Project</li>
        </ul>
        <Bottom>
          <a
            href="#"
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            <GitHubIcon />
          </a>
          <a
            href="#"
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            <MailIcon />
          </a>
          <a
            href="#"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            <CallIcon />
            <p>0917755091</p>
          </a>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
