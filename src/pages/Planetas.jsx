import React, { useEffect, useState } from "react";
import Card from "../components/Card";

// La función addImageUrl y la constante imagenesPersonajes permiten usar imágenes desde distintos lugares (ej., Luke con uid 1)
const imagenesPlanetas = [
  {
    uid: "1",
    imageUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg"
  },
  {
    uid: "2",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/2.jpg?raw=true"
  },
  {
    uid: "3",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/3.jpg?raw=true"
  },
  {
    uid: "4",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/4.jpg?raw=true"
  },
  {
    uid: "5",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/5.jpg?raw=true"
  },
  {
    uid: "6",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVyrbEeQpHbllkpU7tR9oxc3x9taUumS9UuPPAQdtOQ0wy8CkvW5KPIC0R-xUqJotU8M&usqp=CAU"
  },
  {
    uid: "7",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/7.jpg?raw=true"
  },
  {
    uid: "8",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/8.jpg?raw=true"
  },
  {
    uid: "9",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/9.jpg?raw=true"
  },
  {
    uid: "10",
    imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/10.jpg?raw=true"
  }
];

function addImageUrl(planet) {
  imagenesPlanetas.forEach(planeta => {
    if (planeta.uid === planet.uid){
      planet.imageUrl = planeta.imageUrl;
    }
  });
  return planet
}

const Planetas = () => {
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/")
      .then((response) => response.json())
      .then((data) => {
        let planets = data.results.map((planet) => addImageUrl(planet));
        setPlanetas(planets);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <div className="planets-container">
      {planetas.length === 0 ? (
        <p>Cargando planetas...</p>
      ) : (
        planetas.map((planeta) => (
          <Card key={planeta.uid} name={planeta.name} uid={planeta.uid} imageUrl={planeta.imageUrl} category="planets"/>
        ))
      )}
    </div>
  );
};

export default Planetas;
