import { Component, ElementRef, OnInit, Renderer2} from '@angular/core';
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

  formId: number;
  formTitle: string;
  templateToRender: string;

  constructor(
    private surService: SurveyService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.formId = Number(this.route.snapshot.params['id']);
    this.getFormTitle(this.formId);
  }

  getFormTitle(formId: number) {
    this.formTitle = this.surService.getFormLinks().filter(link => link['formID'] === formId)[0].title;
  }

  submitForm(): void {
    const btn: HTMLButtonElement = document.querySelector('button.hidden-form-btn');
    btn.click();
  }

}
