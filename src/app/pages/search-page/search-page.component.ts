import { Component } from '@angular/core';
import { SearchService } from 'src/app/Services/search.service';
import { Flora } from 'src/app/models/flora.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  constructor(private searchService:SearchService) {
      
  }
  serchResult:Flora[] = [];
  search(query:string){
    this.searchService.search(query).subscribe(d =>{
      this.serchResult = d;
      console.log(d);
      
    });
  }
}
