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
      title: 'Physical Activity Readiness form',
      formID: 1,
      path: '../par-q'
    },
    {
      title: 'IPAQ form',
      formID: 2,
      path: '../ipaq'
    },
    {
      title: 'Personal Health Questionnaire Depression Scale (PHQ-8) form',
      formID: 3,
      path: '../phq'
    },
    {
      title: 'Physical Activity Readiness form 4',
      formID: 4,
      path: '../phq'
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
