import { Injectable } from '@angular/core';

import { SidenavLink } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  links: SidenavLink[] = [
    {
      iconClass: 'fa fa-home',
      text: 'Dashboard',
      url: '/admin/dashboard'
    },
    {
      iconClass: 'fa fa-question-circle',
      text: 'Surveys',
      url: '/admin/surveys'
    }
  ];

  constructor() { }

}
