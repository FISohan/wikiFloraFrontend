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
}
auth(){
  this.oidcSecurityService.authorize();
}
logOut(){
  this.oidcSecurityService.logoff().subscribe(d => console.log(d)
  );  
}
getToken(){
   this.oidcSecurityService.isAuthenticated().subscribe(d => console.log(d))
}

  title = 'wikiFlora';
  
}
