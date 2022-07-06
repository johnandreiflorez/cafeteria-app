import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

 
  constructor(private usuariosService: UsuariosService) { }
    

   ngOnInit()  {
     this.usuariosService.getUser().subscribe(
       (datos)=>{
         console.log(datos)
       },
       (error)=>{
         console.log(error);
        }
       )
     
   }
 

 

 

  editarUsuario(){

  }

  eliminarUsuario(){

  }
  
  

  }


