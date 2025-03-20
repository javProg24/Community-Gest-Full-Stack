import { Injectable } from '@angular/core';
import { Entidad, toStringEnum } from '@core/models/Enums';
import { Instalacion } from '@core/models/Instalacion';
import { GeneralService } from '@core/services/general-service/servicio-general.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstalacionService {
  private nombreEntidad=toStringEnum(Entidad.Instalacion);
  constructor(private service:GeneralService) { }
  desactiveInstalacion(id:number):Observable<Instalacion>{
    return this.service.desactiveService<Instalacion>(this.nombreEntidad,id)
  }
  activeInstalacion(id:number):Observable<Instalacion>{
    return this.service.activeService<Instalacion>(this.nombreEntidad,id)
  }
  addInstalacion(entidad:Instalacion):Observable<Instalacion>{
    return this.service.addService<Instalacion>(this.nombreEntidad,entidad)
  }
  updateInstalacion(id:number,entidad:Instalacion):Observable<Instalacion>{
    return this.service.updateService<Instalacion>(this.nombreEntidad,id,entidad)
  }
  deleteInstalacion(id:number):Observable<void>{
    return this.service.deleteService<void>(this.nombreEntidad,id)
  }
  getsInstalacion():Observable<Instalacion[]>{
    return this.service.getService<Instalacion>(this.nombreEntidad)
  }
  getIdInstalacion(id:number):Observable<Instalacion[]>{
    return this.service.getIdService<Instalacion>(this.nombreEntidad,id)
  }
}

