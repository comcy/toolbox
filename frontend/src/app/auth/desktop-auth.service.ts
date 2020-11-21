import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AuthBaseService } from './auth-base.service';

@Injectable({
  providedIn: 'root'
})
export class DesktopAuthService extends AuthBaseService {
  
  doLogin() {
    const urlHandler = (authUrl) => {
      this.modal = window.open(authUrl, '_blank', 'nodeIntegration=no');
    };

    return of(this.oidcSecurityService.authorize({ urlHandler }));
  }
}