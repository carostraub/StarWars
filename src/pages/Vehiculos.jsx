import React, { useEffect, useState } from "react";
import Card from "../components/Card";



// Lista de imágenes con sus IDs correspondientes
const imagenesVehiculos = [
  { uid: "1", imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/1.jpg?raw=true" },
  { uid: "2", imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/2.jpg?raw=true" },
  { uid: "3", imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/3.jpg?raw=true" },
  { uid: "4", imageUrl: "https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/4.jpg?raw=true" },
  { uid: "5", imageUrl: "/assets/img/snowspeeders.jpg" },
  { uid: "6", imageUrl: "/assets/img/AT-AT.jpg" },
  { uid: "7", imageUrl: "/assets/img/tie-bomber.jpg" },
  { uid: "8", imageUrl: "/assets/img/at-st.jpg" },
  { uid: "9", imageUrl: "/assets/img/StormIVTwin-PodCloudCar.jpg" },
  { uid: "10", imageUrl: "/assets/img/SailBarge.jpg" }
];


function addImageUrl(vehicle) {
  const foundImage = imagenesVehiculos.find(vehiculo => vehiculo.uid === vehicle.uid);
  if (foundImage) {
    vehicle.imageUrl = foundImage.imageUrl;
  }
  return vehicle;
}

const Vehiculos = () => {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles/")
      .then((response) => response.json())
      .then((data) => {
        let vehicles = data.results.map((vehicle) => addImageUrl(vehicle));
        setVehiculos(vehicles);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <div className="vehicles-container">
      {vehiculos.length === 0 ? (
        <p>Cargando vehículos...</p>
      ) : (
        vehiculos.map((vehiculo) => (
          <Card key={vehiculo.uid} name={vehiculo.name} uid={vehiculo.uid} imageUrl={vehiculo.imageUrl} category="vehicles" />
        ))
      )}
    </div>
  );
};

export default Vehiculos;
