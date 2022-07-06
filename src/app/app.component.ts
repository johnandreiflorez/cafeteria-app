import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuarioModel } from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  user:UsuarioModel;
   constructor(){
    this.user = {};
  }
  
}
