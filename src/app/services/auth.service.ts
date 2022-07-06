import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private base = 'environment.base';
   public user:EventEmitter<UsuarioModel>;
  constructor(private http: HttpClient) {
    this.user = new EventEmitter<UsuarioModel>();
   }
    
  singin(userData:UsuarioModel):Observable<UsuarioModel>{
    const {email,password} =userData;
    return this.http.post<UsuarioModel>(`${this.base}/users/login`, {email,password});
  }

  


}
