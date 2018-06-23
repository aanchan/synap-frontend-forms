import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipaq',
  templateUrl: './ipaq.component.html',
  styleUrls: ['./ipaq.component.scss']
})
export class IpaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formatDayLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 7) {
      return 7 + 'd';
    }

    return value + 'd';
  }

  formatHourLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 24) {
      return 24 + 'h';
    }

    return value + 'h';
  }

}
