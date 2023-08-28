import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService, UserDataResult } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userData$!:Observable<UserDataResult> ;
  isLogedIn!:boolean;
  constructor(private oidcSecurityService:OidcSecurityService) { }
  ngOnInit(): void {
    this.userData$ = this.oidcSecurityService.userData$;
  
  }
  authorize(){
    this.oidcSecurityService.isAuthenticated().subscribe(d =>{ this.isLogedIn = d;console.log(d);}) 
    if(this.isLogedIn)return;
    console.log(1);
    this.oidcSecurityService.authorize()
  }
}
