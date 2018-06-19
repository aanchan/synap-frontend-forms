import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
