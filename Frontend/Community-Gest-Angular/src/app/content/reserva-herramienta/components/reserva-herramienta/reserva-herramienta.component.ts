import { Component, OnInit } from '@angular/core';
import { Entidad, toStringEnum } from '../../../../core/models/Enums';
import { Accion, columnsEntidades } from '../../../../core/models/Tabla_Columna';
import { Reserva_Herramienta } from '../../../../core/models/Reserva-Herramienta';
import { ReservaHerramientaService } from '../../service/reserva-herramienta.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from '../../../../shared/table/table.component';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { DialogFormComponent } from '../../../../shared/dialog-form/dialog-form.component';
import { ReservaFormComponent } from '../reserva-form/reserva-form.component';

@Component({
  selector: 'app-reserva-herramienta',
  imports: [MatButtonModule, MatIconModule, TableComponent],
  templateUrl: './reserva-herramienta.component.html',
  styleUrl: './reserva-herramienta.component.css'
})
export class ReservaHerramientaComponent implements OnInit {
  title=toStringEnum(Entidad.Reserva)
  columns:string[]=columnsEntidades(Entidad.Reserva_Herramienta)
  reservas:Reserva_Herramienta[]=[]
  constructor(private services:ReservaHerramientaService,private dialog:MatDialog,private notificacion:NotificationService) { }

  ngOnInit(): void {
  }
  private getReservasTabla(){
    this.services.getReservas().subscribe((data)=>{
      this.reservas=data
    })
  }
  onAction(accion:Accion){
    accion.accion=='Editar'?this.actualizarReserva(accion.fila):
    accion.accion=='Eliminar'?this.eliminarReserva(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
  }
  private actualizarReserva(reserva:Reserva_Herramienta){
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
        this.services.deleteReserva(id).subscribe(()=>{
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
