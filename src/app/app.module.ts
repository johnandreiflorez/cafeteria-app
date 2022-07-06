import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {ReactiveFormsModule}  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


//modules
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { GuardCanActiveService } from './services/guard-can-active-service.service';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AdminComponent } from './components/admin/admin.component';
import { GestionesGeneralesComponent } from './components/gestiones-generales/gestiones-generales.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component';
import { GestionRolesComponent } from './components/gestion-roles/gestion-roles.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductosService } from './services/productos.service';
import { UsuariosService } from './services/usuarios.service';
import { RolesService } from './services/roles.service';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SesionService } from './services/sesion.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductosComponent,
    
    
    ProductoComponent,
    CarritoComponent,
    AdminComponent,
    GestionesGeneralesComponent,
    VendedorComponent,
    GestionProductosComponent,
    GestionUsuariosComponent,
    GestionRolesComponent,
    ClienteComponent,
    AgregarUsuarioComponent,
    RegistroComponent,
    InicioComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GuardCanActiveService,ProductosService,UsuariosService,RolesService,
             {
              provide:HTTP_INTERCEPTORS,
              useClass:AuthInterceptorService,
              multi: true 
            },
            SesionService
          ],
  bootstrap: [AppComponent]
})
export class AppModule { }
