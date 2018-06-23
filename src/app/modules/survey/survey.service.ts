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

  constructor(private http: HttpClient) { }

  getFormsMetadata(): Observable<FormMetadataResp> {
    return this.http.get<FormMetadataResp>('assets/mock-data/parq.metadata.json');
  }

}
