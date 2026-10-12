import { Cliente } from './Cliente.js';
import { Banco } from './Banco.js';

const miBanco = new Banco();

// --- PRUEBA 1: Crear un cliente ---
async function prueba() {
  console.log("--- Iniciando AmarilloBank ---");
  
  let cliente1 = new Cliente("1001", "Daniel");
  cliente1.agregarCuenta("ahorros", 500000);
  
  await miBanco.agregarCliente(cliente1);
  
  // --- PRUEBA 2: Ver que se guardo ---
  let todos = await miBanco.listarClientes();
  console.log("Clientes en la base:", todos);
  
  alert("¡Funciona! Revisa la consola F12");
}

prueba();



