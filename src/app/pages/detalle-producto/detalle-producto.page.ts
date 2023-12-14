import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Producto } from 'src/app/core/interfaces/producto';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage  {

  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService: CartService
    ) {
    activatedRoute.params.subscribe(params => {
      this.buscarProducto(params['nombre']);
    })
  }

  cantidad = 1;

  buscarProducto(nombreProductoABuscar:string){
    for (let i = 0; i < CATEGORIAS.length; i++) {
      const categoriaActual = CATEGORIAS[i];
      for (let j = 0; j < categoriaActual.productos.length; j++) {
        const productoActual = categoriaActual.productos[j];
        if(productoActual.nombre === nombreProductoABuscar){
          this.producto = productoActual;
        }
      }
    }
  }


  producto: Producto = {
    imagen: 'imagen',
    nombre: 'Nombre producto',
    condicion: 'condicion',
    precio: 500,
    año: 0,
    id: 0,
  
  }

}
