import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeCreateComponent } from './theme-create/theme-create.component';



@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeItemComponent,
    ThemeCreateComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
  ],
  exports: [
    ThemeListComponent
  ]
})
export class ThemeModule {}
