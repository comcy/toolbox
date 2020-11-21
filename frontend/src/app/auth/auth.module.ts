
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';


export function configureAuth(
    oidcConfigService: OidcConfigService,
) {
    return () => {
        oidcConfigService.withConfig({
            stsServer: 'some',
            redirectUrl: `https://localhost/callback*'`,
            postLogoutRedirectUri: `https://localhost/callback*'`,
            clientId: 'any',
            // scope: 'openid profile email offline_access mysupercoolapp_api',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            renewTimeBeforeTokenExpiresInSeconds: 30,
        });
    };
}


@NgModule({
    imports: [AuthModule.forRoot()],
    exports: [AuthModule],
    providers: [
        OidcConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: configureAuth,
            deps: [OidcConfigService],
            multi: true,
        },
    ],
})
export class AuthenticationModule { }