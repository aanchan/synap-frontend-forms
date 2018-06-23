import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';

import { SurveyService } from '../../survey.service';

export interface FormMetadata {
  id: number;
  title: string;
  prefix: string;
}

@Component({
  selector: 'app-form-display',
  templateUrl: './form-display.component.html',
  styleUrls: ['./form-display.component.scss']
})
export class FormDisplayComponent implements OnInit {

  showPart2 = false;
  isTemplateVisible: boolean;
  formTitle: string;
  templateToRender: string;

  constructor(
    private surService: SurveyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isTemplateVisible = true;
    const id = Number(this.route.snapshot.params['id']);
    this.loadSurveyForm(id);
  }

  onChange(event): void {
    this.showPart2 = event.value === 'yes' ? event.value : this.showPart2;
  }

  showTemplate() {
    this.isTemplateVisible = !this.isTemplateVisible;
  }

  loadSurveyForm(formId: number) {
    const returnedMetadata = [];
    this.surService.getFormsMetadata().subscribe((data) => {
      returnedMetadata.push(data.root);
      const formMetadata: FormMetadata = returnedMetadata[0].filter((res) => {
        return res.id === formId;
      })[0];

      this.formTitle = formMetadata.title;
      this.templateToRender = `${formMetadata.prefix}Template`;
    });
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
