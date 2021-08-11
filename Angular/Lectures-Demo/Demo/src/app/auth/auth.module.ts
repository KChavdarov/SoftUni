import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { PasswordCheckDirective } from './register/password-check.directive';
import { IsImageDirective } from './register/is-image.directive';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';



@NgModule({
  declarations: [
    RegisterComponent,
    PasswordCheckDirective,
    IsImageDirective,
    RegisterReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {}
