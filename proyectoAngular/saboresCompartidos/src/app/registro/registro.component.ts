import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterObj } from '../registerObj.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public submitted: Boolean = false;
  private registerObj: RegisterObj | undefined;
  public error:  string|null = null;
  private redirectUrl = 'inicio_sesion';

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(private _router: Router,
              private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  onFormSubmit():void {
    this.submitted = true;
    console.log("aqui toy");
    if (this.registerForm.get('password')?.value == this.registerForm.get('confirmPassword')?.value){
      this.registerObj = new RegisterObj(
        this.registerForm.get('username')?.value,
        this.registerForm.get('password')?.value,
        this.registerForm.get('email')?.value,
        this.registerForm.get('confirmPassword')?.value
      )
  
      this.registerService.register(this.registerObj).subscribe(
        success => this._router.navigate([this.redirectUrl]),
        error => this.error = error.error.error
      );
    }else{
      this.error = "Las contraseñas no coinciden";
    }

    

    
  }

}
