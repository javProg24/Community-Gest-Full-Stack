import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { TablaReutilizableComponent } from '@shared/tabla-reutilizable/tabla-reutilizable.component';
import { TableComponent } from '@shared/table/table.component';
import { Acciones, Entidad, toStringEnum } from '@core/models/Enums';
import { Accion, columnasDatos, columnasEntidades, TablaColumna } from '@core/models/Tabla_Columna';
import { Usuario } from '@core/models/Usuario';
import { NotificationService } from '@core/services/notification/notification.service';
import { DialogFormComponent } from '@shared/dialog-form/dialog-form.component';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { DialogComponent } from '@shared/dialog/dialog.component';
import { UsuarioService } from '@content/usuario/service/usuario.service';

@Component({
  selector: 'app-usuario',
  imports: [MatButtonModule, MatIconModule, TableComponent, TablaReutilizableComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  title=toStringEnum(Entidad.Usuario)
  columns:string[]=columnasEntidades(Entidad.Usuario)
  usuarios:Usuario[]=[]
  protected usuariosDatos:Usuario[]=[];
  protected tablaColumnas:TablaColumna<Usuario>[]=columnasDatos(Entidad.Usuario);
  constructor(private service:UsuarioService,private dialog:MatDialog,private notificacion:NotificationService){}
  ngOnInit(): void {
    this.getUsuariosTabla();
    this.obtenerUsuariosTabla();
  }
  private getUsuariosTabla(){
    this.service.getUsuarios().subscribe((data)=>{
      this.usuarios=data
    })
  }
  private obtenerUsuariosTabla(){
    this.service.getUsuarios().subscribe((data)=>{
      this.usuariosDatos=data;
    })
  }
  protected onAction(accion:Accion){
    accion.accion==Acciones.Editar?this.actualizarUsuario(accion.fila):
    accion.accion==Acciones.Eliminar?this.eliminarUsuario(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
  }
  private actualizarUsuario(usuario:Usuario){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:UsuarioFormComponent,
        formData:usuario
      },
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getUsuariosTabla()
    })
  }
  private eliminarUsuario(id:number){
    const dialogRef=this.dialog.open(DialogComponent,{
      data:{
        titulo:`Estas seguro de deshabilitar la ${this.title}?`
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.service.desactiveUsuario(id).subscribe(()=>{
          this.notificacion.showEliminar(`La ${this.title}? fue eliminada`)
          this.getUsuariosTabla();
        })
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.title}? no fue eliminada`,err)
      }
    })
  }
  protected agregarUsuario() {
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:UsuarioFormComponent,
        formData:null
      },
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getUsuariosTabla();
    });
  }
}