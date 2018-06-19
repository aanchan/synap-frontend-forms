import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { AdminRoutingModule } from './admin-routing';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IndexComponent } from '../index/index.component';
import { PARQComponent } from '../parq/parq.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    PARQComponent
  ],
  providers: [AdminService]
})
export class AdminModule { }
