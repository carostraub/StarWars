import React, { useEffect, useState } from "react";
import Card from "../components/Card";

// La función addImageUrl y la constante imagenesPersonajes permiten usar imágenes desde distintos lugares (ej., Luke con uid 1)
const imagenesPersonajes = [
  {
    uid: "1",
    imageUrl: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Luke-Skywalker.Star-Wars-Series.webp"
  },
  {
    uid: "2",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/2.jpg?raw=true"
  },
  {
    uid: "3",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/3.jpg?raw=true"
  },
  {
    uid: "4",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/4.jpg?raw=true"
  },
  {
    uid: "5",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/5.jpg?raw=true"
  },
  {
    uid: "6",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/6.jpg?raw=true"
  },
  {
    uid: "7",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/7.jpg?raw=true"
  },
  {
    uid: "8",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/8.jpg?raw=true"
  },
  {
    uid: "9",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/9.jpg?raw=true"
  },
  {
    uid: "10",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/10.jpg?raw=true"
  }
];



export function addImageUrl(character) {
  imagenesPersonajes.forEach(personaje => {
    if (personaje.uid === character.uid){
      character.imageUrl = personaje.imageUrl;
    }
  });
  return character
}

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((response) => response.json())
      .then((data) => {
        let characters = data.results.map((character) => addImageUrl(character));
        setPersonajes(characters);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <div className="characters-container">
      {personajes.length === 0 ? (
        <p>Cargando personajes...</p>
      ) : (
        personajes.map((personaje) => (
          <Card key={personaje.uid} name={personaje.name} uid={personaje.uid} imageUrl={personaje.imageUrl} category="people"/>
        ))
      )}
    </div>
  );
};

export default Personajes;

