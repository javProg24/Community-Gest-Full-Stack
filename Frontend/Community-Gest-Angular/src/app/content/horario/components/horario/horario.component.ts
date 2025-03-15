import { Component, OnInit } from '@angular/core';
import { Entidad, toStringEnum } from '../../../../core/models/Enums';
import { Accion, columnasEntidades } from '../../../../core/models/Tabla_Columna';
import { Horario } from '../../../../core/models/Horario';
import { HorarioService } from '../../service/horario.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../../core/services/notification/notification.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from '../../../../shared/table/table.component';
import { DialogFormComponent } from '../../../../shared/dialog-form/dialog-form.component';
import { HorarioFormComponent } from '../horario-form/horario-form.component';
import { DialogComponent } from '../../../../shared/dialog/dialog.component';

@Component({
  selector: 'app-horario',
  imports: [MatIconModule,MatButtonModule,TableComponent],
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})
export class HorarioComponent implements OnInit{
  title=toStringEnum(Entidad.Horario);
  columns:string[]=columnasEntidades(Entidad.Horario);
  horarios:Horario[]=[];
  constructor(private service:HorarioService,private dialog:MatDialog,private notificacion:NotificationService){}
  ngOnInit(): void {
    this.getHorariosTabla();
  }
  private getHorariosTabla(){
    this.service.getHorarios().subscribe((data)=>{
      this.horarios=data;
    })
  }
  protected onAction(accion:Accion){

  }
  private actualizarHorario(horario:Horario){
    const dialogRef = this.dialog.open(DialogFormComponent,{
      data:{
        component:HorarioFormComponent,
        formData:horario
      },
      width:"600px"
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getHorariosTabla();
    })
  }
  private desactivarHorario(id:number){
    this.title.toLowerCase();
    const dialogRef=this.dialog.open(DialogComponent,{
      data:{
        titulo:`Estas seguro de eliminar el ${this.title}?`
      }
    })
    dialogRef.afterClosed().subscribe({
      next:()=>{
        this.service.desactiveHorario(id).subscribe(()=>{
          this.notificacion.showEliminar(`La ${this.title} fue eliminada`);
          this.getHorariosTabla();
        })
      },
      error:(err)=>{
        this.notificacion.showError(`La ${this.title} no fue eliminado`,err)
      }
    })
  }
  protected agregarHorario(){
    const dialogRef=this.dialog.open(DialogFormComponent,{
      data:{
        component:HorarioFormComponent,
        formData:null
      }
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getHorariosTabla();
    })
  }
}
