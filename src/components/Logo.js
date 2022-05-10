import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;

  a {
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 3rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    path {
      stroke: ${(props) => props.theme.text};
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding: 0.5rem;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: -5,

    transition: {
      duration: 2,
      delay: 2,
      ease: "easeInOut",
    },
  },
};

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

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
          />
        </svg>
        <Text variants={textVariants} initial="hidden" animate="visible">
          My Portfolio
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
