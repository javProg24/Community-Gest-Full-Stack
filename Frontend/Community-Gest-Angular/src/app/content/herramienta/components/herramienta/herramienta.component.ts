import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { toStringEnum, Entidad, Acciones } from '@core/models/Enums';
import { Herramienta } from '@core/models/Herramienta';
import { Accion, Tabla, columnasDatos } from '@core/models/Tabla_Columna';
import { NotificationService } from '@core/services/notification/notification.service';
import { DialogFormComponent } from '@shared/dialog-form/dialog-form.component';
import { DialogComponent } from '@shared/dialog/dialog.component';
import { TablaReutilizableComponent } from '@shared/tabla-reutilizable/tabla-reutilizable.component';
import { HerramientaFormComponent } from '../herramienta-form/herramienta-form.component';
import { HerramientaService } from '@content/herramienta/service/herramienta.service';
import { Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-herramienta',
  imports: [MatIconModule, MatButtonModule, TablaReutilizableComponent],
  templateUrl: './herramienta.component.html',
  styleUrl: './herramienta.component.css'
})
export class HerramientaComponent implements OnInit{
  private destroy$=new Subject<void>();
  protected isVisibleEditar=true;
  protected isVisibleEliminar=true;
  protected isLoading=true;
  protected titulo = toStringEnum(Entidad.Herramienta);
  protected herramientasDatos:Herramienta[]=[];
  protected tablaColumnas:Tabla<Herramienta>[]=[];
  constructor(private service: HerramientaService,private dialog:MatDialog,private notificacion:NotificationService) {}
  ngOnInit(): void {
    this.tablaColumnas=columnasDatos(Entidad.Herramienta)
    //this.getHerramientasTabla();
    this.cargarDatosHerramientas();
  }
  /*private getHerramientasTabla(){
    this.service.getsHerramienta().subscribe((data)=>{
      this.herramientas=data
    })
  }*/
  private obtenerHerramientas(){
    this.service.getsHerramienta().pipe(takeUntil(this.destroy$))
    .subscribe({
      next:(data)=>{
        console.log('Respuesta del backend recibida para herramientas');
        this.isLoading=false;
        this.herramientasDatos=data
      },
      error:()=>{
        this.isLoading=false;
      }
    })
  }
  private cargarDatosHerramientas(){
    timer(2000).pipe(takeUntil(this.destroy$)).subscribe(()=>{
      this.isLoading=false
      this.obtenerHerramientas()
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
      //this.getHerramientasTabla()
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
          //this.getHerramientasTabla();
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
      //this.getHerramientasTabla()
    })
  }
}