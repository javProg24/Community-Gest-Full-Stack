import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Herramienta } from '../../../../core/models/Herramienta';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HerramientaService } from '../../service/herramienta.service';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { Entidad, toStringEnum } from '../../../../core/models/Enums';

@Component({
  selector: 'app-herramienta-form',
  imports: [MatCardModule,MatLabel,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatCheckboxModule],
  templateUrl: './herramienta-form.component.html',
  styleUrl: './herramienta-form.component.css'
})
export class HerramientaFormComponent implements OnInit{
  protected titulo=toStringEnum(Entidad.Herramienta)
  protected isEdit = false;
  currentID?: number;
  form!: FormGroup;
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<HerramientaFormComponent>,@Inject('formData')public formData:Herramienta|null,private service:HerramientaService,private notificacion:NotificationService) {}
  ngOnInit(): void {
    this.form=this.fb.group({
      nombre:["",[Validators.required]],
      cantidad:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      estado:[true,[Validators.required]],
    })
    this.formData?this.editarHerramienta(this.formData):this.isEdit=false
  }
  onsubmit(){
    this.titulo.toLowerCase()
    this.isEdit?this.actualizarHerramienta(this.Herramienta()):this.agregarHerramienta(this.Herramienta())
  }
  protected agregarHerramienta(herramienta:Herramienta){
    this.service.addHerramienta(herramienta).subscribe({
      next:()=>{
        this.notificacion.showAgregado(`La ${this.titulo} fue agregada`,this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.titulo} no fue agregada`,err)
      }
    })
  }
  protected actualizarHerramienta(herramienta:Herramienta){
    if(!this.currentID) return
    this.service.updateHerramienta(herramienta,this.currentID).subscribe({
      next:()=>{
        this.notificacion.showAgregado(`La ${this.titulo} fue actualizada`,this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.titulo} no fue actualizada`,err)
      }
    })
  }
  private editarHerramienta(datos: Herramienta) {
    this.isEdit = true;
    this.currentID = datos.id;
    this.form.setValue({
      nombre: datos.nombre,
      cantidad: datos.cantidad,
      descripcion: datos.descripcion,
      estado: datos.estado
    })
  }
  private Herramienta(): Herramienta {
    const herramienta: Herramienta = {
      ...this.form.value,
      id: this.isEdit ? this.currentID : 0,
    }
    return herramienta
  }
}