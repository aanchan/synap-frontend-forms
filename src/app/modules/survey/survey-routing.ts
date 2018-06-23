import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SurveyComponent } from './survey.component';
import { OverviewComponent } from './components/overview/overview.component';
import { FormDisplayComponent } from './components/form-display/form-display.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'session/:id',
        component: FormDisplayComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule {}
