export interface Herramienta{
    id?:number;
    nombre:string;
    ubicacion:string;
    descripcion:string;
    cantidad:number;
    estado:boolean
}
export class HerramientaTabla{
    id?=0;
    nombre='';
    ubicacion='';
    descripcion='';
    cantidad=0;
    estado=false
}
export const Herramienta_Response={
    id:'id',
    nombre:'nombre',
    ubicacion:'ubicacion',
    descripcion:'descripcion',
    cantidad:'cantidad',
    estado:'estado'
}as const;