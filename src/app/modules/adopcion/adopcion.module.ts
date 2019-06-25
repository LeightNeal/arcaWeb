import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdopcionRoutingModule } from './adopcion-routing.module';
import { DataComponent } from 'src/app/components/data/data.component';
import { AnswersComponent } from 'src/app/components/answers/answers.component';
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';

@NgModule({
  declarations: [
    DataComponent,
    AnswersComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    AdopcionRoutingModule
  ]
})
export class AdopcionModule { }
