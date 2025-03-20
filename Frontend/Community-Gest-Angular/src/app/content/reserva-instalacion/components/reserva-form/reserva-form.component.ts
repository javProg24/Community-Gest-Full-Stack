import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { InstalacionService } from '@contentinstalacion/service/instalacion.service';
import { ReservaInstalacionService } from '@contentreserva-instalacion/service/reserva-instalacion.service';
import { UsuarioService } from '@contentusuario/service/usuario.service';
import { toStringEnum, Entidad } from '@core/models/Enums';
import { Instalacion } from '@core/models/Instalacion';
import { Reserva_Instalacion } from '@core/models/Reserva-Instalacion';
import { Usuario } from '@core/models/Usuario';
import { NotificationService } from '@core/services/notification/notification.service';

@Component({
  selector: 'app-reserva-form',
  imports: [],
  templateUrl: './reserva-form.component.html',
  styleUrl: './reserva-form.component.css'
})
export class ReservaFormComponent implements OnInit {
  protected usuarios!:Usuario[];
  protected instalaciones!:Instalacion[]
  protected isEdit=false
  private currentID?:number
  form!:FormGroup
  protected titulo=toStringEnum(Entidad.Reserva)
  constructor(private fb:FormBuilder,private dialogRef: MatDialogRef<ReservaFormComponent>,private res_service:ReservaInstalacionService,@Inject('formData')public formData:Reserva_Instalacion|null,private notificacion:NotificationService,private usu_service:UsuarioService,private inst_service:InstalacionService) { }
  ngOnInit(): void {
    this.form=this.fb.group({
      ususario:["",[Validators.required]],
      instalacion:["",[Validators.required]],
      dia:["",[Validators.required]],
      hora_Inicio:["",[Validators.required]],
      hora_Fin:["",[Validators.required]],
      fecha:["",[Validators.required]],
      disponibilidad:["",[Validators.required]]
    })
    this.formData?this.editarReserva(this.formData):this.isEdit=false
  }
  protected onSubmit(){
    this.titulo.toLowerCase()
    this.isEdit?this.actualizarReserva(this.Reserva()):this.agregarReserva(this.Reserva())
  }
  private editarReserva(datos:Reserva_Instalacion){
    this.isEdit=true
    this.currentID=datos.id
    this.form.setValue({
      
    })
  }
  private Reserva():Reserva_Instalacion{
    const reserva:Reserva_Instalacion={
      ...this.form.value,
      id:this.isEdit?this.currentID:0
    }
    return reserva
  }
  private agregarReserva(reserva:Reserva_Instalacion){
    this.res_service.addReserva(reserva).subscribe({
      next:()=>{
        this.notificacion.showAgregado(`La ${this.titulo} fue agregada`,this.dialogRef)
      },
      error:(err)=> {
        this.notificacion.showError(`La ${this.titulo} no fue agregada`,err)
      },
    })
  }
  private actualizarReserva(reserva:Reserva_Instalacion){
    if (!this.currentID) return
    this.res_service.updateReserva(this.currentID,reserva).subscribe({
      next:()=>{
        this.notificacion.showActualizado(`La ${this.titulo} fue actualizada`,this.dialogRef)
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.titulo} no fue actualizada`,err)
      }
    })
  }
  onCancel(){
    this.notificacion.showWarning("Operacion cancelada",this.dialogRef)
  }
  private lista_Usuarios(){
    this.usu_service.getUsuarios().subscribe((data)=>{
      this.usuarios=data
    })
  }
}
