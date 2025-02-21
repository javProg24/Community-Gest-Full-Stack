import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from "../../../../shared/table/table.component";
import { UsuarioService } from '../../service/usuario.service';
import { Accion, columnsEntidades } from '../../../../core/models/Tabla_Columna';
import { Entidad } from '../../../../core/models/I_Metodos';
import { Usuario } from '../../../../core/models/Usuario';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { DialogFormComponent } from '../../../../shared/dialog-form/dialog-form.component';
import { ToastrService } from 'ngx-toastr';
import { CapitalizePipe } from "../../../../core/pipe/capitalize/capitalize.pipe";

@Component({
  selector: 'app-usuario',
  imports: [MatButtonModule, MatIconModule, TableComponent, CapitalizePipe],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  title='usuario'
  columns:string[]=columnsEntidades(Entidad.Usuario)
  usuarios:Usuario[]=[]
  constructor(private services:UsuarioService,private dialog:MatDialog,private notificacion:ToastrService){}
  ngOnInit(): void {
    this.getUsuariosTabla()
  }
  private getUsuariosTabla(){
    this.services.getUsuarios().subscribe((data)=>{
      this.usuarios=data
    })
  }
  onAction(accion:Accion){
    accion.accion=='Editar'?this.actualizarUsuario(accion.fila):
    accion.accion=='Eliminar'?this.eliminarUsuario(accion.fila.id):console.warn('Accion no reconocida',accion.accion)
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
        titulo:"Estas seguro de eliminar el usuario?"
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.services.desactiveUsuario(id).subscribe(()=>{
          this.notificacion.info("El usuario fue eliminado",'Informacion')
          this.getUsuariosTabla();
        })
      },
      error:(err)=>{
        this.notificacion.error("El usuaio no se pudo eliminar",err)
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