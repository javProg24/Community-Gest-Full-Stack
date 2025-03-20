import { Component, OnInit } from "@angular/core"
import { MatButtonModule } from "@angular/material/button"
import { MatDialog } from "@angular/material/dialog"
import { MatIconModule } from "@angular/material/icon"
import { toStringEnum, Entidad, Acciones } from "@core/models/Enums"
import { Reporte } from "@core/models/Reporte"
import { columnasEntidades, Accion, TablaColumna, columnasDatos } from "@core/models/Tabla_Columna"
import { NotificationService } from "@core/services/notification/notification.service"
import { DialogFormComponent } from "@shared/dialog-form/dialog-form.component"
import { DialogComponent } from "@shared/dialog/dialog.component"
import { TableComponent } from "@shared/table/table.component"
import { ReporteFormComponent } from "../reporte-form/reporte-form.component"
import { TablaReutilizableComponent } from "@shared/tabla-reutilizable/tabla-reutilizable.component"
import { ReporteService } from "@content/reporte/service/reporte.service"

@Component({
  selector: 'app-reporte',
  imports: [MatIconModule, MatButtonModule, TableComponent, TablaReutilizableComponent],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent implements OnInit{
  protected titulo=toStringEnum(Entidad.Reporte)
  protected reportes:Reporte[]=[]
  protected columnas:string[]=columnasEntidades(Entidad.Reporte)
  protected reportesDatos:Reporte[]=[];
  protected tablaColumnas:TablaColumna<Reporte>[]=columnasDatos(Entidad.Reporte);
  constructor(private service:ReporteService,private dialog:MatDialog,private notificacion:NotificationService ) {}
  ngOnInit(): void {
    this.getReportesTabla();
    this.obtenerReportesTabla();
  }
  private getReportesTabla(){
    this.service.getsReporte().subscribe((data)=>{
      this.reportes=data
    })
  }
  private obtenerReportesTabla(){
    this.service.getsReporte().subscribe((data)=>{
      this.reportesDatos=data;
    })
  }
  protected onAction(accion: Accion){
    accion.accion==Acciones.Editar?this.actualizarReporte(accion.fila):
    accion.accion==Acciones.Eliminar?this.eliminarReporte(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
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
    this.titulo.toLowerCase()
    const dialogRef=this.dialog.open(DialogComponent,{
      data:{
        titulo:`Estas seguro de eliminar la ${this.titulo}?`
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.service.deleteReporte(id).subscribe(()=>{
          this.notificacion.showEliminar(`La ${this.titulo} fue eliminada`)
          this.getReportesTabla()
        })
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.titulo} no fue eliminada`,err)
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