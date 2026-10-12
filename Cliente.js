import { Cuenta } from "./Cuenta.js";

export class Cliente {
  constructor(cedula, nombre) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.cuentas = [];
  }

  agregarCuenta(tipo, saldoInicial = 0) {
    // Generamos un número de cuenta aleatorio
    let numero = "AM-" + Math.floor(Math.random() * 1000000);
    let nuevaCuenta = new Cuenta(numero, tipo, saldoInicial);
    this.cuentas.push(nuevaCuenta);
    return nuevaCuenta;
  }

  obtenerCuenta(numero) {
    return this.cuentas.find(c => c.numero === numero);
  }
}