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

export const routes: Routes = [
    {path:'',redirectTo:'Inicio',pathMatch:'full'},
    {path:'Inicio',component:HomeComponent},
    {path:'Usuario',component:UsuarioComponent},
    {path:'Instalacion',component:InstalacionComponent},
    {path:'Herramienta',component:HerramientaComponent},
    {path:'Reserva',component:ReservaComponent},
    {path:'Reporte',component:ReporteComponent},
    {path:'Reserva-Instalacion',component:ReservaInstalacionComponent},
    {path:'Reserva-Herramienta',component:ReservaHerramientaComponent},
    {path:'Historial',component:HistorialComponent}
];
