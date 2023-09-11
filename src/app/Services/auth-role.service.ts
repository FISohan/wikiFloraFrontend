import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export  class  AuthRole {

  constructor(private oidcSecurityService:OidcSecurityService) { }
   isAuthByAdmin():boolean{
    let result:boolean = false;
    this.oidcSecurityService.checkAuth().subscribe((a)=>{
    if(a.isAuthenticated){
         this.oidcSecurityService.getPayloadFromAccessToken().subscribe(({realm_access})=>{
         realm_access.roles.forEach((r:string) => {
        if(r === "admin")result = true;
         });
    })
  }

  })
    return result;
  }
}
