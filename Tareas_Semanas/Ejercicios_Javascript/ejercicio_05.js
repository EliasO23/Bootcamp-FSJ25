/* 
Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.
*/
function descCoche() {
    
    let coche = document.getElementById('coche').value;
    let descuento;
    let precio;

    if (coche.toLowerCase() == "ford fiesta") {
        descuento = 0.05;
        precio = 150000;
    }
    else if (coche.toLowerCase() == "ford focus") {
        descuento = 0.10;
        precio = 200000;
    }
    else if (coche.toLowerCase() == "ford escape") {
        descuento = 0.20;
        precio = 300000;
    }

    let precioFinal = precio - (precio * descuento);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
                                <p>Auto seleccionado: ${coche}</p>
                                <p>Descuento: ${descuento * 100}%</p>
                                <p>Precio: $${precio}</p>
                                <p>Total con descuento: $${precioFinal.toFixed(2)}</p>
                            `;
}








