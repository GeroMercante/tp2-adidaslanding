// Framework
import React, { useState } from "react";
// Dependencias de desarrollo
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
// Sonido
import useSound from "use-sound";
import Click from "../assets/sound/click.mp3";
// Imagenes y logos
import Logo from "../assets/images/logo.png";
import Argentina from "../assets/images/argentina.svg";
import { FaUserAlt, FaHeart, FaCartPlus } from "react-icons/fa";

// Componente navbar
const Navbar = () => {
  // estados
  const [navbar, setNavbar] = useState(false);
  const [play] = useSound(Click);

  // path
  const location = useLocation();
  const changePosition = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  // scroll navbar
  window.addEventListener("scroll", changePosition);
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <>
      <Container>
        <header className="header">
          <div className="social-media">
            <section className="data-contain">
              <span>
                <i>
                  <a href="#" onClick={play}>
                    ES <img src={Argentina} alt="Logo argentina" />
                  </a>
                </i>
              </span>
            </section>
            <section className="social-contain">
              <span>
                <a href="#f" rel="noreferrer">
                  <Link to="/login"><FaUserAlt /></Link>
                </a>
              </span>
              <span>
                <a href="#h" rel="noreferrer">
                  <FaHeart />
                </a>
              </span>
              <span>
                <a href="#h" rel="noreferrer">
                  <FaCartPlus />
                </a>
              </span>
            </section>
          </div>
        </header>
        <nav id={navbar ? "headerOut" : "header"}>
          <div className={navbar ? "topnav widthMax" : "topnav"} id="myTopnav">
            <div className="logo-container">
              <Link to="/">
                <img src={Logo} alt="Hotel N26" onClick={play} />
              </Link>
            </div>
            <motion.li whileTap={{ scale: 0.8 }}>
              <Link
                to="/"
                className={`${pathMathRoute("/") && "border-b"}`}
                onClick={play}
              >
                Home
              </Link>
            </motion.li>
            <motion.li whileTap={{ scale: 0.8 }}>
              <Link
                to="/productos"
                className={`${pathMathRoute("/productos") && "border-b"}`}
                onClick={play}
              >
                Productos
              </Link>
            </motion.li>
            <motion.li whileTap={{ scale: 0.8 }}>
              <Link
                to="/galeria"
                className={`${pathMathRoute("/galeria") && "border-b"}`}
                onClick={play}
              >
                Galería
              </Link>
            </motion.li>
            <motion.li whileTap={{ scale: 0.8 }} className="resize-navbar">
              <Link
                to="/contacto"
                className={`${pathMathRoute("/contacto") && "border-b"}`}
                onClick={play}
              >
                Contacto
              </Link>
            </motion.li>
          </div>
        </nav>
      </Container>
    </>
  );
};

const Container = styled.div`
  .header {
    width: 100%;
    height: 75px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    backdrop-filter: blur(1px);
    padding: 0rem 0;
    padding-bottom: 1rem;
    transition: 10s ease-in-out;
    z-index: 20;

    .social-media {
      width: 100%;
      text-align: center;
      display: flex;
      padding: 0.3rem 3rem;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 893px) {
        justify-content: center;
      }
    }
    .data-contain {
      margin: 0 17px;
      margin-left: 140px;
      font-family: "Poppins", sans-serif;
      transition: 150ms ease-in-out;
      span a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        gap: 0 10px;
        font-weight: bold;
        padding: 0 1rem;
        :hover {
          color: #ffe4a0;
        }
      }
    }
    .social-contain {
      margin: 0 17px;
      margin-right: 145px;
      span a {
        padding: 0 0.3rem;
        font-size: 27px;
        transition: 150ms;
        color: #000;
        :hover {
          color: #f0e800;
        }
      }
      @media screen and (max-width: 893px) {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 893px) {
    .header section:nth-child(1) {
      display: none;
    }
  }
  #header {
    position: fixed;
    top: 2.8rem;
    width: 100%;
    transition: 0.5s ease-in-out;
    z-index: 20;
    @media screen and (max-width: 1230px) {
      top: 3rem;
    }
  }
  .headerOut {
    top: 0%;
    transition: 0.5s ease-in-out;
  }
  .topnav {
    position: relative;
    z-index: 20;
    background-color: #fff;
    border: 1px solid #000;
    height: 90px;
    width: 80%;
    margin: auto;
    box-shadow: 0px 6px 16px -6px rgba(1, 1, 1, 0.4);
    transition: 0.5s ease-in-out;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3rem;
    @media screen and (max-width: 1330px) {
      height: 75px;
    }
  }
  .logo-container {
    width: 200px;
    height: 81px;
    position: absolute;
    z-index: 20;
    left: 1%;
    top: 50%;
    transform: translate(0, -50%);
    @media screen and (max-width: 1250px) {
      width: 110px;
      height: 110px;
    }
    @media screen and (max-width: 1150px) {
      transform: translate(-50%, -50%);
      width: 110px;
      height: 110px;
      left: 50%;
      top: 75px;
    }
  }
  .logo-container img {
    width: 100%;
    height: 100%;
    z-index: 20;
    object-fit: cover;
    cursor: pointer;
    @media screen and (max-width: 1330px) {
      display: block !important;
    }
  }
  .svg-contain {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 5%;
    gap: 0.5rem;
    padding: 6px 12px;
    border-radius: 50px;
    background: #ffe4a0;
  }
  .widthMax {
    width: 100%;
    position: fixed;
    border-radius: 0px;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.5s ease-in-out;
  }
  .topnav a {
    color: #000;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    top: 10px;
    transition: 150ms ease-in-out;
    text-transform: uppercase;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    width: fit-content;
    :hover {
      color: #fff;
      font-weight: bold;
    }
    @media screen and (max-width: 1330px) {
      font-size: 17px;
    }
  }

  .topnav li a {
    @media screen and (max-width: 1150px) {
      display: none;
    }
  }

  .resize-navbar {
    margin-right: 6rem;
  }
  .border-b {
    font-weight: bold;
    border-bottom: 2px solid #000;
    @media screen and (max-width: 939px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  #icon {
    float: right;
  }
  #active {
    display: flex;
  }
  #active img {
    width: 130px;
  }
  #active:hover {
    color: #fff;
  }
  .topnav .icon {
    display: none;
  }

  .navbar-responsive {
    display: none;
    @media screen and (max-width: 1150px) {
      display: block;
    }
  }

  .btn-nav {
    font-size: 22px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    left: 20px;
    top: 21px;
    svg {
      color: #fff;
      font-size: 30px;
      margin-right: 2rem;
    }
  }
  .box-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #a59e94;

    .ola-l-nav {
      position: absolute;
      bottom: 20px;
      width: 450px;
      height: 100px;
      right: -200px;
      z-index: 2;
    }
    .ola-r-nav {
      position: absolute;
      top: 20px;
      width: 450px;
      height: 100px;
      left: -100px;
      z-index: 2;
    }

    .close-navbar {
      position: absolute;
      top: 5%;
      right: 5%;
      background: transparent;
      color: #000;
      font-size: 35px;
      z-index: 999;
    }
    li {
      font-size: 30px;
      text-align: center;
      z-index: 9999;
      a {
        z-index: 9999;
      }
    }
  }
`;

export default Navbar;
