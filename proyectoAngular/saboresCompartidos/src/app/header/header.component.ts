import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  startTutorial(): void{
    this._router.navigateByUrl('noticia', {skipLocationChange: true}).then(()=>{
      this._router.navigate(['index'], {
        queryParams: {'tutorial': true}
      });
    });
  }
}
