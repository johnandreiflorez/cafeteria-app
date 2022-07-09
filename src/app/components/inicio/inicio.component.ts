import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user: UsuarioModel = {
    email: "",
    password: ""
  }
  @Output()
  public inicio: EventEmitter<UsuarioModel>;
  innerForm: FormGroup;
  error: string;
  constructor(private authservice: AuthService,
    private router: Router) {
    this.error = '';
    this.innerForm =
      new FormGroup({
        Email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        Password: new FormControl('', [Validators.required])
      });

    this.inicio = new EventEmitter<UsuarioModel>();
  }

  ngOnInit(): void {
  }

  logIn() {
    if(this.innerForm.value.Password =='' || this.innerForm.value.Email ==''){
      this.error = 'Ingrese todos los datos';
      return;
    }
    this.inicio.emit(this.user);
  }
}

