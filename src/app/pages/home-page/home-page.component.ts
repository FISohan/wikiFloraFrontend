import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { FloraService } from 'src/app/Services/flora.service';
import { UserService } from 'src/app/Services/user.service';
import { Category } from 'src/app/models/category.model';
import { Flora } from 'src/app/models/flora.model';
import { Page } from 'src/app/models/page.model';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private _floraService: FloraService, private oidcSecurityService: OidcSecurityService, private userService: UserService) { }
  currentPageIndex: number = 0;
  pageSize: number = 2;
  orderByGenus: boolean = false;

  isDisableNextButton: boolean = false;
  isDisablePrevButton: boolean = true;

  categories: Category[] = [
    { name: 'All', active: true },
    { name: 'category', active: false },
    { name: 'category', active: false },
    { name: 'category', active: false },
  ];
  page?: Page;
  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe((res: LoginResponse) => {
      this.getFlora();
      this.userService.isUserExist().subscribe(d => {
        if (!d) {
          const user: User = { 
             name: res.userData.preferred_username,
             mail: res.userData.email,
             userId: res.userData.sub,
             givenName: res.userData.name
             }

          this.userService.addUser(user).subscribe(d => {
            console.log("user added");
          });
        }
      })
    })
  }



  nextPage() {
    if (this.isDisablePrevButton == true) this.isDisablePrevButton = false;
    this.currentPageIndex++;
    this.getFlora();
  }

  prevPage() {
    if (this.isDisableNextButton == true) this.isDisableNextButton = false;

    this.currentPageIndex--;
    this.getFlora();
  }

  getFlora() {
    this._floraService
      .getFlora(this.currentPageIndex, this.pageSize, this.orderByGenus)
      .subscribe((d) => {
        this.page = d;
        if (d.maxPageIndex == 0) {
          this.isDisableNextButton = true;
          this.isDisablePrevButton = true;
        } else {
          if (this.page.currentPageIndex === 0) {
            this.isDisablePrevButton = true;
            this.isDisableNextButton = false;
          }
          if (this.currentPageIndex === d.maxPageIndex) {
            this.isDisablePrevButton = false;
            this.isDisableNextButton = true;
          }
        }
      });
  }
  onClickCategory(index: number) {
    for (let i = 0; i < this.categories.length; i++)
      if (index != i) this.categories[i].active = false;
    this.categories[index].active = true;
  }
}
