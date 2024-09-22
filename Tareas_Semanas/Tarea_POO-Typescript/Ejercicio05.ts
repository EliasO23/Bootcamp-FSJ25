// EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
// Atributos: nombre, apellido, dirección, teléfono y edad.
// Métodos:
// • Crear un método constructor para recibir los datos.
// • Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
// • Crea un método para mostrar todos los datos personales (será el método abstracto).
// • Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
// • En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
// • La clase Empleado va heredar de la clase Persona.
// • Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.

abstract class Persona{
    protected nombre:string;
    protected apellido:string;
    protected direccion:string;
    protected telefono:string;
    protected edad:number;

    constructor(nombreParam:string, apellidoParam:string, direccionParam:string, telParam:string, edadParam:number){
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telParam;
        this.edad = edadParam; 
    }

    mayorEdad():void{
        if(this.edad >= 18){
            console.log(`  ${this.nombre} ${this.apellido} Eres mayor de edad.`);
        }else{
            console.log(`  ${this.nombre} ${this.apellido} No eres mayor de edad.`);
            
        }
    }

    abstract mostrarDatos():void;

}

class Empleado extends Persona{
     private sueldo:number;

     constructor(nombreParam:string, apellidoParam:string, direccionParam:string, telParam:string, edadParam:number, sueldoParam:number){
         super(nombreParam, apellidoParam, direccionParam, telParam, edadParam)
         this.sueldo = sueldoParam
     }

     // Método para cargar el sueldo
     cargarSueldo(sueldoParam:number):void{
        this.sueldo = sueldoParam;
     }

     // Método para imprimir el sueldo
     imprimirSueldo(): void{
        console.log(`Sueldo: $${this.sueldo}`);
     }

    //  Imprimir los datos de Empleado
     mostrarDatos(): void{
        console.log(`- Nombre: ${this.nombre}`);
        console.log(`- Apellido: ${this.apellido}`);
        console.log(`- Direccion: ${this.direccion}`);
        console.log(`- Telefono: ${this.telefono}`);
        console.log(`- Edad: ${this.edad}`); 
        this.mayorEdad();
        console.log(`- Sueldo: $${this.sueldo}`);
        
    }
}

let empleado = new Empleado("Elias", "Oliva", "Calle Sur Kilometro 25", "2535-3555", 17, 1520.30);

console.log("-- Datos del Empleado --");
empleado.mostrarDatos();

// Ingresar el sueldo
empleado.cargarSueldo(2130.55);

// Imprimir el sueldo
console.log("\n-- Sueldo Actualizado --");
empleado.imprimirSueldo();