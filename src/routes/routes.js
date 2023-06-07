// Framework & Redux
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  LOGIN,
  REFRESH_PUBLICACIONES,
  REFRESH_PUBLICACIONES_FAIL,
} from "../redux/types";
// Firebase Functions
import { getNovedades } from "../firebase/firebaseFunctions";
// Librerias
import { motion } from "framer-motion";
import { styled } from "styled-components";
// Vistas
import Layout from "../hocs/Layout";
import { Home, Contact, Products, Gallery } from "../pages/";
import AdminRoute from "./AdminRoute";
import Admin from "../pages/admin/Admin";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
// Loader
import LoadingIo from "../assets/laoder.svg";

const AppRoutes = () => {
  const [loader, setLoader] = useState(true);
  const [novedades, setNovedades] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchNovedades() {
      const novedadesData = await getNovedades();
      setNovedades(novedadesData);
    }
    fetchNovedades();
  }, []);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    if (storedAuth) {
      dispatch({
        type: LOGIN,
        payload: storedAuth,
      });
    }
  }, [dispatch]);

  const novedadesHabilitadas = novedades.filter(
    (novedad) => novedad.habilitado
  );

  if (novedadesHabilitadas.length > 0) {
    dispatch({ type: REFRESH_PUBLICACIONES });
  } else {
    dispatch({ type: REFRESH_PUBLICACIONES_FAIL });
  }

  const Loader = () => {
    return (
      <Container>
        <div className="container-loader">
          <h2 className="title">
            Sitio sin fines de lucro, el mismo persigue metas acádemicas.
          </h2>
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
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              {/* Rutas protegidas */}
              <Route path="/admin" element={<AdminRoute />}>
                <Route path="/admin" element={<Admin />} />
              </Route>
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
