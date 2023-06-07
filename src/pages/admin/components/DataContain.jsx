import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { db } from "../../../firebase/firebase.config";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { actions } from "../../../store";

function DataContain() {
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const obtenerNovedades = async () => {
      const novedadesRef = db.collection("novedades");
      const snapshot = await novedadesRef.get();
      const nuevasNovedades = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNovedades(nuevasNovedades);
    };
    obtenerNovedades();
  }, []);

  const handleDeleteNovedad = async (novedadId) => {
    try {
      const novedadRef = db.collection("novedades").doc(novedadId);
      await novedadRef.delete();
      setNovedades(novedades.filter((n) => n.id !== novedadId));
      toast.success("Articulo eliminado con éxito");
      actions.novedades.refreshPublicaciones();
    } catch (error) {
      console.error("Error al eliminar la novedad: ", error);
      toast.error("Error al eliminar articulo");
    }
  };

  const handleHabilitadoChange = async (novedadId, newValue) => {
    try {
      const novedadRef = db.collection("novedades").doc(novedadId);
      await novedadRef.update({
        habilitado: newValue,
      });
      setNovedades(
        novedades.map((n) =>
          n.id === novedadId ? { ...n, habilitado: newValue } : n
        )
      );
      toast.success("Visibilidad actualizada con éxito.");
      actions.novedades.refreshPublicaciones();
    } catch (error) {
      console.error("Error al actualizar habilitado: ", error);
      toast.error("Error al actualizar Visibilidad.");
    }
  };

  return (
    <Container>
      <DataBase>
        {novedades.map((novedad) => (
          <div key={novedad.id}>
            <div className="logo">
              <h2>titulo: {novedad.titulo}</h2>
              <h6>descripcion: {novedad.descripcion}</h6>
              <img src={novedad.imageURL} alt={novedad.titulo} />
              <h6>precio: {novedad.precio}</h6>
              <label>
                {novedad.habilitado === true ? (
                  <h3 className="novedadV visible">Producto visible (Stock)</h3>
                ) : (
                  <h3 className="novedadV novisible">Producto no visible</h3>
                )}
              </label>
              <h5 className="alter-v">Alterar visibilidad</h5>
              <select
                value={novedad.habilitado}
                onChange={(e) =>
                  handleHabilitadoChange(novedad.id, e.target.value === "true")
                }
                className="habilitado"
              >
                <option value={true}>Habilitado</option>
                <option value={false}>Deshabilitado</option>
              </select>
              <motion.button
                whileTap={{ scale: 0.5 }}
                onClick={() => handleDeleteNovedad(novedad.id)}
                className="btn-delete"
              >
                Eliminar publicación
                <MdDelete />
              </motion.button>
            </div>
          </div>
        ))}
      </DataBase>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 10rem;

  .logo {
    position: relative;
    margin: 35px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 11px;
    border-radius: 0 0 8px 8px;
    h2 {
      font-size: 20px;
      text-align: left;
      left: 2%;
    }
    img {
      width: 250px;
      height: 200px;
      object-fit: cover;
    }
    .btn-delete {
      color: #fff;
      background: #f00;
      padding: 7px 11px;
      display: flex;
      margin-top: 1rem;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;
      font-size: 17px;
      border: 1px solid #000;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

const DataBase = styled.div`
  width: 80%;
  height: auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  .alter-v {
    margin-top: 11px;
  }

  .habilitado {
    width: 170px;
    padding: 4px 7px;
    font-size: 19px;
  }

  label {
    color: #fff;
  }

  .novedadV {
    position: absolute;
    top: -22px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 11px;
    border-radius: 8px 8px 0 0;
    font-size: 15px;
  }

  .visible {
    background: green;
  }

  .novisible {
    background: grey;
  }
`;

export default DataContain;
