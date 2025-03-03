import { NgFor, NgIf, NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideNavToogle, menu } from '../../models/menu-data';
import { Entidad, toStringEnum } from '../../models/Enums';

@Component({
  selector: 'app-menu',
  imports: [MatIconModule,NgFor,RouterLink,RouterLinkActive,NgIf,NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  protected Title="Inicio"
  protected icon="home"
  protected RouterLink="Inicio"
  @Output()onToggleSidenav:EventEmitter<SideNavToogle>=new EventEmitter()
  toggleCollapse() {
    this.collapsed=!this.collapsed;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth:this.screenWith
    })
  }
  screenWith=window.innerWidth
  nav=menu
  collapsed=true
  closeSideNav() {
    this.collapsed=true
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth:this.screenWith
    })
    console.log(this.nav)
  }
}
