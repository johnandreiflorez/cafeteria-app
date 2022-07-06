import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GuardCanActiveService } from './services/guard-can-active-service.service';
import { ProductosComponent } from './components/productos/productos.component';
import { AdminComponent } from './components/admin/admin.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { GestionesGeneralesComponent } from './components/gestiones-generales/gestiones-generales.component';
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component';
import { GestionRolesComponent } from './components/gestion-roles/gestion-roles.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
/*import { VendedorGuard } from './guards/vendedor.guard';
import { ClienteGuard } from './guards/cliente.guard';
import { AdminGuard } from './guards/admin.guard';*/






const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent} ,
  {path: 'productos',component: ProductosComponent}, //canActivate:[AdminGuard,VendedorGuard,ClienteGuard]},
  {path: 'admin/:name',component: AdminComponent}, //canActivate:[AdminGuard]},
  {path: 'vendedor',component: VendedorComponent}, //canActivate:[VendedorGuard]},
  {path: 'cliente',component: ClienteComponent }, //canActivate:[ClienteGuard]},
  {path: 'gestiones-generales',component: GestionesGeneralesComponent}, //canActivate:[AdminGuard]},
  {path: 'gestion-productos',component: GestionProductosComponent}, //canActivate:[AdminGuard]},
  {path: 'gestion-usuarios',component: GestionUsuariosComponent}, //canActivate:[AdminGuard]},
  {path: 'agregar-usuario',component: AgregarUsuarioComponent}, //canActivate:[AdminGuard]},
  {path: 'gestion-roles',component: GestionRolesComponent}, //canActivate:[AdminGuard]},
  
  
  
  { path:'**', pathMatch:'full', redirectTo:'Home'},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
