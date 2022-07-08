import { Injectable } from '@angular/core';
import { RolModel } from '../models/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor() { }
  public  getRoles(): any[] {
    return [
      {
    usuario: "mquintero1",
    rol: "cliente",
     },
     {
      usuario: "ajimenez1",
      rol: "cliente",
       },
       {
        usuario: "crestrepo2",
        rol: "vendedor",
         },
    ]
}
}
