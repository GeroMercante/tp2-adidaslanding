import React from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className=""></div>
    </Container>
  );
};

const Container = styled(motion.footer)`
  height: 50vh;
  background: #000;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Footer;
