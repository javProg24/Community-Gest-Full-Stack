import { TablaColumna } from "./Tabla_Columna";

export interface Reporte{
    id?: number,
    titulo: string,
    descripcion: string,
    recurso_Afectado?: string, 
    estado: boolean,
}
export class ReporteTabla{
    id?=0;
    titulo="";
    descripcion="";
    recurso_Afectado=""
    estado=true
}
export const ReporteDatos={
    id: "id",
    titulo: "titulo",
    descripcion: "descripcion",
    recurso_Afectado: "recurso_Afectado", 
    estado: "estado",
}as const;
export const tablaReporte:TablaColumna<Reporte>[]=[
    {
        label:ReporteDatos.id.toUpperCase(),
        def:ReporteDatos.id,
        content:(row)=>row.id
    },
    {
        label:ReporteDatos.titulo,
        def:ReporteDatos.titulo,
        content:(row)=>row.titulo
    },
    {
        label:ReporteDatos.descripcion,
        def:ReporteDatos.descripcion,
        content:(row)=>row.descripcion
    },
    {
        label:"Recurso Afectado",
        def:ReporteDatos.recurso_Afectado,
        content:(row)=>row.recurso_Afectado
    },
    {
        label:ReporteDatos.estado,
        def:ReporteDatos.estado,
        content:(row)=>row.estado
    }
]