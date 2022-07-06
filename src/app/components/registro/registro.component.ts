import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {



    user: UsuarioModel ={
    name: "",
    email: "",
    password: "",
  }

  @Output()
  public registro:EventEmitter<UsuarioModel> 
  constructor(private authservice: AuthService,
              private router:Router) {
                
      this.registro = new EventEmitter<UsuarioModel>();
   }


  ngOnInit(): void {
  }

  Registro(){
    this.registro.emit(this.user);

  }


}

