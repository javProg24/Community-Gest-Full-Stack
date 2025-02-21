import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { days, Instalacion } from '../../../../core/models/Instalacion';
import { InstalacionService } from '../../service/instalacion.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatTimepickerModule} from '@angular/material/timepicker';
import { NgFor, NgIf } from '@angular/common';
import { NotificationService } from '../../../../core/services/notification/notification.service';
@Component({
  selector: 'app-instalacion-form',
  imports: [MatCardModule,MatLabel,ReactiveFormsModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatTimepickerModule,MatCheckboxModule,MatOptionModule,MatSelectModule,MatNativeDateModule,NgFor],
  templateUrl: './instalacion-form.component.html',
  styleUrl: './instalacion-form.component.css'
})
export class InstalacionFormComponent implements OnInit {
  protected isEdit = false;
  dias=days
  currentID?: number;
  form!: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<InstalacionFormComponent>, @Inject('formData') public formData: Instalacion | null, private notificacion: NotificationService, private service: InstalacionService) {}
  ngOnInit() {
    this.form=this.fb.group({
      nombre:["",[Validators.required]],
      tipo:["",[Validators.required]],
      capacidad:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      dia:["",[Validators.required]],
      hora_Inicio:["",[Validators.required]],
      hora_Fin:["",[Validators.required]],
      estado:[true,[Validators.required]],
    })
    this.formData ? this.editarInstalacion(this.formData) : this.isEdit = false;
  }
  private editarInstalacion(datos: Instalacion) {
    this.isEdit = true;
    this.currentID = datos.id;
    this.form.setValue({
      nombre: datos.nombre,
      tipo: datos.tipo,
      capacidad: datos.capacidad,
      descripcion: datos.descripcion,
      dia: datos.dia,
      hora_Inicio: datos.hora_Inicio,
      hora_Fin: datos.hora_Fin,
      estado: datos.estado
    })
  }
  private Instalacion(): Instalacion {
    const instalacion: Instalacion = {
      ...this.form.value,
      id: this.isEdit ? this.currentID : 0,
    }
    return instalacion
  }
  onSubmit() {
    this.isEdit?this.actualizarInstalacion(this.Instalacion()):this.agregarInstalacion(this.Instalacion())
  }
  private agregarInstalacion(instalacion: Instalacion) {
    this.service.addInstalacion(instalacion).subscribe({
      next:()=>{
        this.notificacion.showAgregado("El usuario fue agregado",this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError("El usuario no se agrego",err)
      }
    })
  }
  private actualizarInstalacion(instalacion: Instalacion) {
    if(!this.currentID)return
    this.service.updateInstalacion(this.currentID,instalacion).subscribe({
      next:()=>{
        this.notificacion.showActualizado("El usuario fue actualizado",this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError("El usuario no se actualizo",err)
      }
    })
  }
  onCancel() {
    this.notificacion.showWarning("Operacion cancelada",this.dialogRef)
  }
}