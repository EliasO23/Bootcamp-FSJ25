// EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
// obtenga el título, color y fuente de la página, el segundo método que indique como desea que
// aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
// propiedades.
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(tituloParam, colorParam, fuentePaginaParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuentePagina = fuentePaginaParam;
        this.alineacion = 'izquierda'; //Alineacion por defecto
    }
    // Método para obtener el título, color y fuente de la página
    CabeceraPagina.prototype.obtenerDetalles = function (tituloParam, colorParam, fuenteParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuentePagina = fuenteParam;
    };
    //Metodo para indicar la alineacion
    CabeceraPagina.prototype.indicarAlineacion = function (alineacion) {
        if (alineacion.toLowerCase() == "centrado" || alineacion.toLowerCase() == "derecha" || alineacion.toLowerCase() == "izquierda") {
            this.alineacion = alineacion;
            console.log("La alineacion del titulo a sido configurada como: ".concat(this.alineacion));
        }
        else {
            console.log("Opcion de alineacion no valida. \n - Use 'centrado', 'derecha' o 'izquierda'.");
        }
    };
    // Metodo para imprimir los datos
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuentePagina));
        console.log("Alineacion: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
// Objeto
var Documento = new CabeceraPagina("Java Programing", "Azul", "Arial");
console.log("-- Informacion del Documento --");
// Imprimiento los resultados obtenidos por el objeto
Documento.imprimirPropiedades();
console.log("\n-- Actualizacion del Documento --");
// Obtener los detalles por el metodo
Documento.obtenerDetalles("Java Fundamentals", "negro", "Poppins");
// Indicando la alineacion
Documento.indicarAlineacion("justificado");
Documento.indicarAlineacion("centrado");
console.log('');
// Imprimiento todos los resultados actualizados
Documento.imprimirPropiedades();
