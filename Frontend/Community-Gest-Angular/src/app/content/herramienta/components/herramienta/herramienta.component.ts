import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { toStringEnum, Entidad, Acciones } from '@core/models/Enums';
import { Herramienta } from '@core/models/Herramienta';
import { columnasEntidades, Accion, TablaColumna, columnasDatos } from '@core/models/Tabla_Columna';
import { NotificationService } from '@core/services/notification/notification.service';
import { DialogFormComponent } from '@shared/dialog-form/dialog-form.component';
import { DialogComponent } from '@shared/dialog/dialog.component';
import { TablaReutilizableComponent } from '@shared/tabla-reutilizable/tabla-reutilizable.component';
import { TableComponent } from '@shared/table/table.component';
import { HerramientaFormComponent } from '../herramienta-form/herramienta-form.component';
import { HerramientaService } from '@content/herramienta/service/herramienta.service';

@Component({
  selector: 'app-herramienta',
  imports: [MatIconModule, MatButtonModule, TableComponent, TablaReutilizableComponent],
  templateUrl: './herramienta.component.html',
  styleUrl: './herramienta.component.css'
})
export class HerramientaComponent implements OnInit{
  protected titulo = toStringEnum(Entidad.Herramienta);
  protected columnas: string[] = columnasEntidades(Entidad.Herramienta);
  protected herramientas: Herramienta[] = [];
  protected herramientasDatos:Herramienta[]=[];
  protected tablaColumnas:TablaColumna<Herramienta>[]=columnasDatos(Entidad.Herramienta);
  constructor(private service: HerramientaService,private dialog:MatDialog,private notificacion:NotificationService) {}
  ngOnInit(): void {
    this.getHerramientasTabla();
    this.obtenerHerramientasTabla();
  }
  private getHerramientasTabla(){
    this.service.getsHerramienta().subscribe((data)=>{
      this.herramientas=data
    })
  }
  private obtenerHerramientasTabla(){
    this.service.getsHerramienta().subscribe((data)=>{
      this.herramientasDatos=data;
    })
  }
  protected onAction(accion: Accion){
    accion.accion==Acciones.Editar?this.actualizarHerramienta(accion.fila):
    accion.accion==Acciones.Eliminar?this.desactivarHerramienta(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
  }
  private actualizarHerramienta(herramienta: Herramienta){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:HerramientaFormComponent,
        formData:herramienta
      },
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getHerramientasTabla()
    })
  }
  private desactivarHerramienta(id: number){
    this.titulo.toLowerCase()
    const dialogRef=this.dialog.open(DialogComponent,{
      data:{
        titulo:`Estas seguro de deshabilitar la ${this.titulo}?`
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.service.desactiveHerramienta(id).subscribe(()=>{
          this.notificacion.showEliminar(`La ${this.titulo}? fue deshabilitada`)
          this.getHerramientasTabla();
        })
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.titulo}? no fue deshabilitada`,err)
      }
    })
  }
  protected agregarHerramienta(){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:HerramientaFormComponent,
        formData:null
      },
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getHerramientasTabla()
    })
  }
}