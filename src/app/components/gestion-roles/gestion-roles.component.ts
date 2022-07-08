import { Component, OnInit } from '@angular/core';
import { RolModel } from 'src/app/models/rol.model';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-gestion-roles',
  templateUrl: './gestion-roles.component.html',
  styleUrls: ['./gestion-roles.component.css']
})
export class GestionRolesComponent implements OnInit {

  public roles:any[];
  constructor(private rolesService: RolesService) {
    this.roles = this.rolesService.getRoles();
    
   }

  ngOnInit(): void {
  }

}
