import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contact, Products, Gallery } from "../pages/";
import Navbar from "../components/Navbar";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
