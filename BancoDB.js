export class BancoDB {
  
  abrirDB() {
    return new Promise((resolve, reject) => {
      let request = indexedDB.open("AmarilloBankDB", 1);

      request.onupgradeneeded = (event) => {
        let db = event.target.result;
        if (!db.objectStoreNames.contains("clientes")) {
          db.createObjectStore("clientes", { keyPath: "cedula" });
        }
      };

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = () => reject("Error DB");
    });
  }

  async guardarCliente(cliente) {
    let db = await this.abrirDB();
    return new Promise((resolve) => {
      let tx = db.transaction("clientes", "readwrite");
      tx.objectStore("clientes").put(cliente);
      tx.oncomplete = () => resolve(true);
    });
  }

  async obtenerClientes() {
    let db = await this.abrirDB();
    return new Promise((resolve) => {
      let req = db.transaction("clientes").objectStore("clientes").getAll();
      req.onsuccess = () => resolve(req.result);
    });
  }
}