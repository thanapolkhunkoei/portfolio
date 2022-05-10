import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  /* background-color: ${(props) => props.theme.body}; */
  color: ${(props) => props.theme.text};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  font-size: ${(props) => props.theme.fontxxl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
  h1 {
    font-family: "Kaushan Script";
    /* font-size: ${(props) => props.theme.fontBig}; */
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    svg text {
      text-transform: uppercase;
      animation: stroke 5s infinite alternate;
      stroke-width: 2;
      stroke: #365fa0;
      font-size: 20rem;
    }
    @keyframes stroke {
      0% {
        fill: rgba(72, 138, 20, 0);
        stroke: rgba(254, 295, 260, 1);
        stroke-dashoffset: 25%;
        stroke-dasharray: 0 50%;
        stroke-width: 2;
      }
      70% {
        fill: rgba(72, 138, 20, 0);
        stroke: rgba(254, 295, 260, 1);
      }
      80% {
        fill: rgba(72, 138, 20, 0);
        stroke: rgba(254, 295, 260, 1);
        stroke-width: 3;
      }
      100% {
        fill: rgba(255, 255, 255, 1);
        stroke: rgba(54, 95, 160, 0);
        stroke-dashoffset: -25%;
        stroke-dasharray: 50% 0;
        stroke-width: 0;
      }
    }
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Loading = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      animate={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 1,
        delay: 4,
        ease: "easeInOut",
      }}
    >
      <Title>
        <motion.h1
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          stroke="currentColor"
          stroke-width="2"
        >
          Welcome
          <svg viewBox="0 0 2320 300">
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              My Portfolio
            </text>
          </svg>
        </motion.h1>
      </Title>
    </Container>
  );
};

export default Loading;
