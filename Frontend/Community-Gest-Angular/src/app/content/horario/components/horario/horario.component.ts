import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { toStringEnum, Entidad, Acciones } from '@core/models/Enums';
import { Horario } from '@core/models/Horario';
import { columnasEntidades, Accion, TablaColumna, columnasDatos } from '@core/models/Tabla_Columna';
import { NotificationService } from '@core/services/notification/notification.service';
import { DialogFormComponent } from '@shared/dialog-form/dialog-form.component';
import { DialogComponent } from '@shared/dialog/dialog.component';
import { TableComponent } from '@shared/table/table.component';
import { HorarioFormComponent } from '../horario-form/horario-form.component';
import { TablaReutilizableComponent } from '@shared/tabla-reutilizable/tabla-reutilizable.component';
import { HorarioService } from '@content/horario/service/horario.service';

@Component({
  selector: 'app-horario',
  imports: [MatIconModule,MatButtonModule,TableComponent,TablaReutilizableComponent],
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})
export class HorarioComponent implements OnInit{
  protected titulo=toStringEnum(Entidad.Horario);
  protected columnas:string[]=columnasEntidades(Entidad.Horario);
  protected tablaColumnas:TablaColumna<Horario>[]=columnasDatos(Entidad.Horario);
  protected horarios:Horario[]=[];
  protected horariosDatos:Horario[]=[];
  constructor(private service:HorarioService,private dialog:MatDialog,private notificacion:NotificationService){}
  ngOnInit(): void {
    this.getHorariosTabla();
  }
  private obtenerHorarioTabla(){
    this.service.getHorarios().subscribe((data)=>{
      this.horariosDatos=data;
    })
  }
  private getHorariosTabla(){
    this.service.getHorarios().subscribe((data)=>{
      this.horarios=data;
    })
  }
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
      this.getHorariosTabla();
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
          this.getHorariosTabla();
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
      this.getHorariosTabla();
    })
  }
}
