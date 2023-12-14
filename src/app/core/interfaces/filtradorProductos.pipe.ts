import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from './producto';

@Pipe({
  name: 'filtradorProductos',
})
export class filtradorProductos implements PipeTransform {
  transform(productos: Producto[], filtro: string): Producto[] {
    if (!productos || !filtro) {
      return productos;
    }

    return productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(filtro.toLowerCase())
    );
  }
}

