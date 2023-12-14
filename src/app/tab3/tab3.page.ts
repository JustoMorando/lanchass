import { Component } from '@angular/core';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public cartService:CartService) {}


  crearMensaje():string{
    let parteProductos = '';
    this.cartService.carrito.forEach(productoCarrito => {
      const mensajeProducto = `- ${productoCarrito.producto.nombre} - ${productoCarrito.cantidad} 
    
`;
      parteProductos = parteProductos + mensajeProducto;
    })
    const primeraParte = "https://wa.me/+5493413056228?text=";
    const segundaParte = `Hola, me gustaria hacer un pedidio:
${parteProductos}

Mis datos:
- Nombre: NOMBRE
- Dirección: DIRECCIÓN
- Telefono: TELEFONO
- Forma de Pago: EFECTIVO O MERCADO PAGO
- Detalles: ESPECIFIQUE QUIERE COMPRAR
`
;
    const mensaje = encodeURI(primeraParte+segundaParte);
     return mensaje;
  }

  realizarPedido(){
    window.open(this.crearMensaje(), '_blank');
    this.cartService.limpiarCarrito();
  }
}

