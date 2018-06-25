import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SurveyService } from '../../survey.service';

export interface FormMetadata {
  id: number;
  title: string;
  prefix: string;
}
@Component({
  selector: 'app-template-loader',
  templateUrl: './template-loader.component.html',
  styleUrls: ['./template-loader.component.scss']
})
export class TemplateLoaderComponent implements OnInit {
  @Input()
  formId: number;

  @Output()
  loaded: EventEmitter<string> = new EventEmitter();

  formTitle: string;
  showPart2 = false;
  templateToRender: string;

  constructor(private surService: SurveyService) { }

  ngOnInit(): void {
    this.loadSurveyForm(this.formId);
    setTimeout(() => {
      this.loaded.emit(this.formTitle);
    }, 0);
  }

  loadSurveyForm(formId: number): void {
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

  onFormSubmit(event) {
    console.log(event);
  }

  onChange(event): void {
    this.showPart2 = event.value === 'yes' ? event.value : this.showPart2;
  }

  formatDayLabel(value: number | null): number | string {
    if (!value) {
      return 0;
    }

    if (value >= 7) {
      return 7 + 'd';
    }

    return value + 'd';
  }

  formatHourLabel(value: number | null): number | string {
    if (!value) {
      return 0;
    }

    if (value >= 24) {
      return 24 + 'h';
    }

    return value + 'h';
  }

}
