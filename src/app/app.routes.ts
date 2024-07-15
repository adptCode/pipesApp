import { Routes } from '@angular/router';
import { BasicPageComponent } from './products/pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './products/pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './products/pages/uncommon-page/uncommon-page.component';

export const routes: Routes = [
  { path: '', component: BasicPageComponent},
  { path: 'numbers', component: NumbersPageComponent},
  { path: 'uncommon', component: UncommonPageComponent},
  { path: '**', redirectTo: '' }
];
