import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { RolModel } from '../models/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

api= environment.api;

  constructor(private http: HttpClient) { }
  //obtener los roles de la api
  public getRol(){
    return this.http.get(environment.api+"roles");

  }

}