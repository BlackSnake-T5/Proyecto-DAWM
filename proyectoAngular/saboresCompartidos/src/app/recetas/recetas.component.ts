import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})



export class RecetasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}

