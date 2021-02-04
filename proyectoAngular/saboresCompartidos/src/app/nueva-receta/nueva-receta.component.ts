import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { NuevaRecetaService } from '../nueva-receta.service';


@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.component.html',
  styleUrls: ['./nueva-receta.component.css']
})
export class NuevaRecetaComponent implements OnInit {
  constructor(private fb:FormBuilder,
              private _router: Router,
              private storageService: StorageService,
              private nuevaRecetaService: NuevaRecetaService) {}
  
  productForm?: FormGroup;
  public stepper1?: Stepper;

  next() {
    this.stepper1?.next();
  }

  onSubmit() {
    return false;
  }

  enviar(){
    var id = this.storageService.getCurrentToken();
  }

  ngOnInit() {

    this.productForm = this.fb.group({
      title: [],
      ingredients: this.fb.array([this.fb.group({ingredient:''})]),
      pasos: this.fb.array([this.fb.group({paso:''})]),
      tiempoActivo: [],
      tiempoPreparacion: [],
      porciones: [],
      tags: this.fb.array([this.fb.group({tag:''})]),
      img: []
    })

    this.stepper1 = new Stepper(document.querySelector('#stepper1') as Element, {
      linear: true,
      animation: true
    })
  }

  get img(){
    return this.productForm?.get('img');
  }

  get tiempoActivo(){
    return this.productForm?.get('tiempoActivo');
  }

  get tiempoPreparacion(){
    return this.productForm?.get('tiempoPreparacion');
  }

  get porciones(){
    return this.productForm?.get('porciones');
  }


  get ingredients() {
    return this.productForm?.get('ingredients') as FormArray;
  }
  addIngredient() {
    this.ingredients.push(this.fb.group({ingredient:''}));
  }

  deleteIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  get steps() {
    return this.productForm?.get('pasos') as FormArray;
  }
  addPaso() {
    this.steps.push(this.fb.group({paso:''}));
  }

  deletePaso(index: number) {
    this.steps.removeAt(index);
  }

  get tags(){
    return this.productForm?.get('tags') as FormArray;
  }

  addTag() {
    this.tags.push(this.fb.group({paso:''}));
  }

  deleteTag(index: number) {
    this.tags.removeAt(index);
  }
}