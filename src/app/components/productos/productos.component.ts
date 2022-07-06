import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import {ProductoModel} from '../../models/producto.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  public productos:ProductoModel[];
  constructor(private productosService: ProductosService) {
    this.productos = this.productosService.getProductos();
    this.productosService.getProductosAPI().subscribe((productosApi:ProductoModel[])=>{
      productosApi.forEach(p=>{
        console.log(p);
      })
    })
    /*this.productosService.insertProducto({nombre:"Creado desde Angular",descripcion:"Creado desde Angular",cantidad:50,precio:30,imagen:""}).subscribe(data=>{
      console.log(data);
    })*/
    
   }

  ngOnInit(): void {
  }

  ingresarProducto(){
    
  }



}
