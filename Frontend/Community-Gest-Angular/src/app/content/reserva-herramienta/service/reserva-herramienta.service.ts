import { Injectable } from '@angular/core';
import { Reserva_Herramienta } from '../../../core/models/Reserva-Herramienta';
import { Observable } from 'rxjs';
import { GeneralService } from '../../../core/services/general-service/servicio-general.service';
import { Entidad, toStringEnum } from '../../../core/models/Enums';

@Injectable({
  providedIn: 'root'
})
export class ReservaHerramientaService {
  private nombreEntidad=toStringEnum(Entidad.Reserva_Herramienta)
  constructor(private service:GeneralService) { }
  addReserva(entidad:Reserva_Herramienta):Observable<Reserva_Herramienta>{
    return this.service.addService<Reserva_Herramienta>(this.nombreEntidad,entidad)
  }
  update(id:number,entidad:Reserva_Herramienta):Observable<Reserva_Herramienta>{
    return this.service.updateService<Reserva_Herramienta>(this.nombreEntidad,id,entidad)
  }
  deleteReserva(id:number):Observable<void>{
    return this.service.deleteService<void>(this.nombreEntidad,id)
  }
  getReservas():Observable<Reserva_Herramienta[]>{
    return this.service.getService<Reserva_Herramienta>(this.nombreEntidad)
  }
  getIdReservas(id:number):Observable<Reserva_Herramienta[]>{
    return this.service.getIdService<Reserva_Herramienta>(this.nombreEntidad,id)
  }
}
