import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  introJs = introJs()
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('load', function() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      if (urlParams.get('tutorial') == 'true'){
          introJs().setOption('doneLabel', 'Ver noticia').start().oncomplete(function() {
              window.location.href = '/noticia?tutorial=true';
          });
      }
    });
  }

}


