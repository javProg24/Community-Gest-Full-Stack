import { NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-generic-form',
  imports: [NgIf,ReactiveFormsModule,MatFormFieldModule,MatLabel,MatInputModule,MatFormField],
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css'
})
export class GenericFormComponent implements OnInit{
  @Input ({required:true}) controlKey=''
  private parentContainer=inject(ControlContainer);
  form!:FormGroup
  ngOnInit(): void {
    this.form=this.parentFormGroup;
  }
  get parentFormGroup(){
    return this.parentContainer.control?.get(this.controlKey) as FormGroup;
  }
}
