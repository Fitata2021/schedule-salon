import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="options-container">
        <div className="option-square" onClick={() => navigate("/appoinments")}>
          <i className="fa-regular fa-calendar-check"></i>
          <h3>Gestión de Citas</h3>
        </div>
        <div className="option-square" onClick={() => navigate("/stylists")}>
          <i className="fa-regular fa-user"></i>
          <h3>Nuestros Estilistas</h3>
        </div>
        <div className="option-square" onClick={() => navigate("/services")}>
          <i className="fa-solid fa-scissors"></i>
          <h3>Nuestros Servicios</h3>
        </div>
        <div className="option-square" onClick={() => navigate("/report")}>
          <i className="fa-solid fa-chart-simple"></i>
          <h3>Generar Reporte</h3>
        </div>
      </section>
    </div>
  );
};

export default Home;
