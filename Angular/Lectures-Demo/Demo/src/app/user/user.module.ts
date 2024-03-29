import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  exports: [
    UserListComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
