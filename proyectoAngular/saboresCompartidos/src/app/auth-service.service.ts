import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginObj } from './login-obj';
import { Session } from './session.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private hostUrl = 'https://saborescompartidos.herokuapp.com/api/v1/';
  constructor(private http: HttpClient) { }


  login(loginObj: LoginObj): Observable<Session>{
    console.log('hola desde authservice')
    return this.http.post(this.hostUrl+'auth-token',loginObj)
          .pipe(map((response: any) => response));
            
  }

}
