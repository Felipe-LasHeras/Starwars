import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg"; // Asegúrate de que esta imagen se utiliza en algún lugar, si es necesario
import "../../styles/home.css";

const Home = () => {
  const [personajes, setPersonajes] = useState([]);
  const [planetas, setPlanetas] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);

  // useEffect para cargar los personajes
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results))
      .catch((err) => console.error(err));
  }, []);

  // useEffect para cargar los planetas
  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/")
      .then((res) => res.json())
      .then((data) => setPlanetas(data.results))
      .catch((err) => console.error(err));
  }, []);

  // useEffect para cargar los vehiculos
  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles/")
      .then((res) => res.json())
      .then((data) => setVehiculos(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-center mt-5">
      <div>
        <h2>Personajes</h2>
        {personajes.map((personaje) => {
          <li key={personaje.uid}>{personaje.name}</li>;
        })}
      </div>
      <div>
        <h2 className="">Planetas</h2>
        <ul>
          {planetas.map((planeta) => (
            <li key={planeta.uid}>{planeta.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Vehiculos</h2>
        <ul>
          {vehiculos.map((vehiculo) => (
            <li key={vehiculo.uid}>{vehiculo.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

// Hacer lo mismo de personajes con planetas y vehiculos xxxx
// Iterar en el arreglo de personajes, planetas y vehiculos para mostrar cada uno de los elementos
