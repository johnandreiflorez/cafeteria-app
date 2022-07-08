import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user:UsuarioModel ={
    email: "",
    password: ""
  }
  @Output()
  public inicio:EventEmitter<UsuarioModel>;
  constructor(private authservice: AuthService,
              private router:Router) {
                
      this.inicio = new EventEmitter<UsuarioModel>();
   }

  ngOnInit(): void {
  }

  logIn(){
    this.inicio.emit(this.user);
  }

}
