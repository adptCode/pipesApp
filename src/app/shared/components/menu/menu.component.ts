import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      { label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-dollar',
            routerLink: '/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-align-left',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          }
        ]
      },
      { label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          }
        ]
      }
    ]
  }
}

