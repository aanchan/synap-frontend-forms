import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from '../index/index.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    IndexComponent
  ]
})
export class DashboardModule { }
