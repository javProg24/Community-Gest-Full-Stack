import { Entidad, toStringEnum } from "./I_Metodos";

export interface SideNavToogle{
    screenWidth:number;
    collapsed:boolean;
}
export const navbarData =[
    {
        routerLink:'Inicio',
        icon:'home',
        label:'Inicio'
    },
    {
        routerLink:toStringEnum(Entidad.Usuario),
        icon:'person',
        label:'Usuarios'
    },
    {
        routerLink:toStringEnum(Entidad.Instalacion),
        icon:'location_on',
        label:'Instalaciones'
    },
    // {
    //     routerLink:'Time',
    //     icon:'calendar_month',
    //     label:'Horario'
    // },
    {
        routerLink:toStringEnum(Entidad.Herramienta),
        icon:'construction',
        label:'Herramientas'
    },
    {
        routerLink:toStringEnum(Entidad.Reserva),
        icon:'event',
        label:'Reservas'
    },
    {
        routerLink:toStringEnum(Entidad.Reporte),
        icon:'description',
        label:'Reportes'
    },
    {
        routerLink:toStringEnum(Entidad.Historial),
        icon:'history',
        label:'Historial'
    },
]