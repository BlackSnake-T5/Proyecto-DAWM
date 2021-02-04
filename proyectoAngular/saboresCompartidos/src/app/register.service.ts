import { Injectable } from '@angular/core';
import { RegisterObj } from './registerObj.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private hostUrl = 'https://saborescompartidos.herokuapp.com/api/v1/';
  constructor(private http: HttpClient) { }


  register(registerObj: RegisterObj): Observable<Object>{
    console.log('hola desde registerService')
    return this.http.post(this.hostUrl+'users',registerObj)
          .pipe(map((response: any) => response));
            
  }
}
