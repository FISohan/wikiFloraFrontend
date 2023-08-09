import { Component, OnInit } from '@angular/core';
import { FloraService } from 'src/app/Services/flora.service';
import { Category } from 'src/app/models/category.model';
import { Flora } from 'src/app/models/flora.model';
import { Page } from 'src/app/models/page.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private _floraService: FloraService) {}
  currentPageIndex: number = 0;
  pageSize: number = 20;
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
    this.getFlora();
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
