import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FormMetadataResp {
  root: Array<FormMetadata>;
}

export interface FormMetadata {
  id: number;
  title: string;
  prefix: string;
}
@Injectable()
export class SurveyService {

  formLinks = [
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
    {
      title: 'Participant Weight History',
      formID: 14
    },
    {
      title: 'Sleep Apnea Screening Test',
      formID: 15
    },
  ];

  constructor(private http: HttpClient) { }

  getFormsMetadata(): Observable<FormMetadataResp> {
    return this.http.get<FormMetadataResp>('assets/mock-data/parq.metadata.json');
  }

  getFormLinks (): any[] {
    return this.formLinks;
  }

  saveSurveyEntries(entries: any): void {
    console.log(JSON.stringify(entries));
  }

}
