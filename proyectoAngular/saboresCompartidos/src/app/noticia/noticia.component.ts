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
    const queryyString = window.location.search;
    const urlParams = new URLSearchParams(queryyString);
    fetch('https://saborescompartidos.herokuapp.com/api/v1/news/'+urlParams.get('id'))
      .then( (resultado) => {
        console.log(resultado);
        return resultado.json()
      }) 
      .then( (jsn) => {
        this.noticia = jsn['response']
        console.log(this.noticia)
        console.log(this.noticia['title']);
      })
      .catch( (error) => {
        console.log("Error ",error)
      })
      .then( () => {
        const queryyyString = window.location.search;
        const urlParams = new URLSearchParams(queryyyString);
        if (urlParams.get('tutorial') == 'true'){
            introJs().setOption('doneLabel', 'Ir a recetas').start().oncomplete(function() {
                window.location.href = '/recetas?tutorial=true';
            });
        }
    })
    
  }

}
