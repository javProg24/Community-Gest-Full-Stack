import { Injectable } from '@angular/core';
import { GeneralService } from '../../../core/services/servicio-general.service';
import { Observable } from 'rxjs';
import { Instalacion } from '../../../core/models/Instalacion';
import { Interfaces } from '../../../core/models/I_Metodos';

@Injectable({
  providedIn: 'root'
})
export class InstalacionService {
  constructor(private service:GeneralService) { }
  addInstalacion(entidad:Instalacion):Observable<Instalacion>{
    return this.service.addService<Instalacion>(Interfaces.Instalacion,entidad)
  }
  updateInstalacion(id:number,entidad:Instalacion):Observable<Instalacion>{
    return this.service.updateService<Instalacion>(Interfaces.Instalacion,id,entidad)
  }
  deleteInstalacion(id:number):Observable<void>{
    return this.service.deleteService<void>(Interfaces.Instalacion,id)
  }
  getsInstalacion():Observable<Instalacion[]>{
    return this.service.getService<Instalacion>(Interfaces.Instalacion)
  }
  getIdInstalacion(id:number):Observable<Instalacion[]>{
    return this.service.getIdService<Instalacion>(Interfaces.Instalacion,id)
  }
}
