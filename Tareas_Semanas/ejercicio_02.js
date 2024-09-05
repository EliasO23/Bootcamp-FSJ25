/* 
Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.

*/

function calcularNotaFinal(examen, tareas, asistencia, investigacion, nombre, carnet) {

    let notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

    console.log("Datos Alumno: ");
    console.log(" - Nombre: " + nombre);
    console.log(" - Carnet: " + carnet);

    console.log("\nNotas: ");
    console.log(" - Examen        : " + examen);
    console.log(" - Tareas        : " + tareas);
    console.log(" - Asistencia    : " + asistencia);
    console.log(" - Intestigacion : " + investigacion);
    console.log("------------------------------------");
    console.log("   Nota Final    : " + notaFinal.toFixed(2));

}

let nombre = "Elias Oliva";
let carnet = "N1234590"
let notaExamen = 10;
let notaTareas = 9;
let asistencia = 10;
let investigacion = 9; 

calcularNotaFinal(notaExamen, notaTareas, asistencia, investigacion, nombre, carnet);




