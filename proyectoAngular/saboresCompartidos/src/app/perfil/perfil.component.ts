import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  profile: any | null | undefined;
  recipeNumber: number = 0;

  constructor( private storageService: StorageService, private _router: Router) { }

  ngOnInit(): void {
    console.log(this.storageService.getCurrentSession())
    if(this.storageService.getCurrentSession()!==null){
      this.profile = this.storageService.getCurrentSession()
      console.log(this.profile)
      fetch('https://saborescompartidos.herokuapp.com/api/v1/recipes?author=' + this.profile.id)
      .then( (response)=>{
        return response.json()
      })
      .then( (jsn)=>{
        console.log(jsn.length)
        this.recipeNumber = jsn.length
      })
      .catch( (error) => {
        console.log("Error ",error)
      })
    }else{
      this._router.navigate(['inicio_sesion']);
    }
    
  }

  logout(): void{
    this.storageService.logout()
    this._router.navigate(['inicio_sesion']);
  }

}
