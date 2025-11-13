/*Mi app del clima solo muestra la temperatura en grados Fahrenheit.
 Pide la temperatura en °F y conviértela a grados Celsius.*/
 let fahrenheit = parseFloat(prompt("Temperatura en °F:"));
let celsius = (fahrenheit - 32) * 5 / 9;
console.log("Temperatura en °C: " + celsius.toFixed(2));
