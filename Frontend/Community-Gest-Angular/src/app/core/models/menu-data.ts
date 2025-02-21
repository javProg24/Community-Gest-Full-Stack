import { toStringEnum, Entidad } from "./Enums";

export interface SideNavToogle{
    screenWidth:number;
    collapsed:boolean;
}
export const menu =[
    {
        Title:'Inicio',
        icon:'home',
        RouterLink:'Inicio',
    },
    {
        Title:toStringEnum(Entidad.Usuario)+'s',
        icon:'person',
        RouterLink:toStringEnum(Entidad.Usuario),
    },
    {
        Title:toStringEnum(Entidad.Instalacion)+'es',
        icon:'location_on',
        RouterLink:toStringEnum(Entidad.Instalacion),
    },
    // {
    //     RouterLink:'Time',
    //     icon:'calendar_month',
    //     Title:'Horario'
    // },
    {
        Title:toStringEnum(Entidad.Herramienta)+'s',
        icon:'construction',
        RouterLink:toStringEnum(Entidad.Herramienta),
    },
    {
        Title:toStringEnum(Entidad.Reserva)+'s',
        icon:'event',
        RouterLink:toStringEnum(Entidad.Reserva),
    },
    {
        Title:toStringEnum(Entidad.Reporte)+'s',
        icon:'description',
        RouterLink:toStringEnum(Entidad.Reporte),   
    },
    {
        Title:toStringEnum(Entidad.Historial),
        icon:'history',
        RouterLink:toStringEnum(Entidad.Historial),
    },
]