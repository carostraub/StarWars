import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, uid, imageUrl, category }) => {
  const navigate = useNavigate();

  return (
    <div className="row">
      <div className="col-md-6 m-auto mb-4">
        <div className="card">
          {/* Imagen del personaje, planeta o vehículo */}
          <img className="imgCard" src={imageUrl} alt={name} />

          {/* Título con el nombre */}
          <h2>{name}</h2>

          {/* Botón que redirige a los detalles, ahora con `category` */}
          <button className="botonCard" onClick={() => navigate(`/single/${category}/${uid}`)}>
            Saber más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
