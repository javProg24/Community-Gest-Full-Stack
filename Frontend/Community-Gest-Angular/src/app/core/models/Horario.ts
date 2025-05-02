import { Instalacion } from "./Instalacion"
import { TablaColumna } from "./Tabla_Columna"

export interface Horario{
    id?:number,
    instalacion_ID:number
    dia:string,
    hora_Inicio:string,
    hora_Fin:string,
    estado:boolean,
    instalacion?:Instalacion|null
}
export class HorarioTabla{
    id?=0;
    instalacion="";
    dia=""
    horaInicio=""
    horaFin=""
    estado=true
}
export const HorarioDatos={
    id:"id",
    instalacion:"instalacion",
    dia:"dia",
    hora_Inicio:"hora_Inicio",
    hora_Fin:"hora_Fin",
    estado:"estado"
}
export const tablaHorario:TablaColumna<Horario>[]=[
    {
        label:HorarioDatos.id.toUpperCase(),
        def:HorarioDatos.id,
        content:(row)=>row.id
    },
    {
        label:HorarioDatos.instalacion,
        def:HorarioDatos.instalacion,
        content:(row)=>row.instalacion?.nombre
    },
    {
        label:HorarioDatos.dia,
        def:HorarioDatos.dia,
        content:(row)=>row.dia
    },
    {
        label:"Hora Inicio",
        def:HorarioDatos.hora_Inicio,
        content:(row)=>row.hora_Inicio
    },
    {
        label:"Hora Fin",
        def:HorarioDatos.hora_Fin,
        content:(row)=>row.hora_Fin
    },
    {
        label:HorarioDatos.estado,
        def:HorarioDatos.estado,
        content:(row)=>row.estado?"Disponible":"Ocupado"
    },
]