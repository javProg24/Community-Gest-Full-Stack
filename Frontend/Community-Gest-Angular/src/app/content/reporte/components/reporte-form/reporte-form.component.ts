import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { Entidad, toStringEnum } from '../../../../core/models/Enums';
import { MatDialogRef } from '@angular/material/dialog';
import { Reporte } from '../../../../core/models/Reporte';
import { ReporteService } from '../../service/reporte.service';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reporte-form',
  imports: [MatCardModule,MatLabel,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatRadioButton,MatRadioModule,MatButtonModule,NgFor],
  templateUrl: './reporte-form.component.html',
  styleUrl: './reporte-form.component.css'
})
export class ReporteFormComponent implements OnInit{
  protected estados=[
    {value:true,label:'Solucionado'},
    {value:false,label:'Sin solucionar'}
  ]
  form!: FormGroup;
  protected titulo=toStringEnum(Entidad.Reporte)
  protected isEdit = false;
  private currentID?: number;
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<ReporteFormComponent>,@Inject('formData')public formData:Reporte|null,private service:ReporteService,private notificacion:NotificationService) {}
  ngOnInit(): void {
    this.form=this.fb.group({
      titulo:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      recurso_Afectado:["",[Validators.required]],
      estado:[true,[Validators.required]],
    })
    this.formData?this.editarReporte(this.formData):this.isEdit=false
  }
  onsubmit(){
    this.titulo.toLowerCase()
    this.isEdit?this.actualizarReporte(this.Reporte()):this.agregarReporte(this.Reporte())
  }
  protected agregarReporte(reporte:Reporte){
    this.service.addReporte(reporte).subscribe({
      next:()=>{
        this.notificacion.showAgregado(`El ${this.titulo} fue agregado`,this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError(`El ${this.titulo} no fue agregado`,err)
      }
    })
  }
  protected actualizarReporte(reporte:Reporte){
    if(!this.currentID) return
    this.service.updateReporte(reporte,this.currentID).subscribe({
      next:()=>{
        this.notificacion.showAgregado(`El ${this.titulo} fue actualizado`,this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError(`El ${this.titulo} no fue actualizado`,err)
      }
    })
  }
  private editarReporte(datos: Reporte) {
    this.isEdit = true;
    this.currentID = datos.id;
    this.form.setValue({
      titulo:datos.titulo,
      descripcion:datos.descripcion,
      recurso_Afectado:datos.recurso_Afectado,
      estado:datos.estado
    })
  }
  private Reporte(): Reporte {
    const reporte: Reporte = {
      ...this.form.value,
      id:this.isEdit?this.currentID:0
    }
    return reporte
  }
  onCancel() {
    this.notificacion.showWarning("Operacion cancelada",this.dialogRef)
  }
}