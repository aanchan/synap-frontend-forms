import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDImportsModule } from './md-imports.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FormBuilderService } from './services/form-builder.service';


const SHARED_MODULES = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  MDImportsModule,
];

const SHARED_COMPONENTS = [
  HeaderComponent,
  SidenavComponent
];

const SHARED_SERVICES = [
  FormBuilderService
];

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS
  ],
  declarations: [...SHARED_COMPONENTS],
  providers: [...SHARED_SERVICES]
})
export class SharedModule { }
