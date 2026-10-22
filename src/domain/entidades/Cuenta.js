import { Producto } from './Producto.js';

export class Cuenta extends Producto {
    constructor(saldo = 0, titular = "") {
        super(titular, saldo);
    }
}