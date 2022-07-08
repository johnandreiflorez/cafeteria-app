import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private URL = 'http://localhost:8181';
   public user:EventEmitter<UsuarioModel>;
  constructor(private http: HttpClient) {
    this.user = new EventEmitter<UsuarioModel>();
   }
    
  singin(userData:UsuarioModel):Observable<UsuarioModel>{
    const {email,password} =userData;
    return this.http.post<UsuarioModel>(`${this.URL}/users/login`, {email,password});
  }

  


}
