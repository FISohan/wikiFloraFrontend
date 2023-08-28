import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';
import { AuthInterceptor } from './auth.interceptor';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://auth.prohelika.net/realms/Test',
            redirectUrl: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin,
            clientId: 'wiki-flora-frontend',
            // scope: 'openid', // 'openid profile ' + your scopes
            scope: 'openid profile email',
            responseType: 'code',
           // silentRenew: true,
            // silentRenewUrl: window.location.origin + '/silent-renew.html',
            renewTimeBeforeTokenExpiresInSeconds: 10,
            secureRoutes: [environment.baseUrl],
            historyCleanupOff:false,

          }
      })],
    exports: [AuthModule],
})

export class AuthConfigModule {}
