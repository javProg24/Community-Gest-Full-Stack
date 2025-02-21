import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Instalacion } from '../../../../core/models/Instalacion';
import { InstalacionService } from '../../service/instalacion.service';

@Component({
  selector: 'app-instalacion-form',
  imports: [],
  templateUrl: './instalacion-form.component.html',
  styleUrl: './instalacion-form.component.css'
})
export class InstalacionFormComponent implements OnInit {
  protected isEdit = false;
  currentID?: number;
  form!: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<InstalacionFormComponent>, @Inject('formData') public formData: Instalacion | null, private notificacion: ToastrService, private service: InstalacionService) {}
  ngOnInit() {
    this.form=this.fb.group({
      nombre:["",[Validators.required]],
      tipo:["",[Validators.required]],
      capacidad:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      dia:["",[Validators.required]],
      hora_Inicio:["",[Validators.required]],
      hora_Fin:["",[Validators.required]],
      estado:["",[Validators.required]],
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
        this.notificacion.success('Instalacion creada', 'Exito')
        this.dialogRef.close("Cerrado")
      },
      error:(err)=>{
        this.notificacion.error('No se pudo crear la instalacion', err)
      }
    })
  }
  private actualizarInstalacion(instalacion: Instalacion) {
    if(!this.currentID)return
    this.service.updateInstalacion(this.currentID,instalacion).subscribe({
      next:()=>{
        this.notificacion.success('Instalacion actualizada', 'Exito')
        this.dialogRef.close("Cerrado")
      },
      error:(err)=>{
        this.notificacion.error('No se pudo actualizar la instalacion', err)
      }
    })
  }
}