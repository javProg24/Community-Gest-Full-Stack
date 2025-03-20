import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { InstalacionService } from '@content/instalacion/service/instalacion.service';
import { toStringEnum, Entidad } from '@core/models/Enums';
import { Instalacion } from '@core/models/Instalacion';
import { NotificationService } from '@core/services/notification/notification.service';

@Component({
  selector: 'app-instalacion-form',
  imports: [MatCardModule, MatLabel, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTimepickerModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatNativeDateModule],
  templateUrl: './instalacion-form.component.html',
  styleUrl: './instalacion-form.component.css'
})
export class InstalacionFormComponent implements OnInit {
  protected titulo = toStringEnum(Entidad.Instalacion);
  protected isEdit = false;
  currentID?: number;
  form!: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<InstalacionFormComponent>, @Inject('formData') public formData: Instalacion | null, private notificacion: NotificationService, private service: InstalacionService) {}
  ngOnInit() {
    this.form=this.fb.group({
      nombre:["",[Validators.required]],
      tipo:["",[Validators.required]],
      capacidad:["",[Validators.required]],
      descripcion:["",[Validators.required]],
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
    this.titulo.toLowerCase()
    this.isEdit?this.actualizarInstalacion(this.Instalacion()):this.agregarInstalacion(this.Instalacion())
  }
  private agregarInstalacion(instalacion: Instalacion) {
    this.service.addInstalacion(instalacion).subscribe({
      next:()=>{
        this.notificacion.showAgregado(`La ${this.titulo} fue agregada`,this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.titulo} no fue agregada`,err)
      }
    })
  }
  private actualizarInstalacion(instalacion: Instalacion) {
    if(!this.currentID)return
    this.service.updateInstalacion(this.currentID,instalacion).subscribe({
      next:()=>{
        this.notificacion.showActualizado(`La ${this.titulo} fue actualizada`,this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.titulo} no fue actualizada`,err)
      }
    })
  }
  onCancel() {
    this.notificacion.showWarning("Operacion cancelada",this.dialogRef)
  }
}