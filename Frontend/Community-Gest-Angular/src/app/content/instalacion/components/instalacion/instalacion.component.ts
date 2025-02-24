import { Component, OnInit } from '@angular/core';
import { InstalacionService } from '../../service/instalacion.service';
import { Instalacion } from '../../../../core/models/Instalacion';
import { Accion, Acciones, columnsEntidades } from '../../../../core/models/Tabla_Columna';
import { DialogFormComponent } from '../../../../shared/dialog-form/dialog-form.component';
import { InstalacionFormComponent } from '../instalacion-form/instalacion-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { CapitalizePipe } from "../../../../core/pipe/capitalize/capitalize.pipe";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from "../../../../shared/table/table.component";
import { Entidad, toStringEnum } from '../../../../core/models/Enums';

@Component({
  selector: 'app-instalacion',
  imports: [MatIconModule, MatButtonModule, TableComponent],
  templateUrl: './instalacion.component.html',
  styleUrl: './instalacion.component.css'
})
export class InstalacionComponent implements OnInit {
  title = toStringEnum(Entidad.Instalacion);
  columns: string[] = columnsEntidades(Entidad.Instalacion);
  instalaciones: Instalacion[] = [];
  constructor(private service: InstalacionService,private dialog:MatDialog,private notificacion:NotificationService) {}
  ngOnInit() {}
  getInstalacionesTabla(){
    this.service.getsInstalacion().subscribe((data)=>{
      this.instalaciones=data
    })
  }
  protected onAction(accion: Accion){
    accion.accion==Acciones.Editar?this.actualizarInstalacion(accion.fila):
    accion.accion==Acciones.Eliminar?this.desactivarInstalacion(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
  }
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
        this.notificacion.showError(`La ${this.title}? no fue deshabilitada`,err)
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