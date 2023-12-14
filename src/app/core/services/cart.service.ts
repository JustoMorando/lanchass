import { Injectable, numberAttribute } from '@angular/core';
import { ProductoCarrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/producto';

@Injectable({
    providedIn: 'root'
  })
  export class CartService {
crearMensaje() {
throw new Error('Method not implemented.');
}
generarMensaje() {
throw new Error('Method not implemented.');
}
  
    carrito: ProductoCarrito[] = [];
    totalCarrito: number = 0;

  agregarProducto(producto:Producto, cantidad:number){
    const index = this.carrito.findIndex(item => item.producto.id === producto.id);
    if(index > -1) {
      this.carrito[index].cantidad++; 
    }
    else {
      this.carrito.push({
        producto: producto,
        cantidad: cantidad
      });
    }
    this.actualizarLocalstorage();
    this.calcularTotal();
  }

  modificarCantidadProducto(idProducto:number, cantidadACambiar: number){
    const index = this.carrito.findIndex(item => item.producto.id === idProducto);
    if(index > -1) {
      this.carrito[index].cantidad = cantidadACambiar; 
    }
    this.actualizarLocalstorage(); 
    this.calcularTotal();
  }

  eliminarProducto(id:number){
    this.carrito = this.carrito.filter(item => item.producto.id !== id);
    this.actualizarLocalstorage(); 
    this.calcularTotal();
  }

  limpiarCarrito(){
    this.carrito = [];
    this.actualizarLocalstorage();
    this.calcularTotal();
  }

  actualizarLocalstorage(){
    localStorage.setItem('carrito',JSON.stringify(this.carrito))
  }

  calcularTotal(){
    this.totalCarrito = 0;
    this.carrito.forEach(item => {
      this.totalCarrito = this.totalCarrito + item.producto.precio * item.cantidad;
    })
  }
}