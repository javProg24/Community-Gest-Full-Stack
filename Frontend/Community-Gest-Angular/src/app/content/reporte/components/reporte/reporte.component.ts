import { Component, OnInit } from '@angular/core';
import { Accion, columnsEntidades } from '../../../../core/models/Tabla_Columna';
import { Entidad, toStringEnum } from '../../../../core/models/Enums';
import { Reporte } from '../../../../core/models/Reporte';
import { ReporteService } from '../../service/reporte.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { DialogFormComponent } from '../../../../shared/dialog-form/dialog-form.component';
import { ReporteFormComponent } from '../reporte-form/reporte-form.component';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from '../../../../shared/table/table.component';

@Component({
  selector: 'app-reporte',
  imports: [MatIconModule,MatButtonModule,TableComponent],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent implements OnInit{
  title=toStringEnum(Entidad.Reporte)
  reportes:Reporte[]=[]
  columns:string[]=columnsEntidades(Entidad.Reporte)
  constructor(private service:ReporteService,private dialog:MatDialog,private notificacion:NotificationService ) {}
  ngOnInit(): void {
    this.getReportesTabla()
  }
  getReportesTabla(){
    this.service.getsReporte().subscribe((data)=>{
      this.reportes=data
    })
  }
  onAction(accion: Accion){
    accion.accion=='Editar'?this.actualizarReporte(accion.fila):
    accion.accion=='Eliminar'?this.eliminarReporte(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
  }
  private actualizarReporte(reporte: Reporte){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:ReporteFormComponent,
        formData:reporte
      },
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getReportesTabla()
    })
  }
  private eliminarReporte(id: number){
    this.title.toLowerCase()
    const dialogRef=this.dialog.open(DialogComponent,{
      data:{
        titulo:`Estas seguro de eliminar la ${this.title}?`
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.service.deleteReporte(id).subscribe(()=>{
          this.notificacion.showEliminar(`La ${this.title} fue eliminada`)
          this.getReportesTabla()
        })
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.title} no fue eliminada`,err)
      }
    })
  }
  protected agregarReporte(){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:ReporteFormComponent,
        formData:null
      },
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getReportesTabla()
    })
  }
}