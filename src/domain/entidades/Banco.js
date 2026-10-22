import { BancoDB } from '/src/infraestructura/repositorio/BancoDB.js';

export class Banco {
    static guardarCliente(cliente) {
        const clientes = BancoDB.obtenerClientes();
        clientes.push(cliente);
        BancoDB.guardarClientes(clientes);
        console.log("Clientes ahora:", BancoDB.obtenerClientes());
    }
}