import { Injectable } from '@angular/core';
import { Entidad, toStringEnum } from '@core/models/Enums';
import { Horario } from '@core/models/Horario';
import { tipoConfiguracion } from '@core/models/Metodos';
import { GeneralService } from '@core/services/general-service/servicio-general.service';
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
    return this.service.configUpdateService(this.nombreEntidad,tipoConfiguracion.Activado,id)
  }
  desactiveHorario(id:number):Observable<Horario>{
    return this.service.configUpdateService(this.nombreEntidad,tipoConfiguracion.Desactivado,id)
  }
}
