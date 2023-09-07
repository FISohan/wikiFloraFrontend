import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { FloraService } from 'src/app/Services/flora.service';
import { UserService } from 'src/app/Services/user.service';
import { Flora } from 'src/app/models/flora.model';
import { Photo } from 'src/app/models/photo.model';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.css'],
})
export class DescriptionPageComponent implements OnInit {
  flora$!: Observable<Flora>;
  coverPhoto: Photo | undefined;
  user$!:Observable<User>;
  constructor(
    private route: ActivatedRoute,
    private floraService: FloraService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe(d=>{
      this.getFloraByName(d['name']);
    })
    
  }

  getFloraByName(name:string) {
     this.flora$ = this.floraService.getFloraById(name);
     this.flora$.pipe(map(({ photos,contributer }) => {this.user$ = this.userService.getUser(contributer); return photos.find(e => e.isCoverPhoto);})).subscribe(d =>{ this.coverPhoto = d});
  }

}
