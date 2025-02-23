import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instalacion } from '../../../core/models/Instalacion';
import { GeneralService } from '../../../core/services/general-service/servicio-general.service';
import { Entidad, toStringEnum } from '../../../core/models/Enums';

@Injectable({
  providedIn: 'root'
})
export class InstalacionService {
  private api=toStringEnum(Entidad.Instalacion);
  constructor(private service:GeneralService) { }
  desactiveInstalacion(id:number):Observable<Instalacion>{
    return this.service.desactiveService<Instalacion>(this.api,id)
  }
  activeInstalacion(id:number):Observable<Instalacion>{
    return this.service.activeService<Instalacion>(this.api,id)
  }
  addInstalacion(entidad:Instalacion):Observable<Instalacion>{
    return this.service.addService<Instalacion>(this.api,entidad)
  }
  updateInstalacion(id:number,entidad:Instalacion):Observable<Instalacion>{
    return this.service.updateService<Instalacion>(this.api,id,entidad)
  }
  deleteInstalacion(id:number):Observable<void>{
    return this.service.deleteService<void>(this.api,id)
  }
  getsInstalacion():Observable<Instalacion[]>{
    return this.service.getService<Instalacion>(this.api)
  }
  getIdInstalacion(id:number):Observable<Instalacion[]>{
    return this.service.getIdService<Instalacion>(this.api,id)
  }
}

