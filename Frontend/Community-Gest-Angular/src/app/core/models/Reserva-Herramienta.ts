import { Herramienta } from "./Herramienta";
import { obtenerDisponibilidad } from "./Metodos";
import { Tabla } from "./Tabla_Columna";
import { Usuario } from "./Usuario";

export interface Reserva_Herramienta{
    id?: number,
    usuario_ID: number,
    herramienta_ID:number,
    dia:string,
    fecha:string,
    horaInicio:string,
    horaFin:string,
    disponibilidad:string
    herramienta?:Herramienta|null
    usuario?:Usuario|null
}
export class ReservaHerramientaTabla{
    id?=0;
    usuario= "";
    herramienta="";
    dia="";
    fecha=""
    hora_Inicio="";
    hora_Fin=""
    disponibilidad=""
}
export const ReservaHerramientaDatos={
    id: "id",
    usuario: "usuario",
    herramienta: "herramienta",
    dia: "dia",
    fecha: "fecha",
    cantidad: "cantidad",
    hora_Inicio: "hora_Inicio",
    hora_Fin: "hora_Fin",
    disponibilidad: "disponibilidad"
}as const;
export const tablaReservaHerramienta:Tabla<Reserva_Herramienta>[]=[
    {
        label:ReservaHerramientaDatos.id.toUpperCase(),
        def:ReservaHerramientaDatos.id,
        content:(row)=>row.id
    },
    {
        label:ReservaHerramientaDatos.usuario,
        def:ReservaHerramientaDatos.usuario,
        content:(row)=>row.usuario?.nombre+" "+row.usuario?.apellido,
    },
    {
        label:ReservaHerramientaDatos.herramienta,
        def:ReservaHerramientaDatos.herramienta,
        content:(row)=>row.herramienta?.nombre
    },
    {
        label:ReservaHerramientaDatos.fecha,
        def:ReservaHerramientaDatos.fecha,
        content:(row)=>row.dia
    },
    {
        label:ReservaHerramientaDatos.cantidad,
        def:ReservaHerramientaDatos.cantidad,
        content:(row)=>row.herramienta?.cantidad
    },
    {
        label:"Hora Inicio",
        def:ReservaHerramientaDatos.hora_Inicio,
        content:(row)=>row.horaInicio
    },
    {
        label:"Hora Fin",
        def:ReservaHerramientaDatos.hora_Fin,
        content:(row)=>row.horaFin
    },
    {
        label:ReservaHerramientaDatos.disponibilidad,
        def:ReservaHerramientaDatos.disponibilidad,
        content:(row)=>obtenerDisponibilidad(row.disponibilidad)
    }
]

