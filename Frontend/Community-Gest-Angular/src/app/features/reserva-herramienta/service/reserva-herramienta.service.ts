import { Injectable } from '@angular/core';
import { GeneralService } from '../../../core/services/servicio-general.service';
import { Reserva_Instalacion } from '../../../core/models/Reserva-Instalacion';
import { Observable } from 'rxjs';
import { Interfaces } from '../../../core/models/I_Metodos';
import { Reserva_Herramienta } from '../../../core/models/Reserva-Herramienta';

@Injectable({
  providedIn: 'root'
})
export class ReservaHerramientaService {

  constructor(private service:GeneralService) { }
  addReserva(entidad:Reserva_Herramienta):Observable<Reserva_Herramienta>{
    return this.service.addService<Reserva_Herramienta>(Interfaces.Reserva_Herramienta,entidad)
  }
  updateReserva(entidad:Reserva_Herramienta,id:number):Observable<Reserva_Herramienta>{
    return this.service.updateService<Reserva_Herramienta>(Interfaces.Reserva_Herramienta,id,entidad)
  }
  deleteReserva(id:number):Observable<void>{
    return this.service.deleteService<void>(Interfaces.Reserva_Herramienta,id)
  }
  getsReserva():Observable<Reserva_Herramienta[]>{
    return this.service.getService<Reserva_Herramienta>(Interfaces.Reserva_Herramienta)
  }
  getIdReserva(id:number):Observable<Reserva_Herramienta[]>{
    return this.service.getIdService<Reserva_Herramienta>(Interfaces.Reserva_Herramienta,id)
  }
}
