import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { toStringEnum, Entidad, Acciones } from '@core/models/Enums';
import { Reserva_Herramienta } from '@core/models/Reserva-Herramienta';
import { Accion, Tabla, columnasDatos } from '@core/models/Tabla_Columna';
import { NotificationService } from '@core/services/notification/notification.service';
import { DialogFormComponent } from '@shared/dialog-form/dialog-form.component';
import { DialogComponent } from '@shared/dialog/dialog.component';
import { ReservaFormComponent } from '../reserva-form/reserva-form.component';
import { TablaReutilizableComponent } from '@shared/tabla-reutilizable/tabla-reutilizable.component';
import { ReservaHerramientaService } from '@content/reserva-herramienta/service/reserva-herramienta.service';
import { Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-reserva-herramienta',
  imports: [MatButtonModule, MatIconModule, TablaReutilizableComponent],
  templateUrl: './reserva-herramienta.component.html',
  styleUrl: './reserva-herramienta.component.css'
})
export class ReservaHerramientaComponent implements OnInit {
  private destroy$=new Subject<void>();
  protected isVisibleEditar:boolean=true;
  protected isVisibleEliminar:boolean=true;
  protected isLoading:boolean=true;
  title=toStringEnum(Entidad.Reserva)
  protected reservasDatos:Reserva_Herramienta[]=[]
  protected tablaColumnas:Tabla<Reserva_Herramienta>[]=[]
  constructor(private services:ReservaHerramientaService,private dialog:MatDialog,private notificacion:NotificationService) { }

  ngOnInit(): void {
    this.tablaColumnas=columnasDatos(Entidad.Reserva_Herramienta)
    this.cargarDatosReservas()
  }
  private cargarDatosReservas(){
    timer(2000).pipe(takeUntil(this.destroy$)).subscribe(()=>{
      this.getReservasTabla()
    })
  }
  private getReservasTabla(){
    this.services.getReservas().pipe(takeUntil(this.destroy$)).subscribe({
      next:(data)=>{
        this.isLoading=false;
        this.reservasDatos=data
      },
      error:()=>{
        this.isLoading=false;
      }
    })
  }
  onAction(accion:Accion){
    accion.accion==Acciones.Editar?this.actualizarReserva(accion.fila):
    accion.accion==Acciones.Eliminar?this.eliminarReserva(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
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
      //this.getReservasTabla()
      this.cargarDatosReservas()
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
          //this.getReservasTabla();
          this.cargarDatosReservas()
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
      //this.getReservasTabla()
      this.cargarDatosReservas()
    })
  }
}
