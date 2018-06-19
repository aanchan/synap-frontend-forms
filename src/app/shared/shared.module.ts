import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDImportsModule } from './md-imports.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


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

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS
  ],
  declarations: [...SHARED_COMPONENTS]
})
export class SharedModule { }
