import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { toStringEnum, Entidad, Acciones } from '@core/models/Enums';
import { Horario } from '@core/models/Horario';
import { Accion, Tabla, columnasDatos } from '@core/models/Tabla_Columna';
import { NotificationService } from '@core/services/notification/notification.service';
import { DialogFormComponent } from '@shared/dialog-form/dialog-form.component';
import { DialogComponent } from '@shared/dialog/dialog.component';
import { HorarioFormComponent } from '../horario-form/horario-form.component';
import { TablaReutilizableComponent } from '@shared/tabla-reutilizable/tabla-reutilizable.component';
import { HorarioService } from '@content/horario/service/horario.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-horario',
  imports: [MatIconModule, MatButtonModule, TablaReutilizableComponent],
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})
export class HorarioComponent implements OnInit{
  protected titulo=toStringEnum(Entidad.Horario);
  protected isVisibleHabilitar=false;
  protected isVisibleEditar=true;
  protected isVisibleEliminar=true;
  protected isLoading=true;
  protected tablaColumnas:Tabla<Horario>[]=[];
  protected horariosDatos:Horario[]=[];
  constructor(private service:HorarioService,private dialog:MatDialog,private notificacion:NotificationService){}
  ngOnInit(): void {
    this.tablaColumnas=columnasDatos(Entidad.Horario)
    this.cargarDatosHorario();
  }
  private cargarDatosHorario(){
    timer(2000).subscribe(()=>{
      this.obtenerHorarios()
    })
  }
  private obtenerHorarios(){
    this.service.getHorarios().subscribe({
      next:(data)=>{
        this.isLoading=false;
        this.horariosDatos=data
      },
      error:()=>{
        this.isLoading=false;
      }
    })
  }
  /*private getHorariosTabla(){
    this.service.getHorarios().subscribe((data)=>{
      this.horarios=data;
    })
  }*/
  protected onAction(accion:Accion){
    accion.accion==Acciones.Editar?this.actualizarHorario(accion.fila):
    accion.accion==Acciones.Eliminar?this.desactivarHorario(accion.fila.id):console.log("Accion no reconocida",accion.accion)
  }
  private actualizarHorario(horario:Horario){
    const dialogRef = this.dialog.open(DialogFormComponent,{
      data:{
        component:HorarioFormComponent,
        formData:horario
      },
      width:"600px"
    })
    dialogRef.afterClosed().subscribe(()=>{
      //this.getHorariosTabla();
      this.cargarDatosHorario();
    })
  }
  private desactivarHorario(id:number){
    this.titulo.toLowerCase();
    const dialogRef=this.dialog.open(DialogComponent,{
      data:{
        titulo:`Estas seguro de eliminar el ${this.titulo}?`
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.service.desactiveHorario(id).subscribe(()=>{
          this.notificacion.showEliminar(`La ${this.titulo} fue eliminada`);
          //this.getHorariosTabla();
          this.cargarDatosHorario();
        })
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.titulo} no fue eliminado`,err)
      }
    })
  }
  protected agregarHorario(){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:HorarioFormComponent,
        formData:null
      }
    })
    dialogRef.afterClosed().subscribe(()=>{
      //this.getHorariosTabla();
      this.cargarDatosHorario();
    })
  }
}
