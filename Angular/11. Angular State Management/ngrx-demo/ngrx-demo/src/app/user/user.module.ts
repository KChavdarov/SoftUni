import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './+store';
import { EffectsModule } from '@ngrx/effects';
import { UserDetailsEffects, UserListEffects } from './+store/effects';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([UserListEffects, UserDetailsEffects]),
  ],
  exports: [
    UsersComponent
  ]
})
export class UserModule {}
