import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login, logout } from "../redux/actions/login";

import { motion } from "framer-motion";

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user && user.isAdmin;
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Container>
        <div className="form-container">
          {!user && (
            <>
              <h1>Iniciar sesión</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <motion.button type="submit" whileTap={{ scale: 0.8 }}>
                  Iniciar sesión
                </motion.button>
                <div className="line"></div>
              </form>
              <p className="redirect">
                ¿No tienes una cuenta? <Link to="/registro">Registrarse</Link>
              </p>
            </>
          )}
          {user && (
            <>
              <div className="user-login">
                <h3>Sesión iniciada con éxito</h3>
                {isAdmin && (
                  <Link to="/admin" className="btn-admin">
                    Perfil Administrador
                  </Link>
                )}
                <button className="btn-logout" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #72727272;

  .user-login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .redirect {
    position: absolute;
    bottom: 10px;
    color: #fff;
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    a {
      color: #000;
      text-shadow: 1px 2px #fff;
      border-bottom: 3px solid #000;
    }
  }

  .btn-admin {
    color: #fff;
    width: 90%;
    margin-top: 1rem;
    font-size: 18px;
    border-radius: 8px;
    padding: 11px 35px;
    border: none;
    outline: none;
    text-align: center;
    cursor: pointer;
    background: #67b066;
    backdrop-filter: blur(16px);
    :hover {
      background: #4a8c48;
    }
  }

  .btn-logout {
    background: #f00;
    color: #fff;
    width: 90%;
    margin-top: 1rem;
    font-size: 21px;
    border-radius: 8px;
    padding: 11px 35px;
    border: none;
    outline: none;
    cursor: pointer;
    :hover {
      background: #790000;
    }
  }

  .form-container {
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(16px);
    border-radius: 16px;
    position: relative;
    padding: 11px 27px;

    h1 {
      position: absolute;
      left: 5%;
      top: 5%;
      font-size: 33px;
      text-transform: uppercase;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 5rem;
      text-align: left;
      width: 90%;
      gap: 1rem;
      label {
        font-size: 21px;
        text-transform: uppercase;
        text-align: left;
        font-weight: 600;
        width: 100%;
      }
      input {
        width: 100%;
        font-size: 21px;
        padding: 11px 4px;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(1px);
        outline: none;
        border: none;
        border-radius: 8px;
        :focus {
          outline: 2px solid #777777;
        }
      }
      button {
        background: #67b066;
        color: #fff;
        width: 100%;
        font-size: 21px;
        border-radius: 8px;
        padding: 11px 35px;
        margin-top: 1rem;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 0.5s;
        :hover {
          background: #4a8c48;
        }
      }

      .line {
        height: 2px;
        width: 100%;
        background-color: #777777;
        margin-top: 20px 0;
      }
    }
  }
`;

export default Login;
