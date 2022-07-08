import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class VendedorGuard implements CanActivate {
  constructor(private sesionService:SesionService){
    this.isActive = false;
  }
  private isActive:boolean;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.sesionService.openSesion.subscribe(()=>{
        if(this.sesionService.user.id != -1){
          if(this.sesionService.user.rol?.id == 2)
            this.isActive= true;
        }
      })
      
      return this.isActive;
  }
  
}
