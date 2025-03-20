import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { InstalacionService } from '@contentinstalacion/service/instalacion.service';
import { toStringEnum, Entidad, Acciones } from '@core/models/Enums';
import { Instalacion } from '@core/models/Instalacion';
import { columnasEntidades, TablaColumna, columnasDatos, Accion } from '@core/models/Tabla_Columna';
import { NotificationService } from '@core/services/notification/notification.service';
import { DialogFormComponent } from '@shared/dialog-form/dialog-form.component';
import { DialogComponent } from '@shared/dialog/dialog.component';
import { TablaReutilizableComponent } from '@shared/tabla-reutilizable/tabla-reutilizable.component';
import { TableComponent } from '@shared/table/table.component';
import { InstalacionFormComponent } from '../instalacion-form/instalacion-form.component';

@Component({
  selector: 'app-instalacion',
  imports: [MatIconModule, MatButtonModule, TableComponent, TablaReutilizableComponent],
  templateUrl: './instalacion.component.html',
  styleUrl: './instalacion.component.css'
})
export class InstalacionComponent implements OnInit {
  protected title = toStringEnum(Entidad.Instalacion);
  protected columns: string[] = columnasEntidades(Entidad.Instalacion);
  protected instalaciones: Instalacion[] = [];
  protected instalacionesDatos:Instalacion[]=[]
  protected tablaColumnas:TablaColumna<Instalacion>[]=columnasDatos(Entidad.Instalacion);
  constructor(private service: InstalacionService,private dialog:MatDialog,private notificacion:NotificationService) {}
  ngOnInit() {
    this.getInstalacionesTabla();
    this.obtenerInstalacionesTablas();
  }
  private getInstalacionesTabla(){
    this.service.getsInstalacion().subscribe((data)=>{
      this.instalaciones=data
    })
  }
  private obtenerInstalacionesTablas(){
    this.service.getsInstalacion().subscribe((data)=>{
      this.instalacionesDatos=data;
    })
  }
  protected onAction(accion: Accion){
    accion.accion==Acciones.Editar?this.actualizarInstalacion(accion.fila):
    accion.accion==Acciones.Eliminar?this.desactivarInstalacion(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
  }
  //este recibe un objeto
  private actualizarInstalacion(instalacion: Instalacion){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:InstalacionFormComponent,
        formData:instalacion
      },
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getInstalacionesTabla()
    })
  }
  //este recibe un dato
  private desactivarInstalacion(id: number){
    this.title.toLowerCase()
    const dialogRef=this.dialog.open(DialogComponent,{
      data:{
        titulo:`Estas seguro de deshabilitar la ${this.title}?`
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.service.desactiveInstalacion(id).subscribe(()=>{
          this.notificacion.showEliminar(`La ${this.title}? fue deshabilitada`)
          this.getInstalacionesTabla();
        })
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.title} no fue deshabilitada`,err)
      }
    })
  }
  protected agregarInstalacion(){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:InstalacionFormComponent,
        formData:null
      },
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getInstalacionesTabla()
    })
  }
}