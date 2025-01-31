export interface Herramienta{
    id?:number;
    nombre:string;
    ubicacion:string;
    descripcion:string;
    cantidad:number;
    disponibilidad:string
}
export class HerramientaTabla{
    id?=0;
    nombre='';
    ubicacion='';
    descripcion='';
    cantidad=0;
    disponibilidad=''
}