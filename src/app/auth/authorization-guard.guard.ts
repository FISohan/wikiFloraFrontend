import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map, take } from 'rxjs';
import { AuthRole } from '../models/auth-role.enum';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const oidcSecurityService = inject(OidcSecurityService);
  let verified : boolean = false;
  let isAuthenticated : boolean = false;
  let roles: Number[] = []
  let permission:[] = route.data['permisson'];
  
  oidcSecurityService.checkAuth().subscribe(res=>{
    isAuthenticated = res.isAuthenticated;
    if(isAuthenticated){
      roles.push(AuthRole.AUTHORIZE);
    oidcSecurityService.getPayloadFromAccessToken().subscribe(({realm_access})=>{
      realm_access.roles.forEach((r: string) => {
        if(r == 'admin')roles.push(AuthRole.ADMIN);
      });
    });
  }
  });
  for(let i = 0; i < permission.length;i++){
    for (let j = 0; j < roles.length; j++) {
      if(permission[i] === roles[j])verified = true;
      console.log(permission[i] , roles[j]);
      
    }
  }

  if(!verified)oidcSecurityService.authorize();

  return verified;
};
