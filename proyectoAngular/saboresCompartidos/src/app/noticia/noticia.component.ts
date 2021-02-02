import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  introJs = introJs()
  constructor() { }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get('tutorial') == 'true'){
        introJs().setOption('doneLabel', 'Ir a recetas').start().oncomplete(function() {
            window.location.href = '/recetas?tutorial=true';
        });
    }
  }

}
