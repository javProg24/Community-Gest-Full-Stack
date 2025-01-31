import { Injectable } from '@angular/core';
import { GeneralService } from '../../../core/services/servicio-general.service';
import { Usuario } from '../../../core/models/Usuario';
import { Observable } from 'rxjs';
import { Interfaces } from '../../../core/models/I_Metodos';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private service:GeneralService) { }
  addUsuario(entidad:Usuario):Observable<Usuario>{
    return this.service.addService<Usuario>(Interfaces.Usuario,entidad)
  }
  updateUsuario(entidad:Usuario,id:number):Observable<Usuario>{
    return this.service.updateService<Usuario>(Interfaces.Usuario,id,entidad)
  }
  deleteUsuario(id:number):Observable<void>{
    return this.service.deleteService<void>(Interfaces.Usuario,id)
  }
  getsUsuario():Observable<Usuario[]>{
    return this.service.getService<Usuario>(Interfaces.Usuario)
  }
  getIdUsuario(id:number):Observable<Usuario[]>{
    return this.service.getIdService<Usuario>(Interfaces.Usuario,id)
  }
}
