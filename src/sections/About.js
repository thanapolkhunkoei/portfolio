import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/mypic.JPG";
import img2 from "../assets/Images/mypic2.jpg";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 90vw;
  overflow: hidden;
  display: flex;

  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90vw;
    display: grid;
    grid-template-columns: auto auto;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 74em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20;

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontmd};
    }
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
      width: 70%;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 80%;
    height: auto;
  }
  .small-img-1 {
    width: 60%;
    position: absolute;
    right: 80%;
    bottom: 35%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Me
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        <h1>My name is Thanapol Khunkoei</h1>
        <br />
        <br />
        Since beginning my journey as a developer, I have interest to create
        digital products for both business and consumer use. I'm quietly
        confident, naturally curious, and perpetually working on improving my
        chops one design problem at a time.
        <br />
        <br />
        I'm a Web Developer in Thailand. I have serious passion for UI effects,
        animations and creating intuitive, dynamic user experiences. Let's make
        something special.
      </Left>
      <Right>
        <img data-scroll data-scroll-speed="4" src={img1} alt="Me" />
      </Right>
    </Section>
  );
};

export default About;
