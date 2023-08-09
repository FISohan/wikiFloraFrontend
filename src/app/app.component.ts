import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /**
   *
   */
  constructor(private oidcSecurityService:OidcSecurityService) {
    
  }
ngOnInit(): void {
  this.oidcSecurityService.authorize();
}


  title = 'wikiFlora';
  
}
