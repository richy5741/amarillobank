export class Cliente{
  constructor(cedula,nombre,celular,correo ,clave1){
    this.cedula = cedula;
    this.nombre = nombre;
    this.celular = celular;
    this.correo = correo;
    this.clave = clave1;
    this.productos = [];
  }
  static validarClave(clave1,clave2){
    return clave1 === clave2;
  }
  agregarCuenta(cuenta){
    this.productos.push(cuenta);
  }
}