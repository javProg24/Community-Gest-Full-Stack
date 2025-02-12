export interface Usuario{
    id?:number;
    cedula:number;
    nombre:string;
    apellido:string;
    correo:string;
    telefono:number;
    estado:boolean
}
export class UsuarioTabla{
    id?=0;
    cedula=0;
    nombre='';
    apellido='';
    correo='';
    telefono=0;
    estado=false;
}