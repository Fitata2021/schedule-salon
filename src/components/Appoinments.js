import React from "react";
import { Link } from "react-router-dom";
import "../styles/Appointments.css";

const Appoinments = () => {
  return (
    <div>
      <h2 className="link-home">
        <Link to={"/"} className="link">
          Inicio
        </Link>
      </h2>
      <table>
        <thead className="table-head">
          <tr>
            <th>Cliente</th>
            <th>Servicio</th>
            <th>Estilista</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>Alejandra Rodriguez</td>
            <td>Corte de Cabello</td>
            <td>Tatiana Silva</td>
            <td>06/03/2024</td>
            <td>9:00-10:00am</td>
            <td>Finalizado</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">Corte de cabello</option>
                <option value="2">Arreglo de barba</option>
                <option value="3">Tintura de cabello</option>
                <option value="3">Maquillaje</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">Tatiana Silva</option>
                <option value="2">Yesid Murcia</option>
                <option value="3">Vanessa Castillo</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">06/03/2024</option>
                <option value="2">07/03/2024</option>
                <option value="3">08/03/2024</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">9:00-10:00am</option>
                <option value="2">10:00-11:00am</option>
                <option value="3">11:00-12:00pm</option>
              </select>
            </td>
            <td>No Programado</td>
          </tr>
          <tr>
            <td>Camila Valencia</td>
            <td>Maquillaje</td>
            <td>Yesid Murcia</td>
            <td>06/03/2024</td>
            <td>9:00-10:00am</td>
            <td>Finalizado</td>
          </tr>
          <tr>
            <td>Carlos Restrepo</td>
            <td>Arreglo de Barba</td>
            <td>Tatiana Silva</td>
            <td>06/03/2024</td>
            <td>10:00-11:00am</td>
            <td>En Proceso</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">Corte de cabello</option>
                <option value="2">Arreglo de barba</option>
                <option value="3">Tintura de cabello</option>
                <option value="3">Maquillaje</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">Tatiana Silva</option>
                <option value="2">Yesid Murcia</option>
                <option value="3">Vanessa Castillo</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">06/03/2024</option>
                <option value="2">07/03/2024</option>
                <option value="3">08/03/2024</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">9:00-10:00am</option>
                <option value="2">10:00-11:00am</option>
                <option value="3">11:00-12:00pm</option>
              </select>
            </td>
            <td>Disponible</td>
          </tr>
          <tr>
            <td>Roberto Alvarez</td>
            <td>Corte de Cabello</td>
            <td>Vanessa Castillo</td>
            <td>06/03/2024</td>
            <td>12:00-1:00pm</td>
            <td>Pendiente</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">Corte de cabello</option>
                <option value="2">Arreglo de barba</option>
                <option value="3">Tintura de cabello</option>
                <option value="3">Maquillaje</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">Tatiana Silva</option>
                <option value="2">Yesid Murcia</option>
                <option value="3">Vanessa Castillo</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">06/03/2024</option>
                <option value="2">07/03/2024</option>
                <option value="3">08/03/2024</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">9:00-10:00am</option>
                <option value="2">10:00-11:00am</option>
                <option value="3">11:00-12:00pm</option>
              </select>
            </td>
            <td>No Programado</td>
          </tr>
          <tr>
            <td>Isabel Aguirre</td>
            <td>Corte de cabello</td>
            <td>Tatiana Silva</td>
            <td>06/03/2024</td>
            <td>2:00-3:00pm</td>
            <td>Pendiente</td>
          </tr>
          <tr>
            <td>Ramón Valdez</td>
            <td>Arreglo de Barba</td>
            <td>Yesid Murcia</td>
            <td>06/03/2024</td>
            <td>3:00-4:00pm</td>
            <td>Pendiente</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">Corte de cabello</option>
                <option value="2">Arreglo de barba</option>
                <option value="3">Tintura de cabello</option>
                <option value="3">Maquillaje</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">Tatiana Silva</option>
                <option value="2">Yesid Murcia</option>
                <option value="3">Vanessa Castillo</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">06/03/2024</option>
                <option value="2">07/03/2024</option>
                <option value="3">08/03/2024</option>
              </select>
            </td>
            <td>
              <select>
                <option value="1">Seleccionar</option>
                <option value="1">9:00-10:00am</option>
                <option value="2">10:00-11:00am</option>
                <option value="3">11:00-12:00pm</option>
              </select>
            </td>
            <td>Disponible</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Appoinments;
