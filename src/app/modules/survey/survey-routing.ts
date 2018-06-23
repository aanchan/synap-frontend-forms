import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SurveyComponent } from './survey.component';
import { ParQComponent } from './components/par-q/par-q.component';
import { OverviewComponent } from './components/overview/overview.component';
import { IpaqComponent } from './components/ipaq/ipaq.component';
import { PhqComponent } from './components/phq/phq.component';

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
        path: 'par-q',
        component: ParQComponent
      },
      {
        path: 'ipaq',
        component: IpaqComponent
      },
      {
        path: 'phq',
        component: PhqComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule {}
