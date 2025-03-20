import { Injectable } from '@angular/core';
import { toStringEnum, Entidad } from '@core/models/Enums';
import { Reporte } from '@core/models/Reporte';
import { GeneralService } from '@core/services/general-service/servicio-general.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private nombreEntidad=toStringEnum(Entidad.Reporte)
  constructor(private service:GeneralService) { }
  addReporte(entidad:Reporte):Observable<Reporte>{
    return this.service.addService<Reporte>(this.nombreEntidad,entidad)
  }
  updateReporte(entidad:Reporte,id:number):Observable<Reporte>{
    return this.service.updateService<Reporte>(this.nombreEntidad,id,entidad)
  }
  deleteReporte(id:number):Observable<void>{
    return this.service.deleteService<void>(this.nombreEntidad,id)
  }
  getsReporte():Observable<Reporte[]>{
    return this.service.getService<Reporte>(this.nombreEntidad)
  }
  getIdReporte(id:number):Observable<Reporte[]>{
    return this.service.getIdService<Reporte>(this.nombreEntidad,id)
  }
}

