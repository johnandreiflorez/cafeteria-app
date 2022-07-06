import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public user:any;
  constructor(private sesionService:SesionService) { 
    this.user = this.sesionService.user;
  }

  ngOnInit(): void {
  }

}
