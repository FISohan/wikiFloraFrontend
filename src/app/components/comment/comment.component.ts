import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthRole } from 'src/app/Services/auth-role.service';
import { CommentService } from 'src/app/Services/comment.service';
import { UserService } from 'src/app/Services/user.service';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  /**
   *
   */
  constructor(private commentService: CommentService, private authService: AuthRole) {

  }
  ngOnInit(): void {
    this.isAdmin = this.authService.isAuthByAdmin();
  }
  doReply: boolean = false;
  isAdmin: boolean = false;

  @Input() comment!: Comment;
  @Output() onReply = new EventEmitter<void>();

  reply(relyBody: string, commentId: string) {
    let r: any = {
      commentId: commentId,
      replyBody: relyBody,
      replyerId: ''
    }
    r = JSON.stringify(r);
    this.commentService.reply(r).subscribe(d => {
      this.onReply.emit();
    })
  }
  deleteComment(commentId: string) {
    this.commentService.deleteComment(commentId).subscribe(d => {
      this.onReply.emit();
    })
  }
  deleteReply(replyId: string) {
    this.commentService.deleteReply(replyId).subscribe(d => {
      this.onReply.emit();
    })
  }
  toggleReply() {
    this.doReply = !this.doReply;
  }
}
