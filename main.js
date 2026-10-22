import { Banco } from '/src/domain/entidades/Banco.js';
import { Cliente } from '/src/domain/entidades/Cliente.js';
import { CuentaAhorros } from '/src/domain/entidades/CuentaAhorros.js';

console.log("main.js cargado - versión form");

const btn = document.getElementById("btnCrear");
console.log("boton encontrado:", btn);

if(btn){
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click!");

    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const celular = document.getElementById("celular").value;
    const correo = document.getElementById("correo").value;
    const clave = document.getElementById("clave").value;
    const clave2 = document.getElementById("clave2").value;

    console.log({cedula, nombre, clave, clave2});

    try {
        if(Cliente.validarClave(clave, clave2)){
            let nuevoCliente = new Cliente(cedula, nombre, celular, correo, clave);
            let nuevaCuenta = new CuentaAhorros(0, nombre);
            nuevoCliente.agregarCuenta(nuevaCuenta);
            Banco.guardarCliente(nuevoCliente);
            alert("Cuenta creada: " + nombre);
            console.table(JSON.parse(localStorage.getItem("clientes")));
        }else{
            alert("Claves no coinciden");
        }
    } catch(err){
        console.error("ERROR:", err);
        alert("Error: " + err.message);
    }
  });
}
                
