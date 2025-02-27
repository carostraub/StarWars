import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {
  const { category, theId } = useParams(); // Obtiene los parámetros de la URL
  const { dispatch } = useGlobalReducer();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const apiUrl = `https://www.swapi.tech/api/${category}/${theId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setItem(data.result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, [category, theId]);

  
  useEffect(() => {
    if (item && item.properties.imageUrl) {
      setImageUrl(item.properties.imageUrl); 
    }
  }, [item]);

  const addToFavorites = () => {
    dispatch({
      type: "ADD_FAVORITO",
      payload: {
        uid: theId,
        name: item.properties.name,
        category: category,
        imageUrl: item.properties.imageUrl, 
      },
    });
  };

  if (loading) return <p>Cargando información...</p>;
  if (!item) return <p>Error: No se encontró el elemento</p>;

  return (
    <div className="container text-center">
      <h1 className="display-4">{item.properties.name}</h1>
      <p>{item.description || "No hay descripción disponible."}</p>
      <div className="row mb-3">
        <div className="col-md-6">
          {/* 🔹 Ahora `imageUrl` viene desde `item.properties.imageUrl` */}
          <img src={imageUrl} alt={item.properties.name} style={{ width: "400px" }} />
        </div>
        <div id="listaCard" className="col-md-6">
          <ul>
            {category === "people" && (
              <>
                <li>Altura: {item.properties.height} cm</li>
                <li>Peso: {item.properties.mass} kg</li>
                <li>Color de cabello: {item.properties.hair_color}</li>
                <li>Color de piel: {item.properties.skin_color}</li>
                <li>Año de nacimiento: {item.properties.birth_year}</li>
              </>
            )}
            {category === "planets" && (
              <>
                <li>Clima: {item.properties.climate}</li>
                <li>Terreno: {item.properties.terrain}</li>
                <li>Diámetro: {item.properties.diameter} km</li>
                <li>Población: {item.properties.population}</li>
              </>
            )}
            {category === "vehicles" && (
              <>
                <li>Modelo: {item.properties.model}</li>
                <li>Fabricante: {item.properties.manufacturer}</li>
                <li>Velocidad máxima: {item.properties.max_atmosphering_speed}</li>
                <li>Capacidad de carga: {item.properties.cargo_capacity}</li>
              </>
            )}
          </ul>
          <button className="btn btn-light" onClick={addToFavorites}>
            <i id="estrella" className="fa-solid fa-star"></i> Agregar a Favoritos
          </button>
        </div>
      </div>

      <Link to="/">
        <span className="btn btn-primary btn-lg">Home</span>
      </Link>
    </div>
  );
};
