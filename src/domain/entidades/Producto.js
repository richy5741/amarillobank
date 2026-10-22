export class Producto {
    constructor(titular = "", saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
        this.numero = Date.now().toString().slice(-10);
    }
}
