import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as introJs from 'intro.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  introJS = introJs();
  recetas: any[] | undefined;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    fetch('https://saborescompartidos.herokuapp.com/api/v1/recipes')
      .then( (resultado) => {
        return resultado.json()
      }) 
      .then( (jsn) => {
        this.recetas = Array.of(jsn)[0]
      })
      .catch( (error) => {
        console.log("Error ",error)
      })
      .then( () =>{
        this.startIntroJs()
      })
  }

  startIntroJs(): void{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get('tutorial') == 'true'){
      document.getElementById("navbar-container")?.setAttribute("data-intro", "Bienvenido a Sabores Compartidos")
      introJs().setOption('doneLabel', 'Ir a noticias').start().oncomplete(function() {
          window.location.href = '/noticias?tutorial=true';
      });
    }
  }

  recetaDetails(recetaId: string) {
    this._router.navigate(['/receta'], { 
      queryParams: { 'id': recetaId }
    });
  }

}
