/* 
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
*/


let numTabla = 5;

console.log(`Tabla de multiplicar del ${numTabla}`);
if (numTabla == 0){
    console.log("Todo numero multiplicado por 0 es 0, por lo tanto: \n - Todos los valores son 0");
    
} else{
    
    for (let i = 0 ; i <= 10 ; i++){
        console.log(` - ${numTabla} * ${i} = ${numTabla * i}`);
    }
}

