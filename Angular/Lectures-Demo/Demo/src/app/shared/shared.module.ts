import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPropPipe } from './get-prop.pipe';


@NgModule({
  declarations: [
    GetPropPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetPropPipe,
  ]
})
export class SharedModule {}