import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
// Swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
// Sonido
import useSound from "use-sound";
import Click from "../assets/sound/click.mp3";
// Imagenes
import Banner from "../assets/images/home/BANNER-1.jpg";
import Boca from "../assets/images/home/boca.webp";
import EstiloAd from "../assets/images/home/estilo.webp";
import AdiClub from "../assets/images/home/adiclub.webp";

const Home = () => {
  const [play] = useSound(Click);
  return (
    <>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="black">
          <div className="letrero">
            <h1>Colección especial</h1>
            <p>Un diseño atemporal que trasciende tus raíces.</p>
          </div>
          <motion.button className="btn" whileTap={{ scale: 0.8 }}>
            <Link to="/galeria" onClick={play}>
              VER MÁS
            </Link>
            <div className="line"></div>
          </motion.button>
        </div>
      </Container>
      <Carrousel
        initial={{ x: "-300px" }}
        whileInView={{ x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >
        <div className="container-slide">
          <h2>TENDENCIAS</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            navigation={true}
            pagination={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Boca} alt="Boca" />
              <h3>Boca yo te amo</h3>
              <p>
                Un verdadero hincha vive la pasión por su equipo cada día, cada
                hora y en todo momento.
              </p>
              <motion.button className="btn" whileTap={{ scale: 0.8 }}>
                <Link to="/galeria" onClick={play}>
                  VER MÁS
                </Link>
                <div className="line"></div>
              </motion.button>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={EstiloAd} alt="Boca" />
              <h3>Adueñate de la ciudad con estilo y comodidad</h3>
              <p>
                Llegó el momento de recorrer la ciudad como nunca antes. Vestite
                bien, vestite de Adidas.
              </p>
              <motion.button className="btn" whileTap={{ scale: 0.8 }}>
                <Link to="/galeria" onClick={play}>
                  VER MÁS
                </Link>
                <div className="line"></div>
              </motion.button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={AdiClub} alt="Boca" />
              <h3>adiClub te lleva a Australia</h3>
              <p>
                Participá para vivir la gran final de la Copa Mundial Femenina
                de la FIFA 2023 con un acompañante
              </p>
              <motion.button className="btn" whileTap={{ scale: 0.8 }}>
                <Link to="/galeria" onClick={play}>
                  VER MÁS
                </Link>
                <div className="line"></div>
              </motion.button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Boca} alt="Boca" />
              <h3>Boca yo te amo</h3>
              <p>
                Un verdadero hincha vive la pasión por su equipo cada día, cada
                hora y en todo momento.
              </p>
              <motion.button className="btn" whileTap={{ scale: 0.8 }}>
                <Link to="/galeria" onClick={play}>
                  VER MÁS
                </Link>
                <div className="line"></div>
              </motion.button>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={EstiloAd} alt="Boca" />
              <h3>Adueñate de la ciudad con estilo y comodidad</h3>
              <p>
                Llegó el momento de recorrer la ciudad como nunca antes. Vestite
                bien, vestite de Adidas.
              </p>
              <motion.button className="btn" whileTap={{ scale: 0.8 }}>
                <Link to="/galeria" onClick={play}>
                  VER MÁS
                </Link>
                <div className="line"></div>
              </motion.button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={AdiClub} alt="Boca" />
              <h3>adiClub te lleva a Australia</h3>
              <p>
                Participá para vivir la gran final de la Copa Mundial Femenina
                de la FIFA 2023 con un acompañante
              </p>
              <motion.button className="btn" whileTap={{ scale: 0.8 }}>
                <Link to="/galeria" onClick={play}>
                  VER MÁS
                </Link>
                <div className="line"></div>
              </motion.button>
            </SwiperSlide>
          </Swiper>
        </div>
      </Carrousel>
    </>
  );
};

const Container = styled(motion.section)`
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

const Carrousel = styled(motion.section)`
  width: 100%;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container-slide {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h2 {
      font-size: 50px;
      margin-bottom: 2rem;
      font-weight: bold;
      font-family: "AdidasBold";
    }

    .swiper {
      width: 100%;
      height: 800px;

      .btn {
        background: #f0e800;
        font-size: 17px;
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

      .swiper-slide {
        h3 {
          width: 430px;
          font-size: 18px;
          font-weight: bold;
          margin: 11px 0;
        }
        p {
          width: 430px;
          margin-bottom: 11px;
        }
      }

      .swiper-slide img {
        height: 550px;
        width: 430px;
        object-fit: cover;
      }
    }
  }
`;

export default Home;
