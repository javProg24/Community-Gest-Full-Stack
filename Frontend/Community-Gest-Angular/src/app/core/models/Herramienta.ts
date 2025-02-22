export interface Herramienta{
    id?:number;
    nombre:string;
    ubicacion:string;
    descripcion:string;
    cantidad:number;
    estado:boolean
}
export const HerramientaTabla={
    id:'id',
    nombre:'nombre',
    ubicacion:'ubicacion',
    descripcion:'descripcion',
    cantidad:'cantidad',
    estado:'estado'
}as const;