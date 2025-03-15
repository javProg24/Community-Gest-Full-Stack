import { TableColumn } from "./Tabla_Columna";

export interface Instalacion{
    id?:number,
    nombre:string,
    tipo:string,
    capacidad:number,
    descripcion:string,
    estado:boolean
}  
export const InstalacionTabla={
    id:"id",
    nombre:"nombre",
    tipo:"tipo",
    capacidad:"capacidad",
    descripcion:"descripcion",
    estado:"estado"
}as const;

export const tablaInstalacion:TableColumn<Instalacion>[]=[
    {
        label:"ID",
        def:"id",
        content:(row)=>row.id
    },
    {
        label:"Nombre",
        def:"nombre",
        content:(row)=>row.nombre
    },
    {
        label:"Tipo",
        def:"tipo",
        content:(row)=>row.tipo
    },
    {
        label:"Capacidad",
        def:"capacidad",
        content:(row)=>row.capacidad
    },
    {
        label:"Descripcion",
        def:"descripcion",
        content:(row)=>row.descripcion
    },
    {
        label:"Estado",
        def:"estado",
        content:(row)=>row.estado
    }
]
