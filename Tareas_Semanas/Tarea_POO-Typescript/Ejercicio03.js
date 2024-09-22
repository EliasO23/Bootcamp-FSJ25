// EJERCICIO 3. Crea una clase llamada Canción:
// Atributos: título, género de la canción y un atributo privado que se llame autor.
// Métodos:
// • Crear un constructor que reciba como parámetros el título y género de la canción.
// • Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
// • Crea un método para mostrar los datos de la canción. 
var Cancion = /** @class */ (function () {
    function Cancion(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
    }
    // Getter
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    // Setter
    Cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    Cancion.prototype.mostrarDatos = function () {
        console.log("\n- Titulo: ".concat(this.titulo));
        console.log("- Genero: ".concat(this.genero));
        console.log("- Autor: ".concat(this.autor));
    };
    return Cancion;
}());
var cancion = new Cancion("I ain't worried", "POP");
cancion.setAutor("OneRepublic");
console.log("-- CANCION --");
console.log(cancion.getAutor());
cancion.mostrarDatos();
