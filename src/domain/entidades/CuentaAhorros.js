import { Cuenta } from './Cuenta.js';

export class CuentaAhorros extends Cuenta {
    constructor(saldo = 0, titular = "") {
        super(saldo, titular);
        this.tipo = "Ahorros";
    }
}