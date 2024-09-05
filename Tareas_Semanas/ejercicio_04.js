/* 
Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. 
*/

function calcularNumMayor(num1, num2){
    let resultado;

    if (num1 > num2){
        resultado = ` - El numero mayor es el: ${num1}`;
    }
    else if (num2 > num1){
        resultado = ` - El numero mayor es el: ${num2}`;
    }
    else{
        resultado = ` - Los numeros son iguales`;
    }

    return resultado;
}

let num1 = 6;
let num2 = 9;

console.log(`Entre los numeros ${num1} y ${num2}`);
console.log(calcularNumMayor(num1, num2));