import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginObj } from './login-obj';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }


  login(loginObj: LoginObj): Observable<Object>{
    console.log('hola desde authservice')
    return this.http.post('https://saborescompartidos.herokuapp.com/api/v1/auth-token', loginObj)
  }

}
