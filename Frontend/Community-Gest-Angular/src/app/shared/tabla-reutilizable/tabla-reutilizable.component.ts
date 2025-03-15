import { Component, computed, EventEmitter, Input, input, OnChanges, Output, SimpleChanges, Type, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Accion, Acciones, TableColumn } from '../../core/models/Tabla_Columna';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'tabla-reutilizable',
  imports: [MatTableModule,MatButtonModule,MatPaginatorModule,MatIconModule],
  templateUrl: './tabla-reutilizable.component.html',
  styleUrl: './tabla-reutilizable.component.css'
})
export class TablaReutilizableComponent <T> implements OnChanges{
  isLoading=input(false);
  protected Editar:string=Acciones.Editar
  protected Eliminar:string=Acciones.Eliminar
  @Output()action:EventEmitter<Accion>=new EventEmitter();
  @ViewChild(MatPaginator)paginator!:MatPaginator;
  dataSource=new MatTableDataSource<T>([]);
  data=input<T[]>([]);
  columns=input<TableColumn<T>[]>([]);
  displayedColumns = computed(() => [...this.columns().map(col => col.def), 'Acciones']);
  title='';
  @Input()set Titulo(title:any){
      this.title=title;
      console.log(title)
    }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data'].currentValue)
      this.setData();  
  }
  private setData(){
    this.dataSource.data = this.data();
  }
  onAction(accion:string,row?:Type<T>){
    this.action.emit({
      accion:accion,
      fila:row
    })
  }
}
