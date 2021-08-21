import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './navigation/dropdown.directive';
import { CollapseDirective } from './navigation/collapse.directive';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './authentication/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { jwtInterceptorProvider } from './jwt.interceptor';
import { CanLoadFurniture } from './authentication/guards/furniture.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DropdownDirective,
    CollapseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    jwtInterceptorProvider,
    CanLoadFurniture,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
