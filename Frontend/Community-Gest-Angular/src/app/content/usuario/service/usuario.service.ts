import { Injectable } from '@angular/core';
import { Usuario } from '../../../core/models/Usuario';
import { Observable } from 'rxjs';
import { GeneralService } from '../../../core/services/general-service/servicio-general.service';
import { Entidad, toStringEnum } from '../../../core/models/Enums';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private api:string=toStringEnum(Entidad.Usuario);
  constructor(private service:GeneralService) { }
  addUsuario(entidad:Usuario):Observable<Usuario>{
    return this.service.addService<Usuario>(this.api,entidad)
  }
  updateUsuario(id:number,entidad:Usuario):Observable<Usuario>{
    return this.service.updateService<Usuario>(this.api,id,entidad)
  }
  deleteUsuario(id:number):Observable<void>{
    return this.service.deleteService<void>(this.api,id)
  }
  getUsuarios():Observable<Usuario[]>{
    return this.service.getService<Usuario>(this.api)
  }
  getIdUsuario(id:number):Observable<Usuario[]>{
    return this.service.getIdService<Usuario>(this.api,id)
  }
  desactiveUsuario(id:number):Observable<Usuario>{
    return this.service.desactiveService<Usuario>(this.api,id)
  }
}
