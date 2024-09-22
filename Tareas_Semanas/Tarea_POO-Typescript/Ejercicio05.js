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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombreParam, apellidoParam, direccionParam, telParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telParam;
        this.edad = edadParam;
    }
    Persona.prototype.mayorEdad = function () {
        if (this.edad >= 18) {
            console.log("  ".concat(this.nombre, " ").concat(this.apellido, " Eres mayor de edad."));
        }
        else {
            console.log("  ".concat(this.nombre, " ").concat(this.apellido, " No eres mayor de edad."));
        }
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombreParam, apellidoParam, direccionParam, telParam, edadParam, sueldoParam) {
        var _this = _super.call(this, nombreParam, apellidoParam, direccionParam, telParam, edadParam) || this;
        _this.sueldo = sueldoParam;
        return _this;
    }
    // Método para cargar el sueldo
    Empleado.prototype.cargarSueldo = function (sueldoParam) {
        this.sueldo = sueldoParam;
    };
    // Método para imprimir el sueldo
    Empleado.prototype.imprimirSueldo = function () {
        console.log("Sueldo: $".concat(this.sueldo));
    };
    //  Imprimir los datos de Empleado
    Empleado.prototype.mostrarDatos = function () {
        console.log("- Nombre: ".concat(this.nombre));
        console.log("- Apellido: ".concat(this.apellido));
        console.log("- Direccion: ".concat(this.direccion));
        console.log("- Telefono: ".concat(this.telefono));
        console.log("- Edad: ".concat(this.edad));
        this.mayorEdad();
        console.log("- Sueldo: $".concat(this.sueldo));
    };
    return Empleado;
}(Persona));
var empleado = new Empleado("Elias", "Oliva", "Calle Sur Kilometro 25", "2535-3555", 17, 1520.30);
console.log("-- Datos del Empleado --");
empleado.mostrarDatos();
// Ingresar el sueldo
empleado.cargarSueldo(2130.55);
// Imprimir el sueldo
console.log("\n-- Sueldo Actualizado --");
empleado.imprimirSueldo();
