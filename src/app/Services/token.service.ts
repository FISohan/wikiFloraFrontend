import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export  class TokenService {

  constructor(private oidcSecurityService: OidcSecurityService) { }
  static token : string;
  
  public static setToken(v : string) {
    this.token = v;
  }

  public static getToken() : string {
    return this.token;
  }
  
}
