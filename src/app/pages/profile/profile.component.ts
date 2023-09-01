import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticatedResult, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    constructor(private oidcSercurityService : OidcSecurityService,private userService:UserService,private route:ActivatedRoute) {      
    }
  ngOnInit(): void {
    this.getUserData();
  }

    isAuthorize$:Observable<AuthenticatedResult> = this.oidcSercurityService.isAuthenticated$;
    userData$!:Observable<User>;

    getUserData(){
      this.route.params.subscribe(d =>{
        let userName = d['name'];
        this.userData$ = this.userService.getUser(userName);
        console.log(d['name']);
      })
    }
    logoff(){
      this.oidcSercurityService.logoff().subscribe();
    }
}
