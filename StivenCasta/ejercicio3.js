/*Debo calcular cuánto perímetro tiene un potrero rectangular.
 Pide el largo y el ancho del potrero y muestra el resultado.*/
let largo = parseFloat(prompt("Largo del potrero (m):"));
let anchoP = parseFloat(prompt("Ancho del potrero (m):"));
let perimetro = 2 * (largo + anchoP);
console.log("El perímetro del potrero es: " + perimetro + " m");
