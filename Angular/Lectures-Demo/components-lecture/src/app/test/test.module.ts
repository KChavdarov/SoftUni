import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRouterModule } from './test-router.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    OneComponent,
    TwoComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    TestRouterModule,
  ]
})
export class TestModule { }
