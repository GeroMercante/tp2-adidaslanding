import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contact, Products, Gallery } from "../pages/";
import Layout from "../hocs/Layout";
import { styled } from "styled-components";

import LoadingIo from "../assets/laoder.svg";
import { motion } from "framer-motion";

const AppRoutes = () => {
  const [loader, setLoader] = useState(true);

  const Loader = () => {
    return (
      <Container>
        <div className="container-loader">
          <h2 className="title">Cargando sitio...</h2>
          <img src={LoadingIo} alt="" />
          <p className="author">
            Created by <span>Gerónimo Mercante</span>
          </p>
        </div>
      </Container>
    );
  };

  setTimeout(() => {
    setLoader(false);
  }, 5000);

  return (
    <>
      <BrowserRouter>
        {loader && <Loader />}
        <Layout>
          <ContainerAnimated
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.2 }}
          >
            <Routes>
              <Route index element={<Home />} />
              <Route path="/galeria" element={<Gallery />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </ContainerAnimated>
        </Layout>
      </BrowserRouter>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background: #000;

  .container-loader {
    height: 100vh;
    width: 100%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
      color: #fff;
      margin-bottom: 2rem;
    }

    .author {
      color: #72727272;
      position: absolute;
      left: 3%;
      bottom: 5%;
      font-size: 28px;
    }
  }
`;

const ContainerAnimated = styled(motion.main)``;

export default AppRoutes;
