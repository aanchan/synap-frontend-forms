import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { SurveyRoutingModule } from './survey-routing';
import { SurveyComponent } from './survey.component';
import { ParQComponent } from './components/par-q/par-q.component';
import { OverviewComponent } from './components/overview/overview.component';
import { IpaqComponent } from './components/ipaq/ipaq.component';
import { PhqComponent } from './components/phq/phq.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SurveyRoutingModule
  ],
  declarations: [
    SurveyComponent,
    ParQComponent,
    OverviewComponent,
    IpaqComponent,
    PhqComponent
  ]
})
export class SurveyModule { }
