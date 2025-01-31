import { Injectable } from '@angular/core';
import { GeneralService } from '../../../core/services/servicio-general.service';
import { Reporte } from '../../../core/models/Reporte';
import { Observable } from 'rxjs';
import { Interfaces } from '../../../core/models/I_Metodos';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private service:GeneralService) { }
  addReporte(entidad:Reporte):Observable<Reporte>{
    return this.service.addService<Reporte>(Interfaces.Reporte,entidad)
  }
  updateReporte(entidad:Reporte,id:number):Observable<Reporte>{
    return this.service.updateService<Reporte>(Interfaces.Reporte,id,entidad)
  }
  deleteReporte(id:number):Observable<void>{
    return this.service.deleteService<void>(Interfaces.Reporte,id)
  }
  getsReporte():Observable<Reporte[]>{
    return this.service.getService<Reporte>(Interfaces.Reporte)
  }
  getIdReporte(id:number):Observable<Reporte[]>{
    return this.service.getIdService<Reporte>(Interfaces.Reporte,id)
  }
}
