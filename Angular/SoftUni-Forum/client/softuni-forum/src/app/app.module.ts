import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { appInterceptorProvider } from './core/app-interceptor';
import { ThemeService } from './theme/theme.service';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    appInterceptorProvider,
    ThemeService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}