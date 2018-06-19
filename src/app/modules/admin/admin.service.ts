import { Injectable } from '@angular/core';

import { SidenavLink } from '../../shared/models/index';

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
      iconClass: 'fa fa-file',
      text: 'PARQ+',
      url: '/admin/parq'
    }
  ];

  constructor() { }

}
