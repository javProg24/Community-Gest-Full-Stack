import { Instalacion } from "./Instalacion"

export interface Horario{
    id?:number,
    instalacion_ID:number
    dia:string,
    hora_Inicio:string,
    hora_Fin:string,
    estado:boolean,
    instalacion?:Instalacion|null
}
export const HorarioTabla={
    id:"id",
    instalacion:"instalacion",
    dia:"dia",
    hora_Inicio:"hora_Inicio",
    hora_Fin:"hora_Fin",
    estado:"estado"
}
export const days=[
    {value:'Lunes',label:'Lunes'},
    {value:'Martes',label:'Martes'},
    {value:'Miercoles',label:'Miercoles'},
    {value:'Jueves',label:'Jueves'},
    {value:'Viernes',label:'Viernes'},
    {value:'Sabado',label:'Sabado'},
    {value:'Domingo',label:'Domingo'}
]