import { Injectable } from '@angular/core';
import { Entidad, toStringEnum } from '../../../core/models/Enums';
import { GeneralService } from '../../../core/services/general-service/servicio-general.service';
import { Horario } from '../../../core/models/Horario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private nombreEntidad=toStringEnum(Entidad.Horario);
  constructor(private service:GeneralService) { }
  addHorario(entidad:Horario):Observable<Horario>{
    return this.service.addService<Horario>(this.nombreEntidad,entidad)
  }
  updateHorario(id:number,entidad:Horario):Observable<Horario>{
    return this.service.updateService<Horario>(this.nombreEntidad,id,entidad)
  }
  deleteHorario(id:number):Observable<void>{
    return this.service.deleteService<void>(this.nombreEntidad,id)
  }
  getHorarios():Observable<Horario[]>{
    return this.service.getService<Horario>(this.nombreEntidad)
  }
  getIdHorario(id:number):Observable<Horario[]>{
    return this.service.getIdService<Horario>(this.nombreEntidad,id)
  }
  activeHorario(id:number):Observable<Horario>{
    return this.service.activeService(this.nombreEntidad,id)
  }
  desactiveHorario(id:number):Observable<Horario>{
    return this.service.desactiveService(this.nombreEntidad,id)
  }
}
