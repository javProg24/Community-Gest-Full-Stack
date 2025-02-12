import { Entidad, toStringEnum } from "./I_Metodos";

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
        Title:'Usuarios',
        icon:'person',
        RouterLink:toStringEnum(Entidad.Usuario),
    },
    {
        Title:'Instalaciones',
        icon:'location_on',
        RouterLink:toStringEnum(Entidad.Instalacion),
    },
    // {
    //     RouterLink:'Time',
    //     icon:'calendar_month',
    //     Title:'Horario'
    // },
    {
        Title:'Herramientas',
        icon:'construction',
        RouterLink:toStringEnum(Entidad.Herramienta),
    },
    {
        Title:'Reservas',
        icon:'event',
        RouterLink:toStringEnum(Entidad.Reserva),
    },
    {
        Title:'Reportes',
        icon:'description',
        RouterLink:toStringEnum(Entidad.Reporte),   
    },
    {
        Title:'Historial',
        icon:'history',
        RouterLink:toStringEnum(Entidad.Historial),
    },
]