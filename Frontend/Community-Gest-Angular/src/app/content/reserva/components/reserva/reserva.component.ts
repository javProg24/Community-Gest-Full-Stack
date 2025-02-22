import { Component } from '@angular/core';
import { Entidad, toStringEnum } from '../../../../core/models/Enums';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-reserva',
  imports: [MatCardModule,NgFor,MatIconModule,MatButtonModule,RouterLink,RouterLinkActive],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {
  protected tipos=[
    {
      Title:'Reserva de Instalaciones',
      icon:'location_on',
      routerLink:`/${toStringEnum(Entidad.Reserva_Instalacion)}`,
    },
    {
      Title:'Reserva de Herramientas',
      icon:'construction',
      routerLink:`/${toStringEnum(Entidad.Reserva_Herramienta)}`
    },
  ]
}
