import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CounterComponent } from './counter/counter.component';
import { reducers } from './+store';
import { EffectsModule } from '@ngrx/effects';
import { GlobalEffects } from './+store/effects';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { metaReducers } from './+store/meta-reducers';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([GlobalEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
