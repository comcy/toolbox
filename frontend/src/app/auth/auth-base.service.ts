import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { DesktopAuthService } from './desktop-auth.service';


export function authFactory(
  oidcSecurityService: OidcSecurityService
) {
  // if (deviceDetectorService.isElectron) {
    return new DesktopAuthService(oidcSecurityService);
  // }

  // return new WebAuthService(oidcSecurityService);
}



@Injectable({
  providedIn: 'root',
  useFactory: authFactory,
  deps: [OidcSecurityService],
})
export abstract class AuthBaseService {
  modal: Window;

  constructor(public oidcSecurityService: OidcSecurityService) {}

  get isLoggedIn() {
    return this.oidcSecurityService.isAuthenticated$;
  }

  get token() {
    return this.oidcSecurityService.getToken();
  }

  get userData$() {
    return this.oidcSecurityService.userData$;
  }

  checkAuth(url?: string) {
    if (this.modal) {
      this.modal.close();
    }

    return this.oidcSecurityService.checkAuth(url);
  }

  abstract doLogin();

  signOut() {
    return this.oidcSecurityService.logoffAndRevokeTokens();
  }
}