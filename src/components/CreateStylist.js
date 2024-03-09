import React from "react";
import { Link } from "react-router-dom";
import "../styles/CreateService&Stylist.css";

const CreateStylist = () => {
  return (
    <div>
      <h2 className="link-back">
        <Link to={"/stylists"} className="link">
          Atrás
        </Link>
      </h2>
      <section className="form-new-info">
        <input type="text" placeholder="Nombre del Estilista" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Descripción del Estilista (Máximo 500 palabras)"
        ></textarea>
        <button className="load-button">
          <i className="fa-regular fa-images"></i>Cargar Imagen
        </button>
        <button className="save-button">Guardar</button>
      </section>
    </div>
  );
};

export default CreateStylist;
