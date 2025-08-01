import { Horario } from "./Horario";
import { Instalacion } from "./Instalacion";
import { obtenerDisponibilidad } from "./Metodos";
import { Tabla } from "./Tabla_Columna";
import { Usuario } from "./Usuario";

export interface Reserva_Instalacion{
    id?: number;
    usuario_ID:number,
    instalacion_ID:number,
    fecha:string,
    disponibilidad:string
    usuario?:Usuario|null
    horario?:Horario|null
}
export class ReservaInstalacionTabla{
    id?=0;
    usuario="";
    instalacion="";
    dia=""
    horaInicio=""
    horaFin=""
    fecha="";
    disponibilidad=""
}
export const ReservaInstalacionDatos={
    id: "id",
    usuario: "usuario",
    instalacion:"instalacion",
    dia:"dia",
    hora_Inicio:"hora_Inicio",
    hora_Fin:"hora_Fin",
    fecha:"fecha",
    disponibilidad:"disponibilidad"
}as const;
export const tablaReservaInstalacion:Tabla<Reserva_Instalacion>[]=[
    {
        label:ReservaInstalacionDatos.id.toUpperCase(),
        def:ReservaInstalacionDatos.id,
        content:(row)=>row.id
    },
    {
        label:ReservaInstalacionDatos.usuario,
        def:ReservaInstalacionDatos.usuario,
        content:(row)=>row.usuario?.nombre+' '+row.usuario?.apellido
    },
    {
        label:ReservaInstalacionDatos.instalacion,
        def:ReservaInstalacionDatos.instalacion,
        content:(row)=>row.horario?.instalacion?.nombre
    },
    {
        label:ReservaInstalacionDatos.dia,
        def:ReservaInstalacionDatos.dia,
        content:(row)=>row.horario?.dia
    },
    {
        label:"Hora Inicio",
        def:ReservaInstalacionDatos.hora_Inicio,
        content:(row)=>row.horario?.hora_Inicio
    },
    {
        label:"Hora Fin",
        def:ReservaInstalacionDatos.hora_Fin,
        content:(row)=>row.horario?.hora_Fin
    },
    {
        label:ReservaInstalacionDatos.fecha,
        def:ReservaInstalacionDatos.fecha,
        content:(row)=>row.fecha
    },
    {
        label:ReservaInstalacionDatos.disponibilidad,
        def:ReservaInstalacionDatos.disponibilidad,
        content:(row)=>obtenerDisponibilidad(row.disponibilidad)
    },
]