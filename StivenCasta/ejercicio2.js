/*Para un evento, necesito un banner. Pide el ancho y el 
alto de una pared (en metros) y calcula su área para saber 
cuánto material comprar.*/
let ancho = parseFloat(prompt("Ancho de la pared (m):"));
let alto = parseFloat(prompt("Alto de la pared (m):"));
let area = ancho * alto;
console.log("El área del banner es: " + area + " m²");
