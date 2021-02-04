import { Injectable } from '@angular/core';
import { ContactUs } from './contact-us.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  private hostUrl = 'https://saborescompartidos.herokuapp.com/api/v1/';
  constructor(private http: HttpClient) { }


  send(contactUsObj: ContactUs): Observable<Object>{
    console.log('hola desde ContactService')
    return this.http.post(this.hostUrl+'contact-us',contactUsObj)
          .pipe(map((response: any) => response));
            
  }
}
