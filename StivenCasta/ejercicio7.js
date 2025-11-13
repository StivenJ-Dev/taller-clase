/*Necesito calcular el promedio de notas de un estudiante.
 Pide las 3 notas (de 0 a 5) y muestra el promedio final.*/
 let n1 = parseFloat(prompt("Nota 1:"));
let n2 = parseFloat(prompt("Nota 2:"));
let n3 = parseFloat(prompt("Nota 3:"));
let promedio = (n1 + n2 + n3) / 3;
console.log("Promedio final: " + promedio.toFixed(2));
