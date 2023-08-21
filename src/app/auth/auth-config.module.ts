import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://auth.prohelika.net/realms/Test',
            redirectUrl: "http://localhost:4200/",
        //    postLogoutRedirectUri: window.location.origin,
            clientId: 'wiki-flora-frontend',
            scope: 'openid', // 'openid profile ' + your scopes
            responseType: 'code',
            // silentRenew: true,
            // silentRenewUrl: window.location.origin + '/silent-renew.html',
            renewTimeBeforeTokenExpiresInSeconds: 10,
            //secureRoutes: ['http://localhost:5084/api/Profile/'],
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
