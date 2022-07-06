import { EventEmitter, Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  public user:UsuarioModel;
  public openSesion:EventEmitter<UsuarioModel>;
  constructor() { 
    this.user = {};
    this.openSesion = new EventEmitter<UsuarioModel>();
  }
  
  
}
