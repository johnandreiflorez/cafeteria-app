import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteGuard implements CanActivate {
  constructor(private sesionService:SesionService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.sesionService.user.id != -1){
        if(this.sesionService.user.rol?.id == 3)
          return true;
      }
      return false;
  }
  
}
