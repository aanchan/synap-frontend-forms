import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  cards = [
    { title: 'Select a Survey', cols: 2, rows: 1 }
  ];

  items = [
    {
      title: 'Physical Activity Readiness form 1',
      formID: 1
    },
    {
      title: 'Physical Activity Readiness form 2',
      formID: 2
    },
    {
      title: 'Physical Activity Readiness form 3',
      formID: 3
    },
    {
      title: 'Physical Activity Readiness form 4',
      formID: 4
    },
    {
      title: 'Physical Activity Readiness form 5',
      formID: 5
    },
    {
      title: 'Physical Activity Readiness form 6',
      formID: 6
    },
    {
      title: 'Physical Activity Readiness form 7',
      formID: 7
    },
    {
      title: 'Physical Activity Readiness form 8',
      formID: 8
    },
    {
      title: 'Physical Activity Readiness form 9',
      formID: 9
    },
    {
      title: 'Physical Activity Readiness form 10',
      formID: 10
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  showInfo(item: any): void {
    console.log(item);
  }

}
