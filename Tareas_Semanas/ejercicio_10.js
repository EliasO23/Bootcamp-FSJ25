/*
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.
*/

// Función para calcular el promedio de un array de edades
function calcularPromedio(edades) {
    let suma = 0;
    for (let i = 0; i < edades.length; i++) {
        suma += edades[i];
    }

    let promedio = suma / edades.length;

    return promedio;
}

function calcularPromedios() {

    // Edades de los estudiantes del turno mañana
    let edadesManana = [
        parseInt(document.getElementById('manana1').value),
        parseInt(document.getElementById('manana2').value),
        parseInt(document.getElementById('manana3').value),
        parseInt(document.getElementById('manana4').value),
        parseInt(document.getElementById('manana5').value)
    ];

    // Edades de los estudiantes del turno tarde
    let edadesTarde = [
        parseInt(document.getElementById('tarde1').value),
        parseInt(document.getElementById('tarde2').value),
        parseInt(document.getElementById('tarde3').value),
        parseInt(document.getElementById('tarde4').value),
        parseInt(document.getElementById('tarde5').value),
        parseInt(document.getElementById('tarde6').value)
    ];

    // Edades de los estudiantes del turno noche
    let edadesNoche = [
        parseInt(document.getElementById('noche1').value),
        parseInt(document.getElementById('noche2').value),
        parseInt(document.getElementById('noche3').value),
        parseInt(document.getElementById('noche4').value),
        parseInt(document.getElementById('noche5').value),
        parseInt(document.getElementById('noche6').value),
        parseInt(document.getElementById('noche7').value),
        parseInt(document.getElementById('noche8').value),
        parseInt(document.getElementById('noche9').value),
        parseInt(document.getElementById('noche10').value),
        parseInt(document.getElementById('noche11').value)
    ];

    // Calcular los promedios
    let promedioManana = calcularPromedio(edadesManana);
    let promedioTarde = calcularPromedio(edadesTarde);
    let promedioNoche = calcularPromedio(edadesNoche);

    if (isNaN(promedioManana) || isNaN(promedioTarde) || isNaN(promedioNoche)) {
        document.getElementById('resultados').innerHTML = `
        <p>Por favor, ingrese todas las edades</p>
        `;
    }

    else {
        // Determinar cuál es el mayor promedio
        let turnoMayorPromedio = '';

        if (promedioManana > promedioTarde && promedioManana > romedioNoche) {
            turnoMayorPromedio = 'Mañana';
        } 
        else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
            turnoMayorPromedio = 'Tarde';
        } 
        else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
            turnoMayorPromedio = 'Noche';
        }

        // Mostrar los resultados
        document.getElementById('resultados').innerHTML = `
            <h1><strong>Promedios:</strong></h1>
            <p>Turno Mañana: ${promedioManana.toFixed(2)}</p>
            <p>Turno Tarde: ${promedioTarde.toFixed(2)}</p>
            <p>Turno Noche: ${promedioNoche.toFixed(2)}</p>
            <p>El turno con el mayor promedio es: ${turnoMayorPromedio}</p>
        `;
    }
}
