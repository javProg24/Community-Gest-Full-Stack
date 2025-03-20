import { NgFor } from '@angular/common';
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
import { HorarioService } from '@content/horario/service/horario.service';
import { InstalacionService } from '@content/instalacion/service/instalacion.service';
import { toStringEnum, Entidad } from '@core/models/Enums';
import { Horario } from '@core/models/Horario';
import { Instalacion } from '@core/models/Instalacion';
import { NotificationService } from '@core/services/notification/notification.service';

@Component({
  selector: 'app-horario-form',
  imports: [MatCardModule,MatLabel,ReactiveFormsModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatTimepickerModule,MatOptionModule,MatSelectModule,MatNativeDateModule,NgFor,MatCheckboxModule],
  templateUrl: './horario-form.component.html',
  styleUrl: './horario-form.component.css'
})
export class HorarioFormComponent implements OnInit{
  protected titulo=toStringEnum(Entidad.Horario);
  protected isEdit=false;
  protected dias=[
    {value:'Lunes',label:'Lunes'},
    {value:'Martes',label:'Martes'},
    {value:'Miercoles',label:'Miercoles'},
    {value:'Jueves',label:'Jueves'},
    {value:'Viernes',label:'Viernes'},
    {value:'Sabado',label:'Sabado'},
    {value:'Domingo',label:'Domingo'}
];
  protected instalaciones!:Instalacion[];
  currentID?:number;
  form!:FormGroup;
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<HorarioFormComponent>,@Inject('formData') public formData:Horario|null,private notificacion:NotificationService,private horarioService:HorarioService,private instalService:InstalacionService){}
  ngOnInit(): void {
    this.form=this.fb.group({
      instalacion:["",[Validators.required]],
      dia:["",[Validators.required]],
      hora_Inicio:["",[Validators.required]],
      hora_Fin:["",[Validators.required]],
      estado:[true,[Validators.required]],
    })
    this.formData?this.editarHorario(this.formData):this.isEdit=false;
    this.obtenerInstalaciones();
  }
  private obtenerInstalaciones(){
    this.instalService.getsInstalacion().subscribe((data:Instalacion[])=>{
      this.instalaciones=data;
    })
  }
  private editarHorario(horario:Horario){
    this.isEdit=true;
    this.currentID=horario.id;
    if(!this.currentID)return;
    let instalacionSeleccionada=this.instalaciones.find((i)=>i.id==horario.instalacion_ID)
    this.form.setValue({

    })
  }
  private Horario():Horario{
    const horario:Horario={
      instalacion_ID: this.form.value.instalacion?.id,
      dia:this.form.value.dia,
      hora_Inicio:this.form.value.hora_Inicio,
      hora_Fin:this.form.value.hora_Fin,
      estado:this.form.value.estado,
      id:this.isEdit?this.currentID:0
    }
    return horario
  }
  protected onSubmit(){
    this.titulo.toLowerCase();
    this.isEdit?this.actualizarHorario(this.Horario()):this.agregarHorario(this.Horario());
  }
  private agregarHorario(horario:Horario){
    this.horarioService.addHorario(horario).subscribe({
      next:()=>{
        this.notificacion.showAgregado(`El ${this.titulo} fue asigando con su respectiva Instalacion`,this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError(`El ${this.titulo} no fue asigando con su respectiva Instalacion`,err)
      }
    })
  }
  private actualizarHorario(horario:Horario){
    if(!this.currentID)return
    this.horarioService.updateHorario(this.currentID,horario).subscribe({
      next:()=>{
        this.notificacion.showAgregado(`El ${this.titulo} fue actualizado con su respectiva Instalacion`,this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError(`El ${this.titulo} no fue actualizado con su respectiva Instalacion`,err)
      }
    })
  }
  onCancel() {
    this.notificacion.showWarning("Operacion cancelada",this.dialogRef)
  }
}
