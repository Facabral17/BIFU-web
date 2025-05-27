import React, { useState } from "react";
import "../styles/AboutBand.css";
import BandPhoto from "../images/BandPhoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const AboutBand = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about-band-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">Sobre nosotros</h2>
        <div className="band-history mb-4 px-md-5">
          <p>
            Somos una banda de rock uruguaya con un gusto vehemente por el
            exceso de energía y la conexión con el público.
          </p>
          <p>
            Actualmente nos encontramos lanzando nuestro primer disco un single
            a la vez, podés encontrar nuestras canciones en todas las
            plataformas.
          </p>
          <p>
            ¿Ya nos seguís en Instagram?
          </p>
          <a
            href="https://www.instagram.com/bifubanda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-danger"
          >
            <FontAwesomeIcon icon={faInstagram} className="me-2" />
            Clickeame!
          </a>
        </div>

        <img
          src={BandPhoto}
          alt="Foto grupal de Bifú"
          className="band-photo mb-4"
        />

        <button
          className="btn btn-outline-dark mb-3"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "VER MENOS" : "NUESTRA HISTORIA"}
        </button>

        {showMore && (
          <div className="band-story px-md-5">
            <p>
              En plena pandemia, año 2019, y dado el confinamiento, Facu
              (guitarra y voz) encerrado en su cuarto se dedica a componer
              varias canciones que terminaría mostrando a Mathi (guitarra y
              coros) en juntadas casuales intentando escapar del encierro. Mathi
              se copa y comienzan a grabar maquetas.
            </p>
            <p>
              Años más tarde y ya fuera del confinamiento Facu une a Luks
              (batería) para comenzar a dar forma a los temas ahora en salas de
              ensayo. En el año 2025 y tras probar distintas formaciones con
              bajistas ocasionales deciden llamar a Pila (bajo) para que sea
              miembro estable en la banda.
            </p>
            <p>
              Un jueves por la noche en el bar Valentín, Facu y Pila deciden
              ponerle Bifú a la banda; una semana después y en la misma mesa
              donde se eligió el nombre nace la posibilidad de tener el toque
              debut al día siguiente en el bar Bachicha's de La Paz, donde Bifú
              se presenta sin Mathi dada la poca antelación, y teniendo un solo
              ensayo en su haber.
            </p>
            <p>
              Si bien el primer toque fue un éxito para la banda en cuanto
              convocatoria, apróximadamente un mes después se hace el debut
              oficial en el mismo lugar pero ahora sí con la formación completa.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutBand;
