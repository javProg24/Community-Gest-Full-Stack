import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private notificacion:ToastrService) { }
  showAgregado(mensaje:string,dialogRef:unknown){
    this.notificacion.success(mensaje,'Exito')
    if(dialogRef instanceof MatDialogRef){
      dialogRef.close("Cerrado")
    }
  }
  showActualizado(mensaje:string,dialogRef:unknown){
    this.notificacion.success(mensaje,'Exito')
    if(dialogRef instanceof MatDialogRef){
      dialogRef.close("Cerrado")
    }
  }
  showError(mensaje:string,error:Error){
    this.notificacion.error(mensaje,error.message)
  }
  showWarning(mensaje:string,dialogRef:unknown){
    this.notificacion.warning(mensaje,'Advertencia')
    if(dialogRef instanceof MatDialogRef){
      dialogRef.close("Cerrado")
    }
  }
  showEliminar(mensaje:string,){
    this.notificacion.info(mensaje,'Eliminado')
  }
}
