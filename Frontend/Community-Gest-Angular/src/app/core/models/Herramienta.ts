import { TablaColumna } from "./Tabla_Columna";

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
    nombre="";
    ubicacion="";
    descripcion="";
    cantidad=0;
    estado=false;
}
export const HerramientaDatos={
    id:"id",
    nombre:"nombre",
    ubicacion:"ubicacion",
    descripcion:"descripcion",
    cantidad:"cantidad",
    estado:"estado"
}as const;
export const tablaHerramienta:TablaColumna<Herramienta>[]=[
    {
        label:HerramientaDatos.id.toUpperCase(),
        def:HerramientaDatos.id,
        content:(row)=>row.id 
    },
    {
        label:HerramientaDatos.nombre,
        def:HerramientaDatos.nombre,
        content:(row)=>row.nombre 
    },
    {
        label:HerramientaDatos.ubicacion,
        def:HerramientaDatos.ubicacion,
        content:(row)=>row.ubicacion 
    },
    {
        label:HerramientaDatos.descripcion,
        def:HerramientaDatos.descripcion,
        content:(row)=>row.descripcion 
    },
    {
        label:HerramientaDatos.cantidad,
        def:HerramientaDatos.cantidad,
        content:(row)=>row.cantidad 
    },
    {
        label:HerramientaDatos.estado,
        def:HerramientaDatos.estado,
        content:(row)=>row.estado?"Disponible":"No disponible"
    },
]