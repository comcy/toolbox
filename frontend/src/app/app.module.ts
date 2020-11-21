import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';
import { AuthenticationModule } from './auth/auth.module';

export const MPM_BASE_URL = new InjectionToken<string>('MpmApiUrl');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }