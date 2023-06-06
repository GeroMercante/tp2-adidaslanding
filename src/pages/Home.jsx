import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Banner from "../assets/images/home/BANNER-1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <div className="black">
          <div className="letrero">
            <h1>Colección especial</h1>
            <p>Un diseño atemporal que trasciende sus raíces.</p>
          </div>
          <button className="btn">
            <Link to="/galeria">VER MÁS</Link>
            <div className="line"></div>
          </button>
        </div>
      </Container>
      <Carrousel></Carrousel>
    </>
  );
};

const Container = styled.section`
  width: 100%;
  height: 93vh;
  background-image: url(${Banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid #000;

  .black {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 40px 0;
    justify-content: center;
    align-items: center;

    .letrero {
      width: 575px;
      height: 230px;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 11px 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        color: #fff;
        font-size: 45px;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
      }
      p {
        color: #fff;
        font-size: 22px;
        text-transform: uppercase;
        text-align: center;
        margin-top: 2rem;
        font-weight: bold;
      }
    }
    .btn {
      background: #f0e800;
      font-size: 30px;
      padding: 10px 22px;
      font-weight: bold;
      position: relative;
      z-index: 2;
      cursor: pointer;
      a {
        color: #000;
        transition: 0.5s;
      }
      .line {
        position: absolute;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background: transparent;
        top: 9px;
        left: 9px;
        z-index: -1;
        padding: 10px 22px;
        border: 3px solid #f0e800;
      }
    }
    .btn:hover {
      a {
        color: #fff;
      }
    }
  }
`;

const Carrousel = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default Home;
