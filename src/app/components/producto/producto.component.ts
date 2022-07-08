import { Component, Input, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
 @Input()
  public producto:ProductoModel;
  constructor() { 
    this.producto = {
      nombre:"",
      descripcion:"",
      precio:0,
      imagen:""
      
    }
  }

  ngOnInit(): void {
  }
  ingresarProducto(){


  }
  mas1(){

  }
  menos1(){
    
  }

}
