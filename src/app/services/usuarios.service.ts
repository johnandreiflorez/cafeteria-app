import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }
  public  getUsuarios(): any[] {
    return [
      {
    nombre: "Manuela",
    apellido: "Quintero",
    usuario: "manuelquintero@gmail.com",
    rol: "administrador"
     },
     {
      nombre: "Andres",
      apellido: "Jimenez",
      usuario: "andresjimenez@gmail.com",
      rol: "cliente"
       },
       {
        nombre: "Claudia",
        apellido: "Restrepo",
        usuario: "claudiarestrepo@gmail.com",
        rol: "vendedor"
         },
    ]
    
}

public  deleteUsuarios(): any[] {

return [{}];
}
}
