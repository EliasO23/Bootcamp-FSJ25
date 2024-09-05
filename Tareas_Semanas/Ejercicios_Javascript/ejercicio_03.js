/* 
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.

CATEGORIA      AUMENTO
    A           15%
    B           30%
    C           10%
    D           20%

*/

function tipoAumento(categoria){
    let aumento;

    if (categoria == 'A'){
        aumento = 15;
    }
    else if (categoria == 'B'){
        aumento = 30;
    }
    else if (categoria == 'C'){
        aumento = 10;
    }
    else if (categoria == 'D'){
        aumento = 20;
    }
    else{
        aumento = 0;
    }

    return aumento;
}

function calcularAumentoSalarial(categoria, salario) {
    let aumentoSalarial;
    switch (categoria) {
        case 'A':
            aumentoSalarial = 0.15 * salario;
            break;

        case 'B':
            aumentoSalarial = 0.30 * salario;
            break;

        case 'C':
            aumentoSalarial = 0.10 * salario;
            break;

        case 'D':
            aumentoSalarial = 0.20 * salario;
            break;

        default:
            aumentoSalarial = 0;
            break

    }

    return aumentoSalarial;
}


let nombre = "Carlos Eduardo";
let salario = 361.09;
let categoria = 'B';
let aumento = tipoAumento(categoria);
let aumentoSalarial = calcularAumentoSalarial(categoria, salario)
let totalSalario = salario + aumentoSalarial;

console.log(`Datos Empleado: \n - Nombre: ${nombre} \n - Salario: ${salario} \n - Categoria ${categoria} \n - Aumento: ${aumento}%`);
console.log(`\nAumento Salarial: ` + aumentoSalarial.toFixed(3));
console.log(`Total Salario: ${totalSalario}`);




