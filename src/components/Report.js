import React from "react";
import { Link } from "react-router-dom";
import "../styles/Report.css";

const Report = () => {
  return (
    <div>
      <h2 className="link-home">
        <Link to={"/"} className="link">
          Inicio
        </Link>
        <section className="form-report">
          <div className="report-input">
            <p>Fecha Inicial</p>
            <input
              type="text"
              id="initial-date-input"
              placeholder="01/01/2024"
            />
            <i className="fa-regular fa-calendar-days"></i>
          </div>
          <div className="report-input">
            <p>Fecha Final</p>
            <input type="text" id="final-date-input" placeholder="01/01/2024" />
            <i className="fa-regular fa-calendar-days"></i>
          </div>
          <div className="report-input">
            <p>Estilista</p>
            <select>
              <option value="opcion1">Todos</option>
              <option value="opcion2">Tatiana Silva</option>
              <option value="opcion3">Yesid Murcia</option>
              <option value="opcion4">Vanessa Castillo</option>
            </select>
          </div>
          <div className="report-input">
            <p>Servicio</p>
            <select>
              <option value="opcion1">Todos</option>
              <option value="opcion2">Corte de cabello</option>
              <option value="opcion3">Arreglo de barba</option>
              <option value="opcion4">Tintura de cabello</option>
            </select>
          </div>
          <button className="generate-button">
            <i className="fa-solid fa-download"></i>Generar
          </button>
        </section>
      </h2>
    </div>
  );
};

export default Report;
