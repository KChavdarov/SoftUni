import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CustomValidatorDirective } from './custom-validator.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { TimeDiffPipe } from './pipes/time-diff.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    CustomValidatorDirective,
    ShortenPipe,
    TimeDiffPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HomeComponent,
    CustomValidatorDirective,
    ShortenPipe,
    TimeDiffPipe,
  ]
})
export class SharedModule {}
