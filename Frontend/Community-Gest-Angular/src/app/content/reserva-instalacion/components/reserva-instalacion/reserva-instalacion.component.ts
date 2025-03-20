import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { toStringEnum, Entidad, Acciones } from '@core/models/Enums';
import { Reserva_Instalacion } from '@core/models/Reserva-Instalacion';
import { columnasEntidades, Accion, columnasDatos, TablaColumna } from '@core/models/Tabla_Columna';
import { NotificationService } from '@core/services/notification/notification.service';
import { DialogFormComponent } from '@shared/dialog-form/dialog-form.component';
import { DialogComponent } from '@shared/dialog/dialog.component';
import { TableComponent } from '@shared/table/table.component';
import { ReservaFormComponent } from '../reserva-form/reserva-form.component';
import { TablaReutilizableComponent } from '@shared/tabla-reutilizable/tabla-reutilizable.component';
import { ReservaInstalacionService } from '@content/reserva-instalacion/service/reserva-instalacion.service';

@Component({
  selector: 'app-reserva-instalacion',
  imports: [MatButtonModule, MatIconModule, TableComponent, TablaReutilizableComponent],
  templateUrl: './reserva-instalacion.component.html',
  styleUrl: './reserva-instalacion.component.css'
})
export class ReservaInstalacionComponent implements OnInit {
  title=toStringEnum(Entidad.Reserva)
  columnas:string[]=columnasEntidades(Entidad.Reserva_Instalacion)
  protected tablaColumnas:TablaColumna<Reserva_Instalacion>[]=columnasDatos(Entidad.Reserva_Instalacion)
  protected reservasDatos:Reserva_Instalacion[]=[];
  reservas:Reserva_Instalacion[]=[]
  constructor(private service:ReservaInstalacionService,private dialog:MatDialog,private notificacion:NotificationService) { }
  ngOnInit(): void {
    this.getReservasTabla()
    this.obtenerReservasTablas();
  }
  private getReservasTabla(){
    this.service.getReservas().subscribe((data)=>{
      this.reservas=data
    })
  }
  private obtenerReservasTablas(){
    this.service.getReservas().subscribe((data)=>{
      this.reservasDatos=data
    })
  }
  protected onAction(accion:Accion){
    accion.accion==Acciones.Editar?this.actualizarReserva(accion.fila):
    accion.accion==Acciones.Eliminar?this.eliminarReserva(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
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
