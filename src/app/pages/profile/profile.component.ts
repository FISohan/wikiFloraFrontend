import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticatedResult, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, map } from 'rxjs';
import { FloraService } from 'src/app/Services/flora.service';
import { UserService } from 'src/app/Services/user.service';
import { Flora } from 'src/app/models/flora.model';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private oidcSercurityService: OidcSecurityService, private userService: UserService, private route: ActivatedRoute, private floraService: FloraService) {
  }
  ngOnInit(): void {
    this.getUserData();
  }

  isAuthorize$: Observable<AuthenticatedResult> = this.oidcSercurityService.isAuthenticated$;
  userData$!: Observable<User>;
  userFlora$!: Observable<Flora[]>;

  getUserData() {
    this.route.params.subscribe(d => {
      let userName = d['name'];
      this.userData$ = this.userService.getUser(userName);

      this.isAuthorize$.pipe(map(({ isAuthenticated })=>isAuthenticated)).subscribe(isAuthenticated => {
        if (!isAuthenticated) {
          this.userData$.pipe(map(({ userId }) => userId)).subscribe(d => {
            this.userFlora$ = this.floraService.getFloraByUser(d);
            
          });
        }
        else {
          this.userFlora$ = this.floraService.getFloraByUserAuth();
        }
      });

    })
  }

  logoff() {
    this.oidcSercurityService.logoff().subscribe();
  }
}
