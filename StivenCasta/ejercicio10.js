/*Convierte minutos totales en horas y minutos.
   Ejemplo: 130 minutos = 2 horas y 10 minutos.*/

let minutosTotales = parseInt(prompt("Minutos totales:"));
let horasT = Math.floor(minutosTotales / 60);
let minutosRest = minutosTotales % 60;
console.log(`${minutosTotales} minutos = ${horasT} horas y ${minutosRest} minutos`);
