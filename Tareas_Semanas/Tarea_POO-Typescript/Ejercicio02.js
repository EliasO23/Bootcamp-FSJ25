// EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
// • Sumar
// • Restar
// • Multiplicar
// • Dividir
// • Potencia
// • Factorial
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Método para sumar dos números
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    // Método para restar dos números
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    // Método para multiplicar dos números
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    // Método para dividir dos números
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            return 'La division no se puede realizar\n    - Ingrese en el denominador un numero diferente de 0';
        }
        return a / b;
    };
    // Método encontrar la potencia de un número
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    // Método para encontrar el factorial de un numero
    Calculadora.prototype.factorial = function (a) {
        if (a < 0) {
            return 'No se puede calcular el factorial de un número negativo';
        }
        if (a === 0 || a === 1) {
            return 1;
        }
        var resultado = 1;
        for (var i = 2; i <= a; i++) {
            resultado *= i;
        }
        ;
        return resultado;
    };
    return Calculadora;
}());
var calc = new Calculadora();
// Calcular las operaciones
console.log("-- CALCULADORA --");
console.log('\n- Suma \n   (80 + 23):', calc.sumar(80, 23));
console.log('- Resta \n   (80 - 23):', calc.restar(80, 23));
console.log('- Multiplicacion \n   (5 * 10):', calc.multiplicar(5, 10));
console.log('- División \n   (80 / 0):', calc.dividir(80, 0), '\n   (80 / 10):', calc.dividir(80, 10));
console.log('- Potencia \n   (4 ^ 5):', calc.potencia(4, 5));
console.log('- Factorial \n   (6):', calc.factorial(6), '\n   (1):', calc.factorial(1), '\n   (-2):', calc.factorial(-2));
