import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService{

  constructor(private httpClient:HttpClient) { }

  public  getProductos(): ProductoModel[] {
    return [
      {
        nombre: "Helado",
        descripcion: "Delicioso helado de fresa",
        precio: 6500,
        cantidad:20,
        imagen:'../../../assets/imagenes/batido.jpg'
      },
      
      { 
        nombre:"Cafe",
        descripcion:"cafe",
        precio:3200,
        cantidad:29,
        imagen:'../../../assets/imagenes/cafe.jpg'
    
      },
      { 
        nombre:"panques",
        descripcion:"panqueques",
        precio: 10000,
        cantidad: 10,
        imagen: '../../../assets/imagenes/panques.jpg'
    
      },
    
      { 
        nombre:"Ensalada",
        descripcion:"Ensalada",
        precio:7500,
        cantidad: 40,
        imagen:'../../../assets/imagenes/ensalada2.jpg'
    
      },
    
      { 
        nombre:"Combo de pollo",
        descripcion:"combo de pollo",
        precio: 15000,
        cantidad: 5,
        imagen:'../../../assets/imagenes/pollo.jpg'
        
    
      },
      { 
        nombre:"Helado",
        descripcion:"Helado de fresa con vainilla",
        precio: 15000,
        cantidad: 57,
        imagen:'../../../assets/imagenes/batido.jpg'
        
    
      },

      { 
        nombre:"Combo de pollo",
        descripcion:"combo de pollo",
        precio: 15000,
        cantidad: 65,
        imagen:'../../../assets/imagenes/pollo.jpg'
        
    
      },
      { 
        nombre:"Combo de pollo",
        descripcion:"combo de pollo",
        precio: 15000,
        imagen:'../../../assets/imagenes/pollo.jpg'
        
    
      },
      { 
        nombre:"Combo de pollo",
        descripcion:"combo de pollo",
        precio: 15000,
        imagen:'../../../assets/imagenes/pollo.jpg'
        
    
      },
      { 
        nombre:"Combo de pollo",
        descripcion:"combo de pollo",
        precio: 15000,
        imagen:'../../../assets/imagenes/pollo.jpg'
        
    
      },
       { 
        nombre:"Combo de pollo",
        descripcion:"combo de pollo",
        precio: 15000,
        imagen:'../../../assets/imagenes/pollo.jpg'
        
    
      },
      { 
        nombre:"Combo de pollo",
        descripcion:"combo de pollo",
        precio: 15000,
        imagen:'../../../assets/imagenes/pollo.jpg'
        
    
      },
      { 
        nombre:"Combo de pollo",
        descripcion:"combo de pollo",
        precio: 15000,
        imagen:'../../../assets/imagenes/pollo.jpg'
        
    
      },
      { 
        nombre:"Combo de pollo",
        descripcion:"combo de pollo",
        precio: 15000,
        imagen:'../../../assets/imagenes/pollo.jpg'
        
    
      },
      { 
        nombre:"Combo de pollo",
        descripcion:"combo de pollo",
        precio: 15000,
        imagen:'../../../assets/imagenes/pollo.jpg'
        
    
      }
      
    ];
  }
  public getProductosAPI():Observable<ProductoModel[]>{
    return this.httpClient.get<ProductoModel[]>('http://localhost:8181/productos');
  }
  public insertProducto(producto:ProductoModel):Observable<any>{
    const {nombre:name,descripcion:description,cantidad:stock,imagen:image,precio:price} = producto;
    return this.httpClient.post<any>('http://localhost:8181/productos',{name,description,stock,image,price});
  }
}
