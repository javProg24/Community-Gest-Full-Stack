import { Injectable } from '@angular/core';
import { GeneralService } from '../../../core/services/servicio-general.service';
import { Observable } from 'rxjs';
import { Herramienta } from '../../../core/models/Herramienta';
import { Interfaces } from '../../../core/models/I_Metodos';

@Injectable({
  providedIn: 'root'
})
export class HerramientaService {

  constructor(private service:GeneralService) { }
  addHerramienta(entidad:Herramienta):Observable<Herramienta>{
    return this.service.addService<Herramienta>(Interfaces.Herramienta,entidad)
  }
  updateHerramienta(entidad:Herramienta,id:number):Observable<Herramienta>{
    return this.service.updateService<Herramienta>(Interfaces.Herramienta,id,entidad)
  }
  deleteHerramienta(id:number):Observable<void>{
    return this.service.deleteService<void>(Interfaces.Herramienta,id)
  }
  getsHerramienta():Observable<Herramienta[]>{
    return this.service.getService<Herramienta>(Interfaces.Herramienta)
  }
  getIdHerramienta(id:number):Observable<Herramienta[]>{
    return this.service.getIdService<Herramienta>(Interfaces.Herramienta,id)
  }
}
