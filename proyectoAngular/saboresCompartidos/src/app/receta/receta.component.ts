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
  ingredientes: any[] | undefined;
  steps: any[] | undefined;
  tags: any[] | undefined;
  comments: any[] | undefined;
  fetchReceta = 'https://saborescompartidos.herokuapp.com/api/v1/recipes/'
  introJS = introJs()
  constructor(public router: Router) {
    this.receta = this.router.getCurrentNavigation()!.extras.state;
    console.log(this.receta);
   }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(this.fetchReceta + urlParams.get('id'));
    fetch(this.fetchReceta + urlParams.get('id'))
      .then( (resultado) => {
        return resultado.json()
      }) 
      .then( (jsn) => {
        console.log(jsn.response)
        console.log(jsn.response.name)
        console.log(jsn.response.author.first_name)
        console.log(jsn.response.author.last_name)
        //titulo
        let titleCont = document.getElementById("recetaTitle")
        let title = document.createElement('h2')
        title.textContent = jsn.response.name
        title.style.color = '#47525E'
        title.style.fontSize = '40px'
        titleCont?.appendChild(title)
        //Descripcion
        let descCont = document.getElementById("recetaDesc")
        let descripcion = document.createElement('p')
        descripcion.textContent = jsn.response.description
        descripcion.style.color = '#47525E'
        descCont?.appendChild(descripcion)
        //Tiempo activo
        let tiemActCont = document.getElementById('tiempoActivo')
        let tiemAct = document.createElement('span')
        tiemAct.textContent = jsn.response.active_time
        tiemAct.style.fontWeight = '500'
        tiemAct.style.fontSize = '.6em'
        tiemActCont?.appendChild(tiemAct)
        //Tiempo preparacion
        let tiemPrepCont = document.getElementById('tiempoPreparacion')
        let tiemPrep = document.createElement('span')
        tiemPrep.textContent = jsn.response.cooking_time
        tiemPrep.style.fontWeight = '500'
        tiemPrep.style.fontSize = '.6em'
        tiemPrepCont?.appendChild(tiemPrep)
        //porciones
        let porcionCont = document.getElementById('porciones')
        let porcion = document.createElement('span')
        porcion.textContent = jsn.response.total_portions
        porcion.style.fontWeight = '500'
        porcion.style.fontSize = '.6em'
        porcionCont?.appendChild(porcion)
        //autor
        let autorCont = document.getElementById('autor')
        let autor = document.createElement('span')
        autor.textContent = "Creado por " + jsn.response.author.first_name + " " + jsn.response.author.last_name
        autor.style.fontSize = '14px'
        autor.style.color = '#47525E'
        autorCont?.appendChild(autor)
        //imagen
        let imgCont = document.getElementById('recetaImg')
        let img = document.createElement('img')
        img.src = "https://saborescompartidos.herokuapp.com" + jsn.response.image
        img.alt = jsn.response.name
        img.style.width = '100%'
        img.style.height = '100%'
        img.style.borderRadius = '3px'
        imgCont?.appendChild(img)
        return jsn.response.id
      })
      .then( (id)=>{
        console.log(this.fetchReceta + id.toString() + "/ingredients")
        fetch(this.fetchReceta + id.toString() + "/ingredients")
          .then( (resultado)=>{
            return resultado.json()
          })
          .then( (jsn)=>{
            console.log(jsn.response)
            this.ingredientes = Array.of(jsn.response)[0]
            console.log(this.ingredientes)
          })
        fetch(this.fetchReceta + id.toString() + "/steps")
          .then( (resultado)=>{
            return resultado.json()
          })
          .then( (jsn)=>{
            console.log(jsn)
            this.steps = Array.of(jsn)[0]
            console.log(this.steps)
          })
        fetch(this.fetchReceta + id.toString() + "/tags")
          .then( (resultado)=>{
            return resultado.json()
          })
          .then( (jsn)=>{
            console.log(jsn)
            this.tags = Array.of(jsn)[0]
            console.log(this.tags)
          })
        fetch(this.fetchReceta + id.toString() + "/comments")
          .then( (resultado)=>{
            return resultado.json()
          })
          .then( (jsn)=>{
            console.log(jsn)
            this.comments = Array.of(jsn.response)[0]
            console.log(this.comments)
          })
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
      introJs().setOption('doneLabel', 'Finalizar tutorial').start().oncomplete(function() {
          window.location.href = '/index';
      });
    }
  }

}
