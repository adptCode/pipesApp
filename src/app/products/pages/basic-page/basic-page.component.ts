import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import localeEs from '@angular/common/locales/es';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeIt);

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [PanelModule, CardModule, CommonModule],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower: string = 'mario';
  public nameUpper: string = 'ROSSI';
  public fullName: string = 'mArIo RossI';

  public customDate: Date = new Date();



}
