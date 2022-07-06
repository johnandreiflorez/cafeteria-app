import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { GuardCanActiveService } from 'src/app/services/guard-can-active-service.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UsuarioModel ={}
  constructor(private authservice: AuthService,
              private router:Router,
              private sesionService:SesionService) {
    ;
   }

  ngOnInit(): void {
  }

  logIn(data:UsuarioModel){
    console.log(this.user);
    this.authservice.user.emit(this.user);
    this.authservice.singin(data).subscribe((res:any) =>{
       console.log(res);
       if(res.id != -1){
        this.sesionService.user= res;
        this.sesionService.openSesion.emit(res);
          switch(res?.rol?.id){
            case 1:
              //
              this.router.navigate([`admin/${res.name}`]);
              break;
            case 2:
              this.router.navigate([`vendedor/${res.name}`]);
              break;
            case 3:
              this.router.navigate([`cliente/${res.name}`]);
              break;
            default:
              
              
            
         }
       }
       
       //localStorage.setItem('token', res.token);
       //
       
    })

  }

  
 

}
