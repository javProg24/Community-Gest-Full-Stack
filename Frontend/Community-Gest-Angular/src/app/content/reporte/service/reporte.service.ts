import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporte } from '../../../core/models/Reporte';
import { GeneralService } from '../../../core/services/general-service/servicio-general.service';
import { Entidad, toStringEnum } from '../../../core/models/Enums';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private api=toStringEnum(Entidad.Reporte)
  constructor(private service:GeneralService) { }
  addReporte(entidad:Reporte):Observable<Reporte>{
    return this.service.addService<Reporte>(this.api,entidad)
  }
  updateReporte(entidad:Reporte,id:number):Observable<Reporte>{
    return this.service.updateService<Reporte>(this.api,id,entidad)
  }
  deleteReporte(id:number):Observable<void>{
    return this.service.deleteService<void>(this.api,id)
  }
  getsReporte():Observable<Reporte[]>{
    return this.service.getService<Reporte>(this.api)
  }
  getIdReporte(id:number):Observable<Reporte[]>{
    return this.service.getIdService<Reporte>(this.api,id)
  }
}

