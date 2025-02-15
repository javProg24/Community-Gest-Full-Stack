import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from "../../../../shared/table/table.component";
import { UsuarioService } from '../../service/usuario.service';
import { Accion, getEntidadesPropiedades } from '../../../../core/models/Tabla_Columna';
import { Entidad } from '../../../../core/models/I_Metodos';
import { Usuario } from '../../../../core/models/Usuario';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { DialogFormComponent } from '../../../../shared/dialog-form/dialog-form.component';

@Component({
  selector: 'app-usuario',
  imports: [MatButtonModule, MatIconModule, TableComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit{
  title='Usuarios'
  columns:string[]=[]
  usuarios:Usuario[]=[]
  constructor(private services:UsuarioService,private dialog:MatDialog){}
  ngOnInit(): void {
    this.getUsuariosTabla()
  }
  getUsuariosTabla(){
    this.columns=getEntidadesPropiedades(Entidad.Usuario)
    this.services.getUsuarios().subscribe((data)=>{
      console.log(data)
      this.usuarios=data
    })
  }
  onAction(accion:Accion){
    if(accion.accion=='Editar'){
      this.updateUsuario(accion.fila)
    }
    else if(accion.accion=='Eliminar'){
      this.deleteUsuario(accion.fila.id)
    }
  }
  updateUsuario(usuario:Usuario){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:UsuarioFormComponent,
        formData:usuario
      }
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getUsuariosTabla()
    })
  }
  deleteUsuario(id:number){
    
  }
  openDialog() {
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:UsuarioFormComponent,
        formData:null
      },
      width: '600px',
      
    })
    dialogRef.afterClosed().subscribe(resut=>{
      console.log("Se cerro",resut)
    });
  }
}
