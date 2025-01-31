import { Injectable } from '@angular/core';
import { GeneralService } from '../../../core/services/servicio-general.service';
import { Reserva_Instalacion } from '../../../core/models/Reserva-Instalacion';
import { Observable } from 'rxjs/internal/Observable';
import { Interfaces } from '../../../core/models/I_Metodos';

@Injectable({
  providedIn: 'root'
})
export class ReservaInstalacionService {

  constructor(private service:GeneralService) { }
    addReserva(entidad:Reserva_Instalacion):Observable<Reserva_Instalacion>{
      return this.service.addService<Reserva_Instalacion>(Interfaces.Reserva_Instalacion,entidad)
    }
    updateReserva(entidad:Reserva_Instalacion,id:number):Observable<Reserva_Instalacion>{
      return this.service.updateService<Reserva_Instalacion>(Interfaces.Reserva_Instalacion,id,entidad)
    }
    deleteReserva(id:number):Observable<void>{
      return this.service.deleteService<void>(Interfaces.Reserva_Instalacion,id)
    }
    getsReserva():Observable<Reserva_Instalacion[]>{
      return this.service.getService<Reserva_Instalacion>(Interfaces.Reserva_Instalacion)
    }
    getIdReserva(id:number):Observable<Reserva_Instalacion[]>{
      return this.service.getIdService<Reserva_Instalacion>(Interfaces.Reserva_Instalacion,id)
    }
}
