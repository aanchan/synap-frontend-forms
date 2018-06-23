import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { AdminRoutingModule } from './admin-routing';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent
  ],
  providers: [
    AdminService,
  ]
})
export class AdminModule { }
