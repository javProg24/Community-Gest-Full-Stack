import { Routes } from '@angular/router';
import { HomeComponent } from './core/ui/home/home.component';
import { UsuarioComponent } from './content/usuario/components/usuario/usuario.component';
import { InstalacionComponent } from './content/instalacion/components/instalacion/instalacion.component';
import { HerramientaComponent } from './content/herramienta/components/herramienta/herramienta.component';
import { ReporteComponent } from './content/reporte/components/reporte/reporte.component';
import { ReservaInstalacionComponent } from './content/reserva-instalacion/components/reserva-instalacion/reserva-instalacion.component';
import { ReservaHerramientaComponent } from './content/reserva-herramienta/components/reserva-herramienta/reserva-herramienta.component';
import { ReservaComponent } from './content/reserva/components/reserva/reserva.component';
import { HistorialComponent } from './content/historial/components/historial/historial.component';
import { Entidad, toStringEnum } from './core/models/Enums';
import { HorarioComponent } from './content/horario/components/horario/horario.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"Inicio",
        pathMatch:"full"},
    {
        path:"Inicio",
        component:HomeComponent
    },
    {
        path:toStringEnum(Entidad.Usuario),
        component:UsuarioComponent
    },
    {   
        path:toStringEnum(Entidad.Instalacion),
        component:InstalacionComponent
    },
    {
        path:toStringEnum(Entidad.Herramienta),
        component:HerramientaComponent
    },
    {
        path:toStringEnum(Entidad.Reserva),
        component:ReservaComponent
    },
    {
        path:toStringEnum(Entidad.Reporte),
        component:ReporteComponent
    },
    {
        path:toStringEnum(Entidad.Reserva_Instalacion),
        component:ReservaInstalacionComponent
    },
    {
        path:toStringEnum(Entidad.Reserva_Herramienta),
        component:ReservaHerramientaComponent
    },
    {
        path:toStringEnum(Entidad.Historial),
        component:HistorialComponent
    },
    {
        path:toStringEnum(Entidad.Horario),
        component:HorarioComponent
    },
];