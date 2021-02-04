import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  public logged: boolean = false;

  constructor(private _router: Router,
              private storageService: StorageService) {}

  ngOnInit(): void {
    console.log(this.storageService.getCurrentSession())
    if (this.storageService.getCurrentSession() != null){
      this.logged = true;
    }
      
  }

  ngOnChanges(): void {
    console.log(this.storageService.getCurrentSession())
    if (this.storageService.getCurrentSession() != null){
      this.logged = true;
    }
      
  }

  startTutorial(): void{
    this._router.navigateByUrl('noticia', {skipLocationChange: true}).then(()=>{
      this._router.navigate(['index'], {
        queryParams: {'tutorial': true}
      });
    });
  }
}
