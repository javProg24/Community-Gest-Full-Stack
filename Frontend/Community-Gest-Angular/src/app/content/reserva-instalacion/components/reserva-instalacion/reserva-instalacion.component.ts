import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from '../../../../shared/table/table.component';
import { Entidad, toStringEnum } from '../../../../core/models/Enums';
import { Accion, columnsEntidades } from '../../../../core/models/Tabla_Columna';
import { Reserva_Instalacion } from '../../../../core/models/Reserva-Instalacion';
import { ReservaInstalacionService } from '../../service/reserva-instalacion.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { DialogFormComponent } from '../../../../shared/dialog-form/dialog-form.component';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { ReservaFormComponent } from '../reserva-form/reserva-form.component';

@Component({
  selector: 'app-reserva-instalacion',
  imports: [MatButtonModule,MatIconModule,TableComponent],
  templateUrl: './reserva-instalacion.component.html',
  styleUrl: './reserva-instalacion.component.css'
})
export class ReservaInstalacionComponent implements OnInit {
  title=toStringEnum(Entidad.Reserva)
  columns:string[]=columnsEntidades(Entidad.Reserva_Instalacion)
  reservas:Reserva_Instalacion[]=[]
  constructor(private service:ReservaInstalacionService,private dialog:MatDialog,private notificacion:NotificationService) { }
  ngOnInit(): void {
    this.getReservasTabla()
  }
  private getReservasTabla(){
    this.service.getReservas().subscribe((data)=>{
      this.reservas=data
    })
  }
  onAction(accion:Accion){
    accion.accion=='Editar'?this.actualizarReserva(accion.fila):
    accion.accion=='Eliminar'?this.eliminarReserva(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
  }
  private actualizarReserva(reserva:Reserva_Instalacion){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:ReservaFormComponent,
        formData:reserva
      },
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getReservasTabla()
    })
  }
  private eliminarReserva(id:number){
    const dialogRef=this.dialog.open(DialogComponent,{
      data:{
        titulo:`Estas seguro de deshabilitar la ${this.title}?`
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.service.deleteReserva(id).subscribe(()=>{
          this.notificacion.showEliminar(`La ${this.title}? fue eliminada`)
          this.getReservasTabla();
        })
      }
    })
  }
  protected agregarReserva(){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:ReservaFormComponent,
        formData:null
      },
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getReservasTabla()
    })
  }
}
