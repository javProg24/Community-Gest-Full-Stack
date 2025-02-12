import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Entidad, toStringEnum } from '../../models/I_Metodos';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [MatCardModule,NgFor,RouterLink,RouterLinkActive,MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  entidades_card=[
    {
      Title:toStringEnum(Entidad.Usuario),
      icon:'/image/usuario.png',
      RouterLink:`/${toStringEnum(Entidad.Usuario)}`
    },
    {
      Title:toStringEnum(Entidad.Instalacion),
      icon:'/image/instalacion.png',
      RouterLink:`/${toStringEnum(Entidad.Instalacion)}`
    },
    {
      Title:toStringEnum(Entidad.Herramienta),
      icon:'/image/herramienta.png',
      RouterLink:`/${toStringEnum(Entidad.Herramienta)}`
    },
    {
      Title:toStringEnum(Entidad.Reserva),
      icon:'/image/reserva.png',
      RouterLink:`/${toStringEnum(Entidad.Reserva)}`
    },
    {
      Title:toStringEnum(Entidad.Reporte),
      icon:'/image/historial.png',
      RouterLink:`/${toStringEnum(Entidad.Reporte)}`
    },
    {
      Title:toStringEnum(Entidad.Historial),
      icon:'/image/historial.png',
      RouterLink:`/${toStringEnum(Entidad.Historial)}`
    }
  ]
}
