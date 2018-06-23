import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormInput } from '../models/';

@Injectable()
export class FormBuilderService {

  constructor() { }

  toFormGroup(inputs: FormInput<any>[] ) {
    const group: any = {};

    inputs.forEach(input => {
      group[input.key] = input.required ? new FormControl(input.value || '', Validators.required)
                                              : new FormControl(input.value || '');
    });
    return new FormGroup(group);
  }
}
