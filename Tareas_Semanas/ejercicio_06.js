/* 
Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.
*/

function descViajes(origen, destino){
    let descuento = 0;
    let precio = 0;


    if (origen === "ciudad de palma" && destino === "la costa del sol"){
        descuento = 0.05;
        precio = 150;
    }
    else if (origen === "ciudad de palma" && destino === "panchimalco"){
        descuento = 0.10;
        precio = 100;
    }
    else if(origen === "ciudad de palma" && destino === "puerto el triunfo"){
        descuento = 0.15;
        precio = 200;
    }

    let precioFinal = precio - (precio*descuento);

    return {
        precio: precio,
        precioFinal: precioFinal.toFixed(2),
        descuento: (descuento * 100)
    }
}

let origen = "ciudad de palma";
let destino = "puerto el triunfo";

let resultado = descViajes(origen, destino);

console.log("Viaje reservado:");
console.log(` - Origen: ${origen}`);
console.log(` - Destino ${destino}`);
console.log(` - Descuento: ${resultado.descuento}%`);
console.log(` - Precio: $${resultado.precio}`);
console.log(` - Total con descuento: $${resultado.precioFinal}`);




