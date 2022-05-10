import React from "react";
import styled from "styled-components";
import { Blogs } from "../data/BlogData";
import BlogComponent from "../components/BlogComponent";
import { motion } from "framer-motion";

const Section = styled.section`
  display: flex;
  /* grid-template-columns: 5% 95%; */
  width: 100vw;
  height: auto;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 100;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  height: 50%;
  gap: 2rem;
  padding: 15px;
  @media only screen and (max-width: 1200px) {
    font-size: calc(1.2rem + 0.4vw);
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 900px) {
    font-size: calc(1.2rem + 0.4vw);
    grid-template-columns: auto;
  }
`;

// const Text = styled.h1`
//   display: flex;
//   font-size: ${(props) => props.theme.fontxl};
//   color: ${(props) => props.theme.body};
//   justify-content: flex-start;
//   align-items: center;
//   width: 100%;
//   position: absolute;
//   top: 10px;
//   left: 2%;
// `;

function Projects() {
  return (
    <>
      <Section id="project">
        {/* <Text>My Project</Text> */}
        <Grid
        // data-scroll
        // data-scroll-direction="vertical"
        // data-scroll-speed="-1"
        // data-srcoll-target="#up"
        >
          {Blogs.map((blog) => {
            return <BlogComponent key={blog.id} blog={blog} />;
          })}
        </Grid>
      </Section>
    </>
  );
}

export default Projects;
