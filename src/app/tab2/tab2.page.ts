import { Component } from '@angular/core';
import { CATEGORIAS } from '../core/constants/categorias';
import { categorias } from '../core/interfaces/categoria';
import { filtradorProductos } from '../core/interfaces/filtradorProductos.pipe';
import { CategoriasService } from '../core/services/categoriaServices';
import { Producto } from '../core/interfaces/producto';
import { ModalController, NavController } from '@ionic/angular';
import { DetalleProductoPageModule } from '../pages/detalle-producto/detalle-producto.module';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [filtradorProductos],
 
})
export class Tab2Page {

  producto = CATEGORIAS
 
  filtro: string ='';
  categoriaSeleccionada: string | null = null;


 constructor(private categoriasService: CategoriasService, private filterProductosPipe: filtradorProductos, private navCtrl: NavController, private modalController: ModalController) {}


 async mostrarDetalleProducto(producto: Producto): Promise<void> {
  const modal = await this.modalController.create({
    component: DetalleProductoPageModule,
    componentProps:{
      producto:producto
    }
  });
  return await modal.present();
  console.log('Producto clicado:', producto);
  // Ejemplo de navegación a la página de detalles (puedes ajustar según tu estructura de la aplicación)
  this.navCtrl.navigateForward(['/detalle-producto', producto.nombre]);
 }
ngOnInit(): void {
  this.producto = this.categoriasService.getCategorias();
}


filtrarProductos(categoria: categorias): boolean {
  if (!this.categoriaSeleccionada) {
    return true;
  }

  return categoria.nombre.toLowerCase() === this.categoriaSeleccionada.toLowerCase();
}
}