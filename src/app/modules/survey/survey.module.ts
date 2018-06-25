import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { SurveyRoutingModule } from './survey-routing';
import { SurveyComponent } from './survey.component';
import { SurveyService } from './survey.service';
import { OverviewComponent } from './components/overview/overview.component';
import { FormDisplayComponent } from './components/form-display/form-display.component';
import { TemplateLoaderComponent } from './components/template-loader/template-loader.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SurveyRoutingModule
  ],
  declarations: [
    SurveyComponent,
    OverviewComponent,
    FormDisplayComponent,
    TemplateLoaderComponent
  ],
  providers: [SurveyService]
})
export class SurveyModule { }
