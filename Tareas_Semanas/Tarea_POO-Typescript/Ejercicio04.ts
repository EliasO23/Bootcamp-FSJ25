// EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
// Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
// Métodos:
// • Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
// número de cuenta.
// • Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
// condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
// depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
// correctamente y la cantidad depositada.
// • Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
// que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
// cuanto le queda en su cuenta.
// Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
// si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
// • Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
// • Define un objeto de la clase Cuenta y llama sus métodos.

class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    constructor(nombreParam: string, cantidadParam: number, tipoCuentaParam: string, numeroCuentaParam: string) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuentaParam;
        this.numeroCuenta = numeroCuentaParam;
    }

    depositar(cantidadParam: number): void {
        if (cantidadParam < 5.00) {
            console.log('Deposito Cancelado\n - El valor a depositar debe ser mayor a $5.00');
        }
        else {
            this.cantidad += cantidadParam;
            console.log(`\nEl dinero se a depositado correctamente \n - Cantidad ingresada: $${cantidadParam}`);
        }

    }

    retirar(valor: number): void {
        if (this.cantidad <= 5) {
            console.log('Fondos insuficientes\n - No tiene suficiente dinero para retirar');
        }
        else if(valor < 5){
            console.log('El valor a retirar debe ser mayor a $5.00');
            
        }
        else if (valor > this.cantidad) {
            console.log('\nFondos insuficientes \n- El valor a retirar execede el saldo disponible');
        }
        else {
            this.cantidad -= valor;
            console.log(`\nRetiro Exitoso\n - Se ha retirado: $${valor}. \n - Saldo restante: $${this.cantidad}`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre del tirular: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Numero de cuenta: ${this.numeroCuenta}`);
    }



}

let cuenta = new Cuenta("Elias Oliva", 250.00, "Cuenta de ahorro", "00-97654-123")

// Para depositar
console.log('\n-- Depositos --');
cuenta.depositar(4.00);
cuenta.depositar(25.50);

// Para retirar
console.log('\n-- Retiros --');
cuenta.retirar(4.50);
cuenta.retirar(300.00);
cuenta.retirar(20.00);

// Para mostrar los datos
console.log('\n-- Datos de la Cuenta --');
cuenta.mostrarDatos();

