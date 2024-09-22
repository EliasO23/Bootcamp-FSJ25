// EJERCICIO 3. Crea una clase llamada Canción:
// Atributos: título, género de la canción y un atributo privado que se llame autor.
// Métodos:
// • Crear un constructor que reciba como parámetros el título y género de la canción.
// • Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
// • Crea un método para mostrar los datos de la canción. 

class Cancion {
    protected titulo: string;
    protected genero: string;
    private autor:string;

    constructor(tituloParam:string, generoParam:string){
        this.titulo = tituloParam;
        this.genero = generoParam;
    }

    // Getter
    getAutor():string{
        return this.autor;
    }

    // Setter
    setAutor(autorParam:string){
        this.autor = autorParam;
    }

    mostrarDatos(): void{
        console.log(`\n- Titulo: ${this.titulo}`);
        console.log(`- Genero: ${this.genero}`);
        console.log(`- Autor: ${this.autor}`);    
    }

}

let cancion = new Cancion("I ain't worried", "POP");
cancion.setAutor("OneRepublic");

console.log("-- CANCION --");
console.log(cancion.getAutor());
cancion.mostrarDatos();

