import { Injectable } from '@angular/core';
import { Reserva_Herramienta } from '../../../core/models/Reserva-Herramienta';
import { Observable } from 'rxjs';
import { GeneralService } from '../../../core/services/general-service/servicio-general.service';
import { Entidad, toStringEnum } from '../../../core/models/Enums';

@Injectable({
  providedIn: 'root'
})
export class ReservaHerramientaService {
  private api=toStringEnum(Entidad.Reserva_Herramienta)
  constructor(private service:GeneralService) { }
  addReserva(entidad:Reserva_Herramienta):Observable<Reserva_Herramienta>{
    return this.service.addService<Reserva_Herramienta>(this.api,entidad)
  }
  update(id:number,entidad:Reserva_Herramienta):Observable<Reserva_Herramienta>{
    return this.service.updateService<Reserva_Herramienta>(this.api,id,entidad)
  }
  deleteReserva(id:number):Observable<void>{
    return this.service.deleteService<void>(this.api,id)
  }
  getReservas():Observable<Reserva_Herramienta[]>{
    return this.service.getService<Reserva_Herramienta>(this.api)
  }
  getIdReservas(id:number):Observable<Reserva_Herramienta[]>{
    return this.service.getIdService<Reserva_Herramienta>(this.api,id)
  }
}
