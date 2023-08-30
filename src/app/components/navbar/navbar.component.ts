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
    this.oidcSecurityService.checkAuth().subscribe(d =>{
        this.isLogedIn = d.isAuthenticated;
        console.log(11111);

    });
    if(this.isLogedIn)return;
    this.oidcSecurityService.authorize();
    
  }
}
