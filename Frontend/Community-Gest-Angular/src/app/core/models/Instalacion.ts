export interface Instalacion{
    id?:number,
    nombre:string,
    tipo:string,
    capacidad:number,
    descripcion:string,
    dia:string,
    hora_Inicio:string,
    hora_Fin:string,
    dispònibilidad:boolean
}  
export class InstalacionTabla{
    id?=0;
    nombre='';
    tipo='';
    capacidad='';
    descripcion='';
    dia='';
    hora_Inicio='';
    hora_Fin='';
    dispònibilidad=false;
}