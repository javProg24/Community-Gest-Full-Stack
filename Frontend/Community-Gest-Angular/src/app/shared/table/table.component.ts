import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NativeDateModule } from '@angular/material/core';
import {MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Accion, Acciones } from '../../core/models/Tabla_Columna';
@Component({
  selector: 'app-table',
  imports: [MatIconModule, NativeDateModule, MatPaginatorModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent{
  protected Editar:string=Acciones.Editar
  protected Eliminar:string=Acciones.Eliminar
  @ViewChild(MatPaginator)paginator!:MatPaginator;
  title='';
  columns:string[]=[]
  dataSource:any[]=[]
  @Input()set Titulo(title:any){
    this.title=title;
    console.log(title)
  }
  @Input()set Columnas(columns:any[]){
    this.columns=columns;
  }
  @Input()set Datos(dataSource:any[]){
    this.dataSource=dataSource;
  }
  @Output()accion:EventEmitter<Accion>=new EventEmitter();
  onAccion(accion:string,row?:any){
    this.accion.emit({accion:accion,fila:row})
  }
}
