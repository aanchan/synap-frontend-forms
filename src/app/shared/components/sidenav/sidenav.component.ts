import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SidenavLink } from '../../models/index';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input()
  links: SidenavLink[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateLink(event: Event, link: string): void {
    this.router.navigate([link]);
  }

}
