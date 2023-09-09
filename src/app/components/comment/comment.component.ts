import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  constructor(private commentService:CommentService) {
    
  }
  doReply:boolean = false;
  @Input() comment!:Comment;
  @Output() onReply = new EventEmitter<void>();

  reply(relyBody:string,commentId:string){
    let r:any = {
      commentId:commentId,
      replyBody:relyBody,
      replyerId:''
    }
    r = JSON.stringify(r);
    this.commentService.reply(r).subscribe(d=>{
      this.onReply.emit();
    })
  }
  toggleReply(){
    this.doReply = !this.doReply;
  }
}
