import { Component, Input, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {
  
  @Input()
  public productos:ProductoModel[];
  constructor(private productosService: ProductosService) { 
    this.productos = productosService.getProductos();
    }


  ngOnInit(): void {
  }

}
