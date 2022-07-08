/*import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private isActive:boolean;
  constructor(private sesionService:SesionService, private router:Router){
    this.isActive = false;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.sesionService.openSesion.subscribe((user)=>{
        if(user.id != -1){
          console.log("Guard:",user);
          if(user.rol?.id == 1)
            this.isActive= true;
          }else{
            this.router.navigateByUrl('/login');
          }
      })
      console.log(this.isActive);
      return this.isActive;
      
      
  }
  
}*/
