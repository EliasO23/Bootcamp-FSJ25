/*
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/

function celsiusAFarenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let tempCelsius = 0;
let tempFarenheit = celsiusAFarenheit(tempCelsius);
console.log(`${tempCelsius}°C es equivalente a ${tempFarenheit}°F.`);
console.log("Que se encuentra en:");


if (tempFarenheit > 14 && tempFarenheit <= 32){
    console.log(" - Temperatura Baja");
}
else if (tempFarenheit > 32 && tempFarenheit <= 68){
    console.log(" - Temperatura Adecuada");
}
else if (tempFarenheit > 68 && tempFarenheit <= 96){
    console.log(" - Temperatura Alta");
}
else{
    console.log(" - Temperatura Desconocida");
}


