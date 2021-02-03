import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginObj } from '../login-obj';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  inicioSesionForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  loginObj: LoginObj | undefined;

  constructor(private _router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    console.log('Usuario:' + this.inicioSesionForm.get('username')?.value);
    console.log('Contraseña:' + this.inicioSesionForm.get('password')?.value);
    this.loginObj = new LoginObj(this.inicioSesionForm.get('username')?.value, this.inicioSesionForm.get('password')?.value)
    console.log(this.loginObj)
    console.log(this.http.post('https://saborescompartidos.herokuapp.com/api/v1/auth-token', [this.loginObj.password, this.loginObj.password]))
  }

}
