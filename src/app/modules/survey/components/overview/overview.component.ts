import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  formToRender: string;

  showPart2 = false;

  cards = [
    { title: 'Select a Survey', cols: 2, rows: 1 }
  ];

  items = [
    {
      title: 'Physical Activity Readiness form',
      formID: 1
    },
    {
      title: 'IPAQ form',
      formID: 2
    },
    {
      title: 'Personal Health Questionnaire Depression Scale (PHQ-8) form',
      formID: 3
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(item: any): void {
    console.log(item);
  }

}
