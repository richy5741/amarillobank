export class BancoDB {
    static obtenerClientes() {
        const datos = localStorage.getItem("clientes");
        return datos ? JSON.parse(datos) : [];
    }

    static guardarClientes(clientes) {
        console.log("Guardando en localStorage:", clientes);
        localStorage.setItem("clientes", JSON.stringify(clientes));
    }
}