import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerWithEmail } from "../redux/actions/register";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Registro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    dispatch(registerWithEmail({ displayName, email, password }));
    navigate("/login");
  };

  return (
    <Container>
      <BoxModal>
        <div className="container-form-main">
          <h3>Crear nueva cuenta</h3>
          <form onSubmit={handleEmailSignUp}>
            <label htmlFor="name">Nombre y apellido</label>
            <input
              type="text"
              id="name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="container-form">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {showPassword ? (
                <AiFillEyeInvisible
                  className="eye-password"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="eye-password"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>

            <button type="submit" className="btn-submit">
              Registrarse
            </button>
          </form>
          <h5>
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </h5>
        </div>
      </BoxModal>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxModal = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: #c4c4c4;
  .container-form-main {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    padding: 30px 40px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    box-shadow: 10px 10px 40px #000;
    h3 {
      font-size: 35px;
      font-weight: bold;
      font-family: "Poppins", sans-serif;
      font-style: italic;
      color: #fff;
      text-transform: uppercase;
      text-shadow: 1px 2px #000;
      border-bottom: 2px solid #fff;
    }

    h5 {
      font-size: 22px;
      margin-top: 1rem;
      color: #fff;
      text-shadow: 1px 2px #000;

      a {
        text-decoration: none;
        color: #000;
        border-bottom: 1px solid #000;
        text-shadow: 1px 2px #fff;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: left;
      label {
        margin-top: 7px;
        padding: 0;
        font-family: "Poppins", sans-serif;
        font-style: italic;
        font-size: 22px;
        text-align: left;
        width: 100%;
        color: #ffffff;
        text-shadow: 1px 2px #000;
        margin-bottom: 5px;
      }
      input {
        width: 100%;
        border: none;
        margin-bottom: 2rem;
        outline: none;
        font-size: 21px;
        padding: 7px 21px;
        background: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(1px);
        border-radius: 8px;
        color: #000;
        :focus {
          border-bottom: 2px solid #000;
        }
      }
      .container-form {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        .eye-password {
          position: absolute;
          bottom: 37px;
          right: 5px;
          cursor: pointer;
          font-size: 27px;
        }
      }
      .btn-submit {
        width: 100%;
        background: #67b066;
        color: #fff;
        text-shadow: 1px 2px #000;
        font-size: 21px;
        padding: 11px 23px;
        border-radius: 16px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 500ms;
        :hover {
          background: #427e41;
        }
      }
    }
  }
`;

export default Registro;
