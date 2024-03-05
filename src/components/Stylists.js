import React from "react";
import { Link } from "react-router-dom";
import "../styles/Lists.css";
import estilista1 from "../images/stylists/Estilista1.jpg";
import estilista2 from "../images/stylists/Estilista2.jpg";
import estilista3 from "../images/stylists/Estilista3.jpg";

const Stylists = () => {
  return (
    <div>
      <h2 className="link-home">
        <Link to={"/"} className="link">
          Inicio
        </Link>
      </h2>
      <p className="create-option">
        <Link to="/create-stylist" className="link">
          Crear un nuevo estilista
        </Link>
      </p>
      <section className="objects-container">
        <article className="object-card">
          <img
            src={estilista1}
            className="object-image"
            alt="fotografia del estilista"
          />
          <h2>Tatiana Silva</h2>
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
              <Link to={"/create-stylist"} className="link">
                Editar
              </Link>
            </p>
          </div>
        </article>
        <article className="object-card">
          <img
            src={estilista2}
            className="object-image"
            alt="fotografia del estilista"
          />
          <h2>Yesid Murcia</h2>
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
            src={estilista3}
            className="object-image"
            alt="fotografia del estilista"
          />
          <h2>Vanessa Castillo</h2>
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

export default Stylists;
