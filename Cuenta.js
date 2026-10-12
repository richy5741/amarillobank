export class Cuenta {
  constructor(numero, tipo, saldo = 0) {
    this.numero = numero;
    this.tipo = tipo; 
    this.saldo = saldo;
  }

  depositar(monto) {
    this.saldo += monto;
    return this.saldo;
  }

  retirar(monto) {
    if (monto > this.saldo) {
      alert("Saldo insuficiente");
      return false;
    }
    this.saldo -= monto;
    return true;
  }
}