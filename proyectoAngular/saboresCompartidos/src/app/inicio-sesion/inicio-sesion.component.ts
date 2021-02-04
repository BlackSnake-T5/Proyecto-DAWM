import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginObj } from '../login-obj';
import {AuthServiceService} from '../auth-service.service'
import { StorageService } from '../storage.service';
import { Session } from '../session.model';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  public submitted: Boolean = false;
  public error:  string|null = null;

  inicioSesionForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  loginObj: LoginObj | undefined;
  private redirectUrl = 'index';

  constructor(private _router: Router, 
              private storageService: StorageService,
              private authServiceService: AuthServiceService) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.submitted = true;
    this.error = null;
    this.loginObj = new LoginObj(this.inicioSesionForm.get('username')?.value, this.inicioSesionForm.get('password')?.value)
    this.authServiceService.login(this.loginObj).subscribe(
      data => this.login(data),
      error => console.log(error)
    );

  }

  private login(data: Session){
    console.log(data);
    this.storageService.setCurrentSession(data);
    this._router.navigate([this.redirectUrl]);
  }

}
