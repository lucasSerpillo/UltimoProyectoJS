/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const excuses = [
    "Tengo que entregar un proyecto importante.",
    "Mi perro se fue conduciendo una camioneta.",
    "Un payaso me robo la mochila.",
    "tengo programado un viaje a la luna.",

    "Tengo que terminar de construir mi casa del arbol.",
    "El perro se escapó.",

    "debo regar mis plantas",
    "Estaba ayudando a un amigo con un asunto de la mafia.",
    "voy borracho",
    "me despidieron del trabajo."
  ];

  document.getElementById("generate-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById("excusa").textContent = excuses[randomIndex];
  });
};
