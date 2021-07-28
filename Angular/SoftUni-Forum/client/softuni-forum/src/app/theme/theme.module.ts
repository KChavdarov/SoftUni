import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeItemComponent } from './theme-item/theme-item.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeCreateComponent } from './theme-create/theme-create.component';
import { AsideComponent } from './aside/aside.component';
import { ThemeContainerComponent } from './theme-container/theme-container.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeService } from './theme.service';



@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeItemComponent,
    ThemeCreateComponent,
    AsideComponent,
    ThemeContainerComponent,
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    SharedModule,
  ],
  providers: [
    ThemeService
  ],
  exports: [
    ThemeListComponent
  ]
})
export class ThemeModule {}
