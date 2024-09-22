// EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
// • Sumar
// • Restar
// • Multiplicar
// • Dividir
// • Potencia
// • Factorial

class Calculadora {

    // Método para sumar dos números
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Método para restar dos números
    restar(a: number, b: number): number {
        return a - b;
    }

    // Método para multiplicar dos números
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método para dividir dos números
    dividir(a: number, b: number): number | string {
        if (b === 0) {
            return 'La division no se puede realizar\n    - Ingrese en el denominador un numero diferente de 0';
        }
        return a / b;
    }

    // Método encontrar la potencia de un número
    potencia(base: number, exponente: number): number {
        return base ** exponente;
    }

    // Método para encontrar el factorial de un numero
    factorial(a: number): number | string{
        if (a < 0) {
            return 'No se puede calcular el factorial de un número negativo';
        }
        if (a === 0 || a === 1) {
            return 1;
        }

        let resultado = 1;
        for (let i = 2; i <= a; i++) {
            resultado *= i;

        };

        return resultado;
    }

}

let calc = new Calculadora();

// Calcular las operaciones
console.log("-- CALCULADORA --");

console.log('\n- Suma \n   (80 + 23):', calc.sumar(80, 23));
console.log('- Resta \n   (80 - 23):', calc.restar(80, 23));
console.log('- Multiplicacion \n   (5 * 10):', calc.multiplicar(5, 10));
console.log('- División \n   (80 / 0):', calc.dividir(80, 0), '\n   (80 / 10):', calc.dividir(80, 10));
console.log('- Potencia \n   (4 ^ 5):', calc.potencia(4, 5));
console.log('- Factorial \n   (6):', calc.factorial(6), '\n   (1):', calc.factorial(1), '\n   (-2):', calc.factorial(-2));


