/*Debo calcular el salario semanal de un empleado.
 Pide el número de horas trabajadas en la semana y
  el precio que se paga por hora. Muestra el salario total.*/
  let horas = parseFloat(prompt("Horas trabajadas:"));
let valorHora = parseFloat(prompt("Pago por hora:"));
let salario = horas * valorHora;
console.log("Salario semanal: $" + salario.toFixed(2));
