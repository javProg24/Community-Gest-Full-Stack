import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Entidad, toStringEnum } from '../../models/Enums';
import { menu } from '../../models/menu-data';

@Component({
  standalone: true,
  imports: [MatCardModule, NgFor,
    RouterLink, RouterLinkActive,
    MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nav=menu
}
