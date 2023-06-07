import React from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";

import {
  AiOutlineInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <div className="info-website">
        <div className="contact-data">
          <h3>INFO</h3>
          <a href="#">Precios</a>
          <a href="#">FAQ</a>
          <a href="#">Compras</a>
        </div>
        <div className="contact-data">
          <h3>RECURSOS</h3>
          <a href="#">Developer API</a>
          <a href="#">Blog</a>
          <a href="#">Herramientas</a>
        </div>
        <div className="contact-data">
          <h3>COMPANIA</h3>
          <a href="#">Sobre nosotros</a>
          <a href="#">Sustentabilidad</a>
          <a href="#">Terminos de servicio</a>
          <a href="#">Privacidad</a>
        </div>
      </div>
      <div className="newletters">
        <h3>Suscribete a nuestras últimas novedades</h3>
        <div className="box-newletters">
          <input
            type="email"
            className="email-n"
            required
            placeholder="email"
          />
          <button type="submit">Suscribirse</button>
        </div>
      </div>
      <div className="social">
        <h3>Siguenos en nuestras redes sociales</h3>
        <div className="redes">
          <a href="#">
            <AiOutlineInstagram />
          </a>
          <a href="#">
            <AiFillTwitterSquare />
          </a>
          <a href="#">
            <AiFillFacebook />
          </a>
          <a href="#">
            <AiFillYoutube />
          </a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled(motion.footer)`
  height: 30vh;
  background: #000;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .info-website {
    display: flex;
    gap: 0 40px;
    .contact-data {
      display: flex;
      flex-direction: column;
      gap: 5px 0;
      h3 {
        color: #fff;
        font-weight: bold;
        font-size: 22px;
      }
      a {
        color: #fff;
      }
      a:hover {
        color: #f0e800;
      }
    }
  }

  .newletters {
    display: flex;
    flex-direction: column;
    gap: 20px 0px;
    justify-content: center;
    align-items: center;
    h3 {
      color: #fff;
      font-size: 22px;
    }
    .box-newletters {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0px 20px;
      input {
        font-size: 22px;
        border: 2px solid #fff;
        background-color: #000;
        color: #fff;
        width: 155px;
        padding: 11px 7px;
        text-align: center;
      }
      button {
        font-size: 22px;
        border: 2px solid #fff;
        background-color: #fff;
        color: #000;
        width: 155px;
        padding: 11px 7px;
        text-align: center;
        cursor: pointer;
        transition: 400ms;
      }
      button:hover {
        background: #f0e800;
      }
    }
  }

  .social {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    align-items: center;
    justify-content: center;
    h3 {
      color: #fff;
      font-size: 22px;
    }
    .redes {
      display: flex;
      gap: 13px;
      a {
        color: #fff;
        font-size: 40px;
        cursor: pointer;
        transition: 400ms;
      }
      a:hover {
        color: #f0e800;
      }
    }
  }
`;

export default Footer;
