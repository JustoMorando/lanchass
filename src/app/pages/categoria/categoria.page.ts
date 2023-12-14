import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categorias';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit{
  categoriaActual: import("/Users/emiliamorando/Desktop/LanchasRosario 2/src/app/core/interfaces/categoria").categorias | undefined;



  constructor(
    private activatedRoute : ActivatedRoute
  ) { 
    activatedRoute.params.subscribe(params => {
      const categoriaEncontrada = CATEGORIAS.find(categoria => categoria.id == params['id'])
      if(categoriaEncontrada){this.categoriaActual = categoriaEncontrada}
      console.log(params['id'])
      {this.categoriaActual = CATEGORIAS[params['id']]}
    } )
  }
  ngOnInit(){
    this.categoriaActual = CATEGORIAS[0];
  }
}