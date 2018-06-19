import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material';

import { AdminService } from './admin.service';
import { SidenavLink } from '../../shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  sidenavLinks: SidenavLink[];

  mode = 'side';

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.sidenavLinks = this.adminService.links;
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }
}
