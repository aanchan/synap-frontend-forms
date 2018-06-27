import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from '../../survey.service';

export interface FormMetadata {
  id: number;
  title: string;
  prefix: string;
  qCount?: number;
}
@Component({
  selector: 'app-template-loader',
  templateUrl: './template-loader.component.html',
  styleUrls: ['./template-loader.component.scss']
})
export class TemplateLoaderComponent implements OnInit {
  @Input()
  formId: number;

  surveyFormGroup: FormGroup;

  formTitle: string;
  showPart2 = false;
  templateToRender: string;
  activeFormMeta: FormMetadata;
  formControls = {};
  showFormError = false;

  phqOptions = [
    {value: 'Not at all'},
    {value: 'Several days'},
    {value: 'More than half the days'},
    {value: 'Nearly every day'},
  ];

  constructor(
    private surService: SurveyService,
    private fb: FormBuilder,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.loadSurveyForm(this.formId);
  }

  loadSurveyForm(formId: number): void {
    const returnedMetadata = [];
    this.surService.getFormsMetadata().subscribe((data) => {
      returnedMetadata.push(data.root);
      const formMetadata: FormMetadata = returnedMetadata[0].filter((res) => {
        return res.id === formId;
      })[0];

      this.activeFormMeta = formMetadata;
      this.formTitle = formMetadata.title;
      this.templateToRender = `${formMetadata.prefix}Template`;
      this.buildFormControls();
      this.initFormGroup();
    });
  }

  initFormGroup() {
    this.surveyFormGroup = this.fb.group(this.formControls);
  }

  buildFormControls() {
    if (this.activeFormMeta.id === 1) {
      for (let i = 1; i <= this.activeFormMeta.qCount; i++) {
        if (i >= 8) {
          this.formControls[`q${i}`] = [''];
        } else {
          this.formControls[`q${i}`] = ['', Validators.required];
        }
      }
    } else {
      for (let i = 1; i <= this.activeFormMeta.qCount; i++) {
          this.formControls[`q${i}`] = ['', Validators.required];
      }
    }
  }

  addValidationStateWatcher() {
    const qElements: Element[] = Array.from(document.querySelectorAll('.question'));
    qElements.forEach((item) => {
      this.renderer.listen(item, 'click', ($event) => {
        const formControl = item.children.item(1).firstElementChild;
        if ((formControl.classList.contains('ng-invalid') &&
             formControl.classList.contains('ng-touched'))) {
          this.renderer.addClass(item, 'invalid');
        } else if ((formControl.classList.contains('ng-valid'))) {
          this.renderer.removeClass(item, 'invalid');
        }
      });
    });
  }

  onFormSubmit(event) {
    this.showFormError = this.surveyFormGroup.status === 'INVALID' ? !this.showFormError : this.showFormError;
    if (this.surveyFormGroup.status === 'VALID') {
      this.surService.saveSurveyEntries(this.surveyFormGroup.value);
    }
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
