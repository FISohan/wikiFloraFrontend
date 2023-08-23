import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FloraService } from 'src/app/Services/flora.service';
import { Flora } from 'src/app/models/flora.model';
import { Photo } from 'src/app/models/photo.model';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.css'],
})
export class DescriptionPageComponent implements OnInit {
  flora!: Flora;
  coverPhoto?: Photo;
  constructor(
    private route: ActivatedRoute,
    private floraService: FloraService
  ) {}

  ngOnInit(): void {
    let name = this.route.snapshot.paramMap?.get('name');

    this.getFloraByName(name!);
  }

  getFloraByName(name:string) {
   // if(name == null)return;
   console.log(name);
   
    this.floraService.getFloraByName(name).subscribe((d) => {
      this.flora = d;
   //   this.coverPhoto = d.photos.find((e) => e.isCoverPhoto);
      console.log(this.coverPhoto);
      
    });
    
  }
}
