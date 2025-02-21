import { Component, OnInit } from '@angular/core';
import { Accion, columnsEntidades } from '../../../../core/models/Tabla_Columna';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { HerramientaService } from '../../service/herramienta.service';
import { Herramienta } from '../../../../core/models/Herramienta';
import { HerramientaFormComponent } from '../herramienta-form/herramienta-form.component';
import { DialogFormComponent } from '../../../../shared/dialog-form/dialog-form.component';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CapitalizePipe } from "../../../../core/pipe/capitalize/capitalize.pipe";
import { TableComponent } from "../../../../shared/table/table.component";
import { toStringEnum, Entidad } from '../../../../core/models/Enums';

@Component({
  selector: 'app-herramienta',
  imports: [MatIconModule, MatButtonModule, TableComponent],
  templateUrl: './herramienta.component.html',
  styleUrl: './herramienta.component.css'
})
export class HerramientaComponent implements OnInit{
  title = toStringEnum(Entidad.Herramienta);
  columns: string[] = columnsEntidades(Entidad.Herramienta);
  herramientas: Herramienta[] = [];
  constructor(private service: HerramientaService,private dialog:MatDialog,private notificacion:NotificationService) {}
  ngOnInit(): void {
    this.getHerramientasTabla()
  }
  getHerramientasTabla(){
    this.service.getsHerramienta().subscribe((data)=>{
      this.herramientas=data
    })
  }
  onAction(accion: Accion){
    accion.accion=='Editar'?this.actualizarHerramienta(accion.fila):
    accion.accion=='Eliminar'?this.desactivarHerramienta(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
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
    this.title.toLowerCase()
    const dialogRef=this.dialog.open(DialogComponent,{
      data:{
        titulo:`Estas seguro de deshabilitar la ${this.title}?`
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.service.desactiveHerramienta(id).subscribe(()=>{
          this.notificacion.showEliminar(`La ${this.title}? fue deshabilitada`)
          this.getHerramientasTabla();
        })
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.title}? no fue deshabilitada`,err)
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
