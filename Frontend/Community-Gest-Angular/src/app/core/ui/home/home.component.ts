import { Component } from '@angular/core';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { Entidad, toStringEnum } from '../../models/I_Metodos';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [MatCardModule,NgFor,
    RouterLink,RouterLinkActive,
    MatButtonModule,MatIconModule,MatCardImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  entidades_card=[
    {
      Title:toStringEnum(Entidad.Usuario)+'s',
      icon:'person',
      RouterLink:`/${toStringEnum(Entidad.Usuario)}`
    },
    {
      Title:toStringEnum(Entidad.Instalacion)+'es',
      icon:'location_on',
      RouterLink:`/${toStringEnum(Entidad.Instalacion)}`
    },
    {
      Title:toStringEnum(Entidad.Herramienta)+'s',
      icon:'construction',
      RouterLink:`/${toStringEnum(Entidad.Herramienta)}`
    },
    {
      Title:toStringEnum(Entidad.Reserva)+'s',
      icon:'event',
      RouterLink:`/${toStringEnum(Entidad.Reserva)}`
    },
    {
      Title:toStringEnum(Entidad.Reporte)+'s',
      icon:'description',
      RouterLink:`/${toStringEnum(Entidad.Reporte)}`
    },
    {
      Title:toStringEnum(Entidad.Historial),
      icon:'history',
      RouterLink:`/${toStringEnum(Entidad.Historial)}`
    }
  ]
}
