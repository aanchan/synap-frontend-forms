import { Component, OnInit } from '@angular/core';

import { SurveyService } from '../../survey.service';

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

  formLinks: any[];

  constructor(private survService: SurveyService) { }

  ngOnInit(): void {
    this.formLinks = this.survService.getFormLinks();
  }

  showInfo(item: any): void {
    console.log(item);
  }

}
