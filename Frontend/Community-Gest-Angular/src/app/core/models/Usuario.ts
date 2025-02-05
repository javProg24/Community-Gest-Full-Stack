export interface Usuario{
    id?:number;
    cedula:string;
    nombre:string;
    apellido:string;
    correo:string;
    telefono:string;
    estado:boolean
}
export class UsuarioTabla{
    id?=0;
    cedula='';
    nombre='';
    apellido='';
    correo='';
    telefono='';
    estado='';
}