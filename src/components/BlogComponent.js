import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled(motion(NavLink))`
  width: calc(15rem + 10vw);
  text-decoration: none;
  background-size: cover;
  /* background-image: url("https://images.unsplash.com/photo-1533631273148-264f2ec26448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"); */
  height: 25rem;
  /* padding: 1rem; */
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.body};
  backdrop-filter: blur(2px);
  box-shadow: 2px 2px 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: calc(8px + 0.5vw);

  display: flex;
  flex-direction: column;
  z-index: 5;
  box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.9);
  /* border-radius: 40px; */
  transition: transform 0.2s;

  &:hover {
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    transition: all 0.9s ease;
    transform: scale(1.1);
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 100%;
  background-size: cover;
  /* border: 1px solid transparent; */
  background-position: center center;
  /* border-radius: 40px; */

  ${Box}:hover & {
    /* border: 1px solid ${(props) => props.theme.text}; */
    background-size: cover;
  }
`;
const Title = styled.h3`
  color: ${(props) => props.theme.text};
  padding: 0.5rem 0.5rem;
  padding-top: 1rem;
  font-family: "Sirin Stencil";
  font-weight: 300;
  border-bottom: 1px dashed ${(props) => props.theme.text};
  display: none;
  ${Box}:hover & {
    display: flex;
    /* border-bottom: 1px solid ${(props) => props.theme.body}; */
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0.5rem;
  color: ${(props) => props.theme.text};
  display: none;
  ${Box}:hover & {
    display: flex;
    /* border-bottom: 1px solid ${(props) => props.theme.body}; */
  }
`;
const Tag = styled.span`
  padding-right: 0.5rem;
  color: ${(props) => props.theme.text};
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const ButtonBox = styled.div`
  margin: 5px 0 5px;
  display: flex;
  justify-content: space-evenly;
  display: none;
  ${Box}:hover & {
    display: flex;
    /* border-bottom: 1px solid ${(props) => props.theme.body}; */
    a {
      width: 80%;
      justify-content: center;
    }
  }
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 5px 0 5px;
  /* border-radius: 30px; */
  border: 1px solid black;
  transition: transform 0.2s;
  background-color: white;
  color: black;

  cursor: pointer;

  :hover {
    transform: scale(1.2);
  }
`;

const BlogComponent = (props) => {
  const { name, tags, imgSrc, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" to={{ pathname: link }}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>

        <ButtonBox>
          {/* <Button>Demo</Button> */}
          {/* <a > */}
          <Button href={link} target="_blank">
            GitHub
          </Button>
          {/* </a> */}
        </ButtonBox>
      </Box>
    </Container>
  );
};

export default BlogComponent;
