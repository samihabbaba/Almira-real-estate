import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NeyireOzgokerComponent } from './neyire-ozgoker.component';

export const routes: Routes = [
  { path: '', component: NeyireOzgokerComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [NeyireOzgokerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class NeyireOzgokerModule { }
