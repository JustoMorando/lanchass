import { Injectable } from '@angular/core';
import { CATEGORIAS } from '../constants/categorias';
import { categorias } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  getCategorias(): categorias[] {
    return CATEGORIAS;
  }
}