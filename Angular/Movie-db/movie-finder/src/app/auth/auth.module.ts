import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordMismatchDirective } from './directives/password-mismatch.directive';
import { ImageUrlDirective } from './directives/image-url.directive';
import { RegisterReactiveComponent } from './register-reactive/register-reactive.component';



@NgModule({
  declarations: [
    RegisterComponent,
    PasswordMismatchDirective,
    ImageUrlDirective,
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
