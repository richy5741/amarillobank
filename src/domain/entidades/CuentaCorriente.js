import { Cuenta } from './Cuenta.js';
export class CuentaCorriente extends Cuenta {
    constructor(saldo = 0, titular = "") {
        super(saldo, titular);
        this.tipo = "Corriente";
    }
}