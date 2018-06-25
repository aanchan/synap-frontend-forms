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
    },
    {
      title: 'Edinburgh Handedness Inventory',
      formID: 4
    },
    {
      title: 'Everyday Memory Questionaire',
      formID: 5
    },
    {
      title: 'Sleep Diary Form',
      formID: 6
    },
    {
      title: 'Santa Barbara Sense-of-Direction Scale',
      formID: 7
    },
    {
      title: 'Pittsburgh Sleep Quality Index (PSQI)',
      formID: 8
    },
    {
      title: 'Nutrition Goals Form',
      formID: 9
    },
    {
      title: 'Perceived Stress Scale',
      formID: 10
    },
    {
      title: 'CHAMPS Activities Questionnaier for Older Adults',
      formID: 11
    },
    {
      title: 'STOP-BANG Sleep Apnea Questionnaire',
      formID: 12
    },
    {
      title: 'Motor Function Assessment',
      formID: 13
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(item: any): void {
    console.log(item);
  }

}
