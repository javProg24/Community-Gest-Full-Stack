import { Instalacion } from "./Instalacion";
import { Usuario } from "./Usuario";

export interface Reserva_Instalacion{
    id?: number;
    usuario_ID:number,
    instalacion_ID:number,
    fecha:string,
    disponibilidad:string
    usuario?:Usuario|null
    instalacion?:Instalacion|null
}
export class Reserva_Instalacion_Tabla{
    id?=0;
    usuario="";
    instalacion="";
    dia=""
    horaInicio=""
    horaFin=""
    fecha="";
    disponibilidad=""
}
export const Reserva_Instalacion_Response={
    id: 'id',
    usuario: 'usuario',
    instalacion:'instalacion',
    dia:'dia',
    hora_Inicio:'hora_Inicio',
    hora_Fin:'hora_Fin',
    fecha:'fecha',
    disponibilidad:'disponibilidad'
}as const;