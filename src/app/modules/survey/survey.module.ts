import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { SurveyRoutingModule } from './survey-routing';
import { SurveyComponent } from './survey.component';
import { ParQComponent } from './components/par-q/par-q.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SurveyRoutingModule
  ],
  declarations: [
    SurveyComponent,
    ParQComponent,
    OverviewComponent
  ]
})
export class SurveyModule { }
