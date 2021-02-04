import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactUs } from '../contact-us.model';
import { ContactUsService } from '../contact-us.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private contactUsObj: ContactUs | undefined;
  public submitted: Boolean = false;
  public error: {code: number, message: string}|null = null;
  private redirectUrl = 'contact';
  contactForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required)
  });

  constructor(private _router: Router, private contactUsService: ContactUsService) { }

  ngOnInit(): void {
    fetch('https://data.nasa.gov/api/views/yqhp-cuk8/rows.json?accessType=DOWNLOAD')
    .then( (resultado) => {
      return resultado.json()
    }).then( (json) =>{
        let select = document.getElementById('lugar')
        for (let pais of json.data){
            let option = document.createElement('option')
            option.value = pais[8]
            option.textContent = pais[8]
            select?.appendChild(option)
        }
    }).catch( (error) => {
      console.log("Error ",error)
    })
  }

  submit(): void {
    this.submitted = true;
    this.contactUsObj = new ContactUs(
      this.contactForm.get('mensaje')?.value,
      this.contactForm.get('first_name')?.value,
      this.contactForm.get('last_name')?.value,
      this.contactForm.get('pais')?.value,
      this.contactForm.get('email')?.value
    )
    console.log(this.contactUsObj)
    this.contactUsService.send(this.contactUsObj).subscribe(
      success => this._router.navigate([this.redirectUrl]),
      error => this.error = error.error.error
    );
  }

}
