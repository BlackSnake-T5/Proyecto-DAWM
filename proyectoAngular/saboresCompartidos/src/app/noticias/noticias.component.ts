import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as introJs from 'intro.js';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  introJs = introJs()
  noticias: any[] | undefined;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    
    
    fetch('https://saborescompartidos.herokuapp.com/api/v1/news')
      .then( (resultado) => {
        return resultado.json()
      }) 
      .then( (jsn) => {
        this.noticias = Array.of(jsn)[0]
        console.log(this.noticias)
      })
      .catch( (error) => {
        console.log("Error ",error)
      })
      .then( () => {
        this.startIntroJs()
      });
  }
  

  noticiaDetails(id : string){
    this._router.navigate(['noticia'], {
      queryParams: {'id': id}
    });
  }

  startIntroJs(): void{
    const queryStringNoticias = window.location.search;
    const urlParams = new URLSearchParams(queryStringNoticias);

    if (urlParams.get('tutorial') == 'true'){
        introJs().setOption('doneLabel', 'Ver noticia').start().oncomplete(function() {
            window.location.href = '/noticia?tutorial=true&id=2';
        });
    }
  }

}


