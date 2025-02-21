import { Component, OnInit } from '@angular/core';
import { InstalacionService } from '../../service/instalacion.service';
import { Instalacion } from '../../../../core/models/Instalacion';
import { Accion, columnsEntidades } from '../../../../core/models/Tabla_Columna';
import { Entidad } from '../../../../core/models/I_Metodos';
import { DialogFormComponent } from '../../../../shared/dialog-form/dialog-form.component';
import { InstalacionFormComponent } from '../instalacion-form/instalacion-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { NotificationService } from '../../../../shared/notification/notification.service';

@Component({
  selector: 'app-instalacion',
  imports: [],
  templateUrl: './instalacion.component.html',
  styleUrl: './instalacion.component.css'
})
export class InstalacionComponent implements OnInit {
  title = 'Instalaciones';
  columns: string[] = columnsEntidades(Entidad.Instalacion);
  instalaciones: Instalacion[] = [];
  constructor(private service: InstalacionService,private dialog:MatDialog,private notificacion:NotificationService) {}

  ngOnInit() {}
  getInstalacionesTabla(){
    this.service.getsInstalacion().subscribe((data)=>{
      this.instalaciones=data
    })
  }
  onAction(accion: Accion){
    accion.accion=='Editar'?this.actualizarInstalacion(accion.fila):
    accion.accion=='Eliminar'?this.desactivarInstalacion(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
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
    const dialogRef=this.dialog.open(DialogComponent,{
      data:{
        titulo:"Estas seguro de eliminar la instalacion?"
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.service.deleteInstalacion(id).subscribe(()=>{
          this.notificacion.showEliminar("La instalacion fue eliminada")
          this.getInstalacionesTabla();
        })
      },
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
