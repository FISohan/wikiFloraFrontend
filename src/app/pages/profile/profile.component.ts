import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  constructor(private oidcSercurityService: OidcSecurityService,
     private userService: UserService, private route: ActivatedRoute,
      private floraService: FloraService,
      private fb:FormBuilder
      ) {}
      isUpdate:boolean = false;
  ngOnInit(): void {
    this.getUserData();
  }

  isAuthorize$: Observable<AuthenticatedResult> = this.oidcSercurityService.isAuthenticated$;
  userData$!: Observable<User>;
  userFlora$!: Observable<Flora[]>;
  userName!:string;

  profileForm =  this.fb.group({
    userId:[''],
    givenName:[''],
    mail:[''],
    socialLink:['']
  })

  toggleUpdate(){
    this.isUpdate = !this.isUpdate;
  }
  getUserData() {
    this.route.params.subscribe(d => {
      this.userName = d['name'];
      this.userData$ = this.userService.getUser(this.userName);
      this.userData$.subscribe(d =>{
        this.profileForm.setValue({
          mail:d.mail,
          givenName:d.givenName,
          socialLink:d.socialLink ?? "",
          userId:d.userId
        })
      })

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

  updateProfile(){
    this.userService.updateUser(JSON.stringify(this.profileForm.value)).subscribe(d=>{
      if(d){
        this.isUpdate = false;
        this.userData$ = this.userService.getUser(this.userName);
      }
    })
  }
  logoff() {
    this.oidcSercurityService.logoff().subscribe();
  }
}
