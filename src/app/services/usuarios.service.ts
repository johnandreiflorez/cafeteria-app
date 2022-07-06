import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  api= environment.api;

  constructor(private http: HttpClient) { }
  //obtener usuarios de la api
  public getUser(){
    return this.http.get(environment.api+"users");

  }
  

  
    
}


