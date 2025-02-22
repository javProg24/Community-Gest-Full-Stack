import { Component, Inject, OnInit } from '@angular/core';
import { Entidad, toStringEnum } from '../../../../core/models/Enums';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Reserva_Instalacion } from '../../../../core/models/Reserva-Instalacion';
import { ReservaInstalacionService } from '../../service/reserva-instalacion.service';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule, NativeDateAdapter } from '@angular/material/core';
import { MatTimepicker, MatTimepickerModule } from '@angular/material/timepicker';
import { Usuario } from '../../../../core/models/Usuario';
import { Instalacion } from '../../../../core/models/Instalacion';

@Component({
  selector: 'app-reserva-form',
  imports: [MatCardModule,MatButtonModule,MatInputModule,MatLabel,NgFor,ReactiveFormsModule,MatFormFieldModule,MatSelectModule,MatOptionModule,MatNativeDateModule,MatTimepickerModule,NgIf,],
  templateUrl: './reserva-form.component.html',
  styleUrl: './reserva-form.component.css'
})
export class ReservaFormComponent implements OnInit {
  protected usuarios!:Usuario[];
  instalaciones_Dispo!:Instalacion[];
  protected titulo=toStringEnum(Entidad.Reserva)
  protected isEdit=false
  private currentID?:number
  form!:FormGroup
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<ReservaFormComponent>,@Inject('formData')public formData:Reserva_Instalacion|null,private service:ReservaInstalacionService,private notificacion:NotificationService) { }
  ngOnInit(): void {
    this.form=this.fb.group({
      usuario:["",[Validators.required,]],
          instalacion:["",[Validators.required,]],
          dia:[""],
          horario:[""],
          fecha:["",[Validators.required,]],
          estado:["",[Validators.required,]],
    })
  }
  private editarReserva(reserva:Reserva_Instalacion){

  }
  private crearReserva(){
    
  }
  onSubmit(){
     
  }
  private actualizarReserva(reserva:Reserva_Instalacion){

  }
  private agregarReserva(){

  }
  onCancelar(){
    
  }
}
