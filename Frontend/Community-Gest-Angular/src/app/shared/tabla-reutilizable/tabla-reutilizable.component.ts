import { Component, computed, EventEmitter, Input, input, OnChanges, Output, SimpleChanges, Type, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { CapitalizePipe } from '@core/pipe/capitalize/capitalize.pipe';
import { Acciones } from '@core/models/Enums';
import { Accion, TablaColumna } from '@core/models/Tabla_Columna';

@Component({
  selector: 'tabla-reutilizable',
  imports: [MatTableModule,MatButtonModule,MatPaginatorModule,MatIconModule,CapitalizePipe],
  templateUrl: './tabla-reutilizable.component.html',
  styleUrl: './tabla-reutilizable.component.css'
})
export class TablaReutilizableComponent <T> implements OnChanges{
  isLoading=input(false);
  protected Editar=Acciones.Editar
  protected Eliminar=Acciones.Eliminar
  @Output()action:EventEmitter<Accion>=new EventEmitter();
  @ViewChild(MatPaginator)paginator!:MatPaginator;
  dataSource=new MatTableDataSource<T>([]);
  data=input<T[]>([]);
  columns=input<TablaColumna<T>[]>([]);
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
  onAction(accion:Acciones,row?:Type<T>){
    this.action.emit({
      accion:accion,
      fila:row
    })
  }
}
