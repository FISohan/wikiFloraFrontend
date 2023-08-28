import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { TokenService } from '../Services/token.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private oidcService:OidcSecurityService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request.clone({});
    this.oidcService.getAccessToken().subscribe((token)=>{
      console.log(token, `<<${request.url}`);
      authReq = request.clone({
          headers: request.headers.set('Authorization',`Bearer ${token}`)
        }); 
    })
    if(!environment.baseUrl.split('/').includes('api'))return next.handle(request);

    return next.handle(authReq);
  }
}
