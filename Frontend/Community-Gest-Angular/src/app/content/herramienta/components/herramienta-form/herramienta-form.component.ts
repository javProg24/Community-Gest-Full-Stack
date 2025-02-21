import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Herramienta } from '../../../../core/models/Herramienta';

@Component({
  selector: 'app-herramienta-form',
  imports: [],
  templateUrl: './herramienta-form.component.html',
  styleUrl: './herramienta-form.component.css'
})
export class HerramientaFormComponent implements OnInit{
  protected isEdit = false;
  currentID?: number;
  form!: FormGroup;
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<HerramientaFormComponent>,@Inject('formData')public formData:Herramienta|null) {}
  ngOnInit(): void {
  }
  protected addHerramienta(){
    console.log('Agregando herramienta')
  }
  protected updateHerramienta(){
    console.log('Actualizando herramienta')
  }
  protected deleteHerramienta(){
    console.log('Eliminando herramienta')
  }
}
