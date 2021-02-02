import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as introJs from 'intro.js';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})



export class RecetasComponent implements OnInit {
  introJs = introJs()
  recetaId = "1234"
  constructor(private _router: Router) { }

  ngOnInit(): void {
    //introjs
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get('tutorial') == 'true'){
      introJs().setOption('doneLabel', 'Ver receta').start().oncomplete(function() {
          window.location.href = '/receta?tutorial=true';
      });
    }
    //introjs
  }

  filtrar(keyword: string): void{
    let cards = document.querySelectorAll<HTMLElement>('.card');
    for(let i=0; i <cards.length; i++){
      console.log(cards[i]);
      let card = cards[i];
      let recipe_name = card.querySelector<HTMLElement>('.recipeName')!.innerHTML.toUpperCase();
      let author = card.querySelector<HTMLElement>('.card-text')!.innerHTML.toUpperCase();
      if(recipe_name.indexOf(keyword) < 0 && author.indexOf(keyword) < 0){
          card.style.display = 'none';
      }else{
          card.style.display = 'flex';
      }
    }
  }

  search(input: any){
    console.log(input.value);
    this.filtrar(input.value.toUpperCase());
  }

  recetaDetails(recetaId: string) {



    this._router.navigate(['/receta'], { 
      state: { recetaId: recetaId }
    });
  }
}

