import { Component, Input } from '@angular/core';
import { CommentService } from 'src/app/Services/comment.service';
import { UserService } from 'src/app/Services/user.service';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  /**
   *
   */
  constructor(private userService:UserService,private commentService:CommentService) {
    
  }
  doReply:boolean = false;
  @Input() comment!:Comment;
  getUserName(userId:string):string{
    this.userService.getUser(userId).subscribe(d=>{
      return d.givenName;
    })
    return "Anonymous";
  }
  reply(relyBody:string,commentId:string){
    let r:any = {
      commentId:commentId,
      replyBody:relyBody
    }
    r = JSON.stringify(r);
    this.commentService.reply(r).subscribe(d=>{
      console.log(d);
    })
  }
  toggleReply(){
    this.doReply = !this.doReply;
  }
}
