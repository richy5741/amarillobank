import { BancoDB } from "./BancoDB.js";

export class Banco {
  constructor() {
    this.db = new BancoDB();
    this.nombre = "AmarilloBank";
  }

  async agregarCliente(cliente) {
    await this.db.guardarCliente(cliente);
    console.log(`Cliente ${cliente.nombre} guardado en ${this.nombre}`);
  }

  async listarClientes() {
    let clientes = await this.db.obtenerClientes();
    return clientes;
  }

  async buscarClientePorCedula(cedula) {
    let clientes = await this.db.obtenerClientes();
    return clientes.find(c => c.cedula == cedula);
  }

  // Aqui usamos el doble for que ya aprendiste
  async buscarCuenta(numeroCuenta) {
    let clientes = await this.db.obtenerClientes();
    for (let cliente of clientes) {
      for (let cuenta of cliente.cuentas) {
        if (cuenta.numero === numeroCuenta) {
          return { cliente, cuenta };
        }
      }
    }
    return null;
  }
}