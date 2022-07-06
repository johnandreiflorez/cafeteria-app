import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  // Implementaciòn del metodo
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Obtenemos el token del sessioStorage
   /* const token: string = sessionStorage.getItem('token');

    let request = req;
	//Validamos si el token existe
    if (token) {
      //Clonamos el token y lo mandamos en la cabecera de todas las peticiones HTTP
    
    */
    req = req.clone({
      setHeaders:{
        //Autorizaciòn de tipo Bearer + token
          //El tipo de autorizaciòn depende del back
        authorization:"Bear 12313123FADS"
      }
    })
    return next.handle(req);
  }
}
