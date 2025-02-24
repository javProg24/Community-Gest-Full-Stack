import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from "../../../../shared/table/table.component";
import { UsuarioService } from '../../service/usuario.service';
import { Accion, Acciones, columnsEntidades } from '../../../../core/models/Tabla_Columna';
import { Usuario } from '../../../../core/models/Usuario';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { DialogFormComponent } from '../../../../shared/dialog-form/dialog-form.component';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { Entidad, toStringEnum } from '../../../../core/models/Enums';

@Component({
  selector: 'app-usuario',
  imports: [MatButtonModule, MatIconModule, TableComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  title=toStringEnum(Entidad.Usuario)
  columns:string[]=columnsEntidades(Entidad.Usuario)
  usuarios:Usuario[]=[]
  constructor(private services:UsuarioService,private dialog:MatDialog,private notificacion:NotificationService){}
  ngOnInit(): void {
    this.getUsuariosTabla()
  }
  private getUsuariosTabla(){
    this.services.getUsuarios().subscribe((data)=>{
      this.usuarios=data
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
        this.services.desactiveUsuario(id).subscribe(()=>{
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