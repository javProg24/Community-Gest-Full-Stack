import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from "../../../../shared/table/table.component";
import { UsuarioService } from '../../service/usuario.service';
import { Accion, getEntidadesPropiedades } from '../../../../core/models/Tabla_Columna';
import { Entidad } from '../../../../core/models/I_Metodos';
import { Usuario } from '../../../../core/models/Usuario';

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
  constructor(private services:UsuarioService){}
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
      console.log(accion.fila)
    }
    else if(accion.accion=='Eliminar'){
      console.log(accion.fila.id)
    }
  }
}
