import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { TestModule } from './test/test.module';
import { HighlightDirective } from './highlight.directive';
import { MyIfDirective } from './my-if.directive';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SameValueDirective } from './same-value.directive';
import { AuthModule } from './auth/auth.module';

export const myStringInjectionToken = new InjectionToken('myString');

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    UserDetailComponent,
    HighlightDirective,
    MyIfDirective,
    LoginComponent,
    SameValueDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    SharedModule,
    TestModule,
    AuthModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: myStringInjectionToken,
      useValue: 'Hello World!'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
