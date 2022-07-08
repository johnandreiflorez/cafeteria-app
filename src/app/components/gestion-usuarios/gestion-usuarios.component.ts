import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  public usuarios:any[];
  constructor(private usuariosService: UsuariosService) {
    this.usuarios = this.usuariosService.getUsuarios();
    
   }

 

  ngOnInit(): void {
  }

  editarUsuario(){

  }

  eliminarUsuario(){

  }
  text: string | undefined;
  agregarUsuario(){
  
  this.text =  "Hola mundo";
  

  }

}
