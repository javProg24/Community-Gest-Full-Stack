import { Component, Inject, OnInit } from '@angular/core';
import { Entidad, toStringEnum } from '../../../../core/models/Enums';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Reserva_Herramienta } from '../../../../core/models/Reserva-Herramienta';
import { ReservaHerramientaService } from '../../service/reserva-herramienta.service';
import { NotificationService } from '../../../../core/services/notification/notification.service';

@Component({
  selector: 'app-reserva-form',
  imports: [],
  templateUrl: './reserva-form.component.html',
  styleUrl: './reserva-form.component.css'
})
export class ReservaFormComponent implements OnInit {
  protected titulo=toStringEnum(Entidad.Reserva)
  protected isEdit=false
  private currentID?:number
  form!:FormGroup
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<ReservaFormComponent>,@Inject('formData')public formData:Reserva_Herramienta|null,private service:ReservaHerramientaService,private notificacion:NotificationService) { }
  ngOnInit(): void {
  }
  private editarReserva(reserva:Reserva_Herramienta){

  }
  private crearReserva(){
    
  }
  onSubmit(){
     
  }
  private actualizarReserva(reserva:Reserva_Herramienta){

  }
  private agregarReserva(){

  }
  onCancelar(){
    
  }
}
