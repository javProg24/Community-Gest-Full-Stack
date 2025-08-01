import { Injectable } from '@angular/core';
import { Entidad, toStringEnum } from '@core/models/Enums';
import { Herramienta } from '@core/models/Herramienta';
import { tipoConfiguracion } from '@core/models/Metodos';
import { GeneralService } from '@core/services/general-service/servicio-general.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HerramientaService {
  private nombreEntidad=toStringEnum(Entidad.Herramienta)
  constructor(private service:GeneralService) { }
  //aumentar la cantidad de herramientas
  //disminuir la cantidad de herramientas
  addHerramienta(entidad:Herramienta):Observable<Herramienta>{
    return this.service.addService<Herramienta>(this.nombreEntidad,entidad)
  }
  updateHerramienta(entidad:Herramienta,id:number):Observable<Herramienta>{
    return this.service.updateService<Herramienta>(this.nombreEntidad,id,entidad)
  }
  deleteHerramienta(id:number):Observable<void>{
    return this.service.deleteService<void>(this.nombreEntidad,id)
  }
  getsHerramienta():Observable<Herramienta[]>{
    return this.service.getService<Herramienta>(this.nombreEntidad)
  }
  getIdHerramienta(id:number):Observable<Herramienta[]>{
    return this.service.getIdService<Herramienta>(this.nombreEntidad,id)
  }
  desactiveHerramienta(id:number):Observable<Herramienta>{
    return this.service.configUpdateService<Herramienta>(this.nombreEntidad,tipoConfiguracion.Desactivado,id)
  }
}

