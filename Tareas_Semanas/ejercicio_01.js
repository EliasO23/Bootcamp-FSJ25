/*
Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.

*/

function verificarMayorDeEdad(edad) {

  if (!isNaN(edad)) {
    return edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
  } else {
    return "Por favor, ingrese un número válido.";
  }
  

}

let edad = 18;
console.log(verificarMayorDeEdad(edad));



