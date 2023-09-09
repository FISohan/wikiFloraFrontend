import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CommentService } from 'src/app/Services/comment.service';
import { FloraService } from 'src/app/Services/flora.service';
import { UserService } from 'src/app/Services/user.service';
import { Comment } from 'src/app/models/comment';
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
  floraId!:string;
  comments$!:Observable<Comment[]>;
  constructor(
    private route: ActivatedRoute,
    private floraService: FloraService,
    private userService: UserService,
    private commentService:CommentService
  ) {}

  ngOnInit(): void {
    
    this.route.params.subscribe(d=>{
      this.getFloraByName(d['name']);
      this.floraId = d['name'];
      this.comments$ = this.commentService.getComment(this.floraId);
    })
    
  }
  comment(commentBody:string){
    let cmt = {
      floraId: this.floraId,
      commentBody: commentBody
    }
    this.commentService.addComment(JSON.stringify(cmt)).subscribe(d =>{
      console.log(d);
    })
  }
  getFloraByName(name:string) {
     this.flora$ = this.floraService.getFloraById(name);
     this.flora$.pipe(map(({ photos,contributer }) => {this.user$ = this.userService.getUser(contributer); return photos.find(e => e.isCoverPhoto);})).subscribe(d =>{ this.coverPhoto = d});
  }

}
