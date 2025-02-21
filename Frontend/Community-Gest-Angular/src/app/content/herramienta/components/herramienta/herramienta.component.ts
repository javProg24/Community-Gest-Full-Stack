import { Component, OnInit } from '@angular/core';
import { Entidad } from '../../../../core/models/I_Metodos';
import { Accion, columnsEntidades } from '../../../../core/models/Tabla_Columna';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { HerramientaService } from '../../service/herramienta.service';
import { Herramienta } from '../../../../core/models/Herramienta';
import { HerramientaFormComponent } from '../herramienta-form/herramienta-form.component';
import { DialogFormComponent } from '../../../../shared/dialog-form/dialog-form.component';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-herramienta',
  imports: [],
  templateUrl: './herramienta.component.html',
  styleUrl: './herramienta.component.css'
})
export class HerramientaComponent implements OnInit{
  title = 'herramienta';
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
    const dialogRef=this.dialog.open(DialogComponent,{
      data:{
        titulo:"Estas seguro de eliminar la herramienta?"
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.service.desactiveHerramienta(id).subscribe(()=>{
          this.notificacion.showEliminar("La herramienta fue eliminada")
          this.getHerramientasTabla();
        })
      }
    })
  }
  protected addHerramienta(){
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
