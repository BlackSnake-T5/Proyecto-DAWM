import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as introJs from 'intro.js';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  receta:any;
  introJS = introJs()
  constructor(public router: Router) {
    this.receta = this.router.getCurrentNavigation()!.extras.state;
      console.log(this.receta);
   }

  ngOnInit(): void {
    this.startIntroJS()
  }

  startIntroJS(): void{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get('tutorial') == 'true'){
      introJs().setOption('doneLabel', 'Finalizar tutorial').start().oncomplete(function() {
          window.location.href = '/index';
      });
    }
  }

}
