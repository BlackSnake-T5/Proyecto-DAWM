import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  introJs = introJs();
  noticia: any;
  constructor() { }

  

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    fetch('https://saborescompartidos.herokuapp.com/api/v1/news/'+urlParams.get('id'))
      .then( (resultado) => {
        return resultado.json()
      }) 
      .then( (jsn) => {
        this.noticia = jsn
        console.log(this.noticia)
      })
      .catch( (error) => {
        console.log("Error ",error)
      })
      .then( () => {
        window.addEventListener('load', function() {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          if (urlParams.get('tutorial') == 'true'){
              introJs().setOption('doneLabel', 'Ir a recetas').start().oncomplete(function() {
                  window.location.href = '/recetas?tutorial=true';
              });
          }
        });
    })
    
  }

}
