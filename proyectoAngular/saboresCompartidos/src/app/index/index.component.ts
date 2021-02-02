import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  introJS = introJs();
  constructor() { }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get('tutorial') == 'true'){
      document.getElementById("navbar-container")?.setAttribute("data-intro", "Bienvenido a Sabores Compartidos")
      introJs().setOption('doneLabel', 'Ir a noticias').start().oncomplete(function() {
          window.location.href = '/noticias?tutorial=true';
      });
    }
  }

}
