import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardCanActiveService implements CanActivate{
  public isVisible:boolean = false

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let isVisible = true;/*cambiar false para activar guardian*/
    this.authService.user.subscribe((user)=>{
      console.log(user);
      isVisible = true;
        
    })
    console.log("Guardian",isVisible);
    return isVisible;
  }
  
  constructor(private authService:AuthService) { }
}
