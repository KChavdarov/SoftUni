import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CustomValidatorDirective } from './custom-validator.directive';



@NgModule({
  declarations: [
    HomeComponent,
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HomeComponent,
    CustomValidatorDirective,
  ]
})
export class SharedModule {}
