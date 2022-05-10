import React from "react";
import styled, { keyframes } from "styled-components";
import react from "../assets/Images/react logo.png";
import html from "../assets/Images/HTML-5-01.png";
import css from "../assets/Images/CSS-3-01.png";
import javaS from "../assets/Images/Javascript-03.png";
import nodejs from "../assets/Images/Node-JS-01.png";
import mongo from "../assets/Images/mongodb-logo-vector.svg";
import mui from "../assets/Images/MATERIAL-UI.png";
import tailw from "../assets/Images/pngwing.com.png";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Text = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 10rem;
  left: -5%;
  z-index: 5;
  @media (max-width: 74em) {
    font-size: ${(props) => `calc(${props.theme.fontxxxl} - 5vw)`};
    top: 15%;
    left: 0;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Skill = styled.div`
  font-size: ${(props) => props.theme.fontlg};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  /* border-radius: 1rem; */
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  display: flex;

  align-items: center;
  justify-content: center;

  span {
    display: block;
    padding: 1rem 1rem;
  }

  img {
    width: 3rem;
    /* position: relative;
    right: 10px;
    top: -20px; */
    /* margin-right: 2rem; */
  }
`;

const float1 = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateX(-15px) translateX(-15px)}
  100% {transform: translateY(-10px)}
`;

const float2 = keyframes`
   0% {transform: translateX(-10px)}
  50% {transform: translateY(-15px) translateX(-15px)}
  100% {transform: translateX(-10px)}
`;

const float3 = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateY(-15px) translateX(-15px)}
  100% {transform: translateY(-10px)}
`;

const float4 = keyframes`
   0% {transform: translateX(-10px)}
  50% {transform: translateY(-15px) translateX(-15px)}
  100% {transform: translateX(-10px)}
`;

const float5 = keyframes`
   0% {transform: translateY(-10px)}
  50% {transform: translateY(-15px) translateX(-15px)}
  100% {transform: translateY(-10px)}
`;

const float6 = keyframes`
  0% {transform: translateX(-10px)}
  50% {transform: translateY(-15px) translateX(-15px)}
  100% {transform: translateX(-10px)}
`;

const float7 = keyframes`
  0% {transform: translateX(-5px)}
  50% {transform: translateY(-10px) translateX(-1px)}
  100% {transform: translateX(-5px)}
`;

const float8 = keyframes`
  0% {transform: translateX(-13px)}
  50% {transform: translateY(15px) translateX(-15px)}
  100% {transform: translateX(-13px)}
`;

const InBox1 = styled(Skill)`
  /* display: flex; */
  width: 70vw;
  background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") !important;
  animation: ${float1} 4s ease infinite;
`;
const InBox2 = styled(Skill)`
  /* display: flex; */
  width: 70vw;
  background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") !important;
  animation: ${float2} 4s ease infinite;
`;
const InBox3 = styled(Skill)`
  /* display: flex; */
  width: 70vw;
  background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") !important;
  animation: ${float3} 4s ease infinite;
`;
const InBox4 = styled(Skill)`
  /* display: flex; */
  width: 70vw;
  background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") !important;
  animation: ${float4} 4s ease infinite;
`;
const InBox5 = styled(Skill)`
  /* display: flex; */
  width: 70vw;
  background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") !important;
  animation: ${float5} 4s ease infinite;
`;
const InBox6 = styled(Skill)`
  /* display: flex; */
  width: 70vw;
  background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") !important;
  animation: ${float6} 4s ease infinite;
`;

const InBox7 = styled(Skill)`
  /* display: flex; */
  width: 70vw;
  background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") !important;
  animation: ${float6} 4s ease infinite;
`;

const InBox8 = styled(Skill)`
  /* display: flex; */
  width: 70vw;
  background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80") !important;
  animation: ${float6} 4s ease infinite;
`;

const Skills = () => {
  return (
    <Section id="skill">
      {/* <Text data-scroll data-scroll-speed="2" data-scroll-direction="vertical"> */}
      {/* My skills */}
      {/* </Text> */}
      <Container id="up">
        <Skill
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-1"
          data-srcoll-target="#up"
        >
          <InBox1>
            <img style={{ width: "4.5rem" }} src={html} alt="" />
            <span>html</span>
          </InBox1>
        </Skill>
        <Skill
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="3"
          data-srcoll-target="#up"
        >
          <InBox2>
            <img src={css} alt="" />
            <span>css</span>
          </InBox2>
        </Skill>
        <Skill
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-3"
          data-srcoll-target="#up"
        >
          <InBox3>
            <img src={javaS} alt="" />
            <span>javascript</span>
          </InBox3>
        </Skill>
        <Skill
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="8"
          data-srcoll-target="#up"
        >
          <InBox4>
            <img src={react} alt="" />
            <span>react</span>
          </InBox4>
        </Skill>
        <Skill
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-6"
          data-srcoll-target="#up"
        >
          <InBox5>
            <img src={nodejs} alt="" />
            <span>nodejs</span>
          </InBox5>
        </Skill>
        <Skill
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="5"
          data-srcoll-target="#up"
        >
          <InBox6>
            <img style={{ width: "7rem" }} src={mongo} alt="" />
            <span>mongoDB</span>
          </InBox6>
        </Skill>
        <Skill
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-1"
          data-srcoll-target="#up"
        >
          <InBox7>
            <img src={mui} alt="" />
            <span>mui</span>
          </InBox7>
        </Skill>
        <Skill
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="1"
          data-srcoll-target="#up"
        >
          <InBox8>
            <img style={{ width: "10rem" }} src={tailw} alt="" />
            <span>tailwind</span>
          </InBox8>
        </Skill>
      </Container>
    </Section>
  );
};

export default Skills;
