import React from "react";
import { Link } from "react-router-dom";
import "../styles/Lists.css";
import servicio1 from "../images/services/Servicio1.jpg";
import servicio2 from "../images/services/Servicio2.jpg";
import servicio3 from "../images/services/Servicio3.jpg";

const Services = () => {
  return (
    <div>
      <h2 className="link-home">
        <Link to={"/"} className="link">
          Inicio
        </Link>
      </h2>
      <p className="create-option">
        <Link to="/create-service" className="link">
          Crear un nuevo servicio
        </Link>
      </p>
      <section className="objects-container">
        <article className="object-card">
          <img
            src={servicio1}
            className="object-image"
            alt="fotografia del servicio"
          />
          <h2>Corte de Cabello</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            quasi, adipisci fugit minus tenetur sint dolore corporis commodi
            quis reiciendis velit? Perspiciatis corporis consequuntur
            exercitationem necessitatibus accusamus, id fugiat laborum earum
            facere modi non aliquam velit laboriosam. Nesciunt ducimus odio quo
            hic vel dignissimos cupiditate doloribus delectus dolorum corrupti
            eos adipisci inventore praesentium quae libero alias exercitationem
            unde ratione ipsum ipsa, necessitatibus saepe? Nostrum ipsum qui
            impedit, laboriosam temporibus excepturi obcaecati repellat minus
            nulla labore eos perferendis accusantium consequuntur, autem libero
            aliquam explicabo aperiam architecto iste accusamus quam hic sed
            neque aspernatur? Quisquam suscipit non obcaecati quaerat? Dolores,
            aliquam voluptates?
          </p>
          <div className="card-buttons">
            <p>
              <Link className="link">Borrar</Link>
            </p>
            <p>
              <Link to={"/create-service"} className="link">
                Editar
              </Link>
            </p>
          </div>
        </article>
        <article className="object-card">
          <img
            src={servicio2}
            className="object-image"
            alt="fotografia del servicio"
          />
          <h2>Arreglo de Barba</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            quasi, adipisci fugit minus tenetur sint dolore corporis commodi
            quis reiciendis velit? Perspiciatis corporis consequuntur
            exercitationem necessitatibus accusamus, id fugiat laborum earum
            facere modi non aliquam velit laboriosam. Nesciunt ducimus odio quo
            hic vel dignissimos cupiditate doloribus delectus dolorum corrupti
            eos adipisci inventore praesentium quae libero alias exercitationem
            unde ratione ipsum ipsa, necessitatibus saepe? Nostrum ipsum qui
            impedit, laboriosam temporibus excepturi obcaecati repellat minus
            nulla labore eos perferendis accusantium consequuntur, autem libero
            aliquam explicabo aperiam architecto iste accusamus quam hic sed
            neque aspernatur? Quisquam suscipit non obcaecati quaerat? Dolores,
            aliquam voluptates?
          </p>
          <div className="card-buttons">
            <p>
              <Link className="link">Borrar</Link>
            </p>
            <p>
              <Link className="link">Editar</Link>
            </p>
          </div>
        </article>
        <article className="object-card">
          <img
            src={servicio3}
            className="object-image"
            alt="fotografia del servicio"
          />
          <h2>Tintura de Cabello</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            quasi, adipisci fugit minus tenetur sint dolore corporis commodi
            quis reiciendis velit? Perspiciatis corporis consequuntur
            exercitationem necessitatibus accusamus, id fugiat laborum earum
            facere modi non aliquam velit laboriosam. Nesciunt ducimus odio quo
            hic vel dignissimos cupiditate doloribus delectus dolorum corrupti
            eos adipisci inventore praesentium quae libero alias exercitationem
            unde ratione ipsum ipsa, necessitatibus saepe? Nostrum ipsum qui
            impedit, laboriosam temporibus excepturi obcaecati repellat minus
            nulla labore eos perferendis accusantium consequuntur, autem libero
            aliquam explicabo aperiam architecto iste accusamus quam hic sed
            neque aspernatur? Quisquam suscipit non obcaecati quaerat? Dolores,
            aliquam voluptates?
          </p>
          <div className="card-buttons">
            <p>
              <Link className="link">Borrar</Link>
            </p>
            <p>
              <Link className="link">Editar</Link>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Services;
