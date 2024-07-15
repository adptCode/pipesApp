import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [CardModule, PanelModule, CommonModule],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {

  public totalSells: number = 45151.21414;
  public percent: number = 0.5215;
  
}
