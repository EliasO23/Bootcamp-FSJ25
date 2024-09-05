/*
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
    • La cantidad de valores negativos ingresados.
    • La cantidad de valores positivos ingresados.
    • La cantidad de múltiplos de 15.
    • El valor acumulado de los números ingresados que son pares.
*/

let numerosIngresados = [5,90,-4,7,12,25,2,-6,60,100];

let negativos = 0;
let positivos = 0;
let multiplos15 = 0;
let acumuladoPares = 0;


for (let i = 0 ; i < numerosIngresados.length ; i++){
    
    if (numerosIngresados[i] < 0){
        negativos++;
    }
    if (numerosIngresados[i] > 0){
        positivos++;
    }
    if (numerosIngresados[i] % 15 == 0){
        multiplos15++;
    }
    if (numerosIngresados[i] % 2 == 0){
        acumuladoPares += numerosIngresados[i]
    }
}

console.log(`Valores ingresados: ${numerosIngresados}`);

console.log(` - Valores negativos: ${negativos}`);
console.log(` - Valores positivos: ${positivos}`);
console.log(` - Múltiplos de 15: ${multiplos15}`);
console.log(` - Valor acumulado de los números pares: ${acumuladoPares}`);
