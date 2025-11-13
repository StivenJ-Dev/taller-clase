/*Convierte una distancia de millas a kilómetros.
   (1 milla = 1.60934 km)*/
let millas = parseFloat(prompt("Distancia en millas:"));
let km = millas * 1.60934;
console.log("Distancia en kilómetros: " + km.toFixed(2) + " km");
