import React, { useState } from "react";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../../firebase/firebase.config";
import { toast } from "react-toastify";
import { categories } from "./utils/data";
import { saveItem } from "../../../firebase/firebaseFunctions";
import styled from "styled-components";
import Loader from "./utils/Loader";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { actions } from "../../../store";

const CreadorComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [precio, setPrecio] = useState("");
  const [category, setCategory] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [habilitado, setHabilitado] = useState(false);

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        toast.error("Error al subir imagen: intenta de nuevo 🙇‍♀️!");
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          toast.success("Imagen cargada con éxito 😊!");
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      toast.success("¡Imagen borrada con éxito 😊!");
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (
        !title ||
        !description ||
        !imageAsset ||
        !precio ||
        !category
      ) {
        toast.error("¡Se requieren todos los datos solicitados 🙇‍♀️!");
      } else {
        const data = {
          id: `${Date.now()}`,
          titulo: title,
          imageURL: imageAsset,
          categoria: category,
          descripcion: description,
          precio: precio,
          habilitado: habilitado,
        };
        saveItem(data).then(() => {
          actions.novedades.refreshPublicaciones();
          setIsLoading(false);
          toast.success("Creado con éxito 😊!");
          clearData();
        });
      }
    } catch (error) {
      toast.error("Error al subir cambios, intenta de nuevo 🙇‍♀️!");
    }
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setDescription("");
    setCategory("");
    setPrecio("");
    setDescription("");
    setHabilitado(false);
  };

  return (
    <Container>
      <FormBox>
        <div className="input-contain-full">
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nombre del producto y/o conjunto"
            className="input-name"
          />
        </div>
        <div className="container-categories">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="input-categorias"
          >
            <option value="other" className="option-c">
              Seleccionar categoría
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="option-categoria"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="container-categories">
          <select
            className="input-categorias"
            placeholder="Habilitado"
            onChange={(e) => setHabilitado(e.target.value === "true")}
          >
            <option value="other" className="option-c">
              Visibilidad al público
            </option>
            <option className="option-categoria" value="true">
              Mostrar
            </option>
            <option className="option-categoria" value="false">
              Esconder
            </option>
          </select>
        </div>
        <div className="container-upload">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="label-upload">
                    <div className="div-upload">
                      <MdCloudUpload className="logo-upload" />
                      <p className="text-upload">Subir imagen</p>
                    </div>
                    <input
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="none-upload"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative-upload">
                    <img
                      src={imageAsset}
                      alt="subir imagen"
                      className="file-upload"
                    />
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={deleteImage}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="flex-inputs">
          <div className="grid-inputs">
            <input
              type="text"
              required
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Precio. Ej: $7.999 ARS"
            />
            <input
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descripción"
            />
          </div>
        </div>
        <button type="button" className="btn-uploadfiles" onClick={saveDetails}>
          Publicar producto
        </button>
      </FormBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(165, 158, 148, 0.4);
`;

const FormBox = styled.div`
  width: 950px;
  height: 760px;
  background: rgba(0,0,0,0.5);
  padding: 10px 20px;
  border-radius: 16px;
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;

  .input-contain-full {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    .input-name {
      width: 100%;
      font-size: 21px;
      outline: none;
      border: none;
      padding: 11px;
      border-radius: 8px;
      :focus {
        outline: 1px solid #000;
      }
    }
  }

  .container-categories {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    .input-categorias {
      width: 100%;
      margin-top: 1rem;
      font-size: 21px;
      padding: 11px;
      border-radius: 8px;
      border: none;
    }
  }

  .container-upload {
    width: 95%;
    height: 400px;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background: #fff;

    .label-upload {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .div-upload {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 40px;
        color: #676666;

        :hover {
          color: #3e3e3e;
        }
        .text-upload {
          font-size: 21px;
        }
      }

      .none-upload {
        width: 0;
        height: 0;
      }
    }

    .relative-upload {
      height: 100%;
      position: relative;

      .file-upload {
        width: 100%;
        height: 70%;
        margin: 20px 0;
        object-fit: cover;
      }
      .btn-delete {
        position: absolute;
        top: 15px;
        right: -10%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 11px;
        border-radius: 50%;
        background: #f00;
        font-size: 28px;
        cursor: pointer;
        outline: none;
        transition: 500ms;
        transition: all ease-in-out;
        :hover {
          color: #660707;
        }
      }
    }
  }

  .btn-uploadfiles {
    font-size: 21px;
    margin: 20px 0;
    border: none;
    outline: none;
    background: #f0e800;
    padding: 10px 22px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    right: 2%;
    bottom: 0;
    border-radius: 8px;
    transition: 500ms;
    :hover {
      background: #b0ac00;
    }
  }

  .flex-inputs {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    .grid-inputs {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      input {
        width: 90%;
        font-size: 21px;
        padding: 11px;
        border-radius: 8px;
        border: none;
        :nth-child(2) {
          width: 95%;
        }
      }
    }
  }
`;

export default CreadorComponent;
