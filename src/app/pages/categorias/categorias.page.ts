import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { categorias } from 'src/app/core/interfaces/categoria';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage  {



categorias:categorias | undefined;

constructor(
  private activatedRoute : ActivatedRoute
) { 
  activatedRoute.params.subscribe(params => {
    this.categorias = CATEGORIAS.find(categoria => categoria.nombre === params['nombre'])
})
}

}

