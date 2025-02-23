import { Injectable } from '@angular/core';
import { Herramienta } from '../../../core/models/Herramienta';
import { Observable } from 'rxjs';
import { GeneralService } from '../../../core/services/general-service/servicio-general.service';
import { Entidad, toStringEnum } from '../../../core/models/Enums';

@Injectable({
  providedIn: 'root'
})
export class HerramientaService {
  private api=toStringEnum(Entidad.Herramienta)
  constructor(private service:GeneralService) { }
  //aumentar la cantidad de herramientas
  //disminuir la cantidad de herramientas
  addHerramienta(entidad:Herramienta):Observable<Herramienta>{
    return this.service.addService<Herramienta>(this.api,entidad)
  }
  updateHerramienta(entidad:Herramienta,id:number):Observable<Herramienta>{
    return this.service.updateService<Herramienta>(this.api,id,entidad)
  }
  deleteHerramienta(id:number):Observable<void>{
    return this.service.deleteService<void>(this.api,id)
  }
  getsHerramienta():Observable<Herramienta[]>{
    return this.service.getService<Herramienta>(this.api)
  }
  getIdHerramienta(id:number):Observable<Herramienta[]>{
    return this.service.getIdService<Herramienta>(this.api,id)
  }
  desactiveHerramienta(id:number):Observable<Herramienta>{
    return this.service.desactiveService<Herramienta>(this.api,id)
  }
}

