import { Injectable } from "@angular/core";
import { Entidad, toStringEnum } from "@core/models/Enums";
import { tipoConfiguracion } from "@core/models/Metodos";
import { Usuario } from "@core/models/Usuario";
import { GeneralService } from "@core/services/general-service/servicio-general.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private nombreEntidad:string=toStringEnum(Entidad.Usuario);
  constructor(private service:GeneralService) { }
  addUsuario(entidad:Usuario):Observable<Usuario>{
    return this.service.addService<Usuario>(this.nombreEntidad,entidad)
  }
  updateUsuario(id:number,entidad:Usuario):Observable<Usuario>{
    return this.service.updateService<Usuario>(this.nombreEntidad,id,entidad)
  }
  deleteUsuario(id:number):Observable<void>{
    return this.service.deleteService<void>(this.nombreEntidad,id)
  }
  getUsuarios():Observable<Usuario[]>{
    return this.service.getService<Usuario>(this.nombreEntidad)
  }
  getIdUsuario(id:number):Observable<Usuario[]>{
    return this.service.getIdService<Usuario>(this.nombreEntidad,id)
  }
  desactiveUsuario(id:number):Observable<Usuario>{
    return this.service.configUpdateService<Usuario>(this.nombreEntidad,tipoConfiguracion.Desactivado,id)
  }
}
