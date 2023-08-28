import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { TokenService } from './Services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private oidcSecurityService: OidcSecurityService) {}
  ngOnInit(): void {

  }
  authorize() {
    this.oidcSecurityService.authorize();
  }
  logOut() {
    this.oidcSecurityService.logoff().subscribe((d) => console.log(d));
  }
  getToken() {
    this.oidcSecurityService.checkAuth().subscribe((l:LoginResponse)=>{
      console.log('BLLLLLLLLLLLLLLLLLLLL', l);
    })
  }

  title = 'wikiFlora';
}
