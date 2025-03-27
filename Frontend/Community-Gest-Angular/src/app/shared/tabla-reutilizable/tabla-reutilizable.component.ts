import { ChangeDetectorRef, Component, computed, EventEmitter, Input, input, OnChanges, Output, SimpleChanges, Type, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { CapitalizePipe } from '@core/pipe/capitalize/capitalize.pipe';
import { Acciones } from '@core/models/Enums';
import { Accion, TablaColumna } from '@core/models/Tabla_Columna';
import { NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'tabla-reutilizable',
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, MatIconModule, CapitalizePipe,MatProgressSpinnerModule,NgIf,MatIconModule],
  templateUrl: './tabla-reutilizable.component.html',
  styleUrl: './tabla-reutilizable.component.css'
})
export class TablaReutilizableComponent <T> implements OnChanges{
  isVisibleHabilitar=input(false)
  isVisibleEditar=input(false)
  isVisibleEliminar=input(false)
  isLoading=input(false);
  protected Habilitar=Acciones.Habilitar
  protected Editar=Acciones.Editar
  protected Eliminar=Acciones.Eliminar
  @Output()action:EventEmitter<Accion>=new EventEmitter();
  @ViewChild(MatPaginator)paginator!:MatPaginator;
  dataSource=new MatTableDataSource<T>([]);
  data=input<T[]>([]);
  columns=input<TablaColumna<T>[]>([]);
  displayedColumns = computed(() => [...this.columns().map(col => col.def), 'Acciones']);
  title='';
  @Input()set Titulo(title:string){
      this.title=title;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']?.currentValue){
        this.setData();
    }
  }
  private setData(){
    this.dataSource.data = this.data();
    console.log('Data disponible',this.data())
  }
  onAction(accion:Acciones,row?:Type<T>){
    this.action.emit({
      accion:accion,
      fila:row
    })
  }
}