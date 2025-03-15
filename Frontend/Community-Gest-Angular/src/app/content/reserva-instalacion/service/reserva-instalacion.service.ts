import { Injectable } from '@angular/core';
import { Reserva_Instalacion } from '../../../core/models/Reserva-Instalacion';
import { Observable } from 'rxjs';
import { GeneralService } from '../../../core/services/general-service/servicio-general.service';
import { Entidad, toStringEnum } from '../../../core/models/Enums';

@Injectable({
  providedIn: 'root'
})
export class ReservaInstalacionService {
  private nombreEntidad=toStringEnum(Entidad.Reserva_Instalacion)
  constructor(private service:GeneralService) { }
  addReserva(entidad:Reserva_Instalacion):Observable<Reserva_Instalacion>{
    return this.service.addService<Reserva_Instalacion>(this.nombreEntidad,entidad)
  }
  updateReserva(id:number,entidad:Reserva_Instalacion):Observable<Reserva_Instalacion>{
    return this.service.updateService<Reserva_Instalacion>(this.nombreEntidad,id,entidad)
  }
  deleteReserva(id:number):Observable<void>{
    return this.service.deleteService<void>(this.nombreEntidad,id)
  }
  getReservas():Observable<Reserva_Instalacion[]>{
    return this.service.getService<Reserva_Instalacion>(this.nombreEntidad)
  }
  getIdReserva(id:number):Observable<Reserva_Instalacion[]>{
    return this.service.getIdService<Reserva_Instalacion>(this.nombreEntidad,id)
  }
}
