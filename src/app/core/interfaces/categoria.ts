import { Producto } from "./producto";

export interface categorias {
  nombre: string;
  id: number;
  imgUrl: string;
  productos: Producto[];

}

export { Producto };
