import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  getComment(floraId:string):Observable<Comment[]>{
    return this.http.get<Comment[]>(environment.baseUrl+`Comment/get/allComment?florId=${floraId}`)
  }
  addComment(comment:any):Observable<boolean>{
    return this.http.post<boolean>(environment.baseUrl + `Comment/post`,comment,{headers:{
      "Content-Type": "application/json, text/plain, */*"
    }});
  }

  reply(reply:any):Observable<boolean>{
    return this.http.post<boolean>(environment.baseUrl + "Comment/reply",reply,{headers:{
      "Content-Type": "application/json, text/plain, */*"
    }})
  }

  deleteComment(id:string):Observable<boolean>{
    return this.http.delete<boolean>(environment.baseUrl+`Comment?commentId=${id}`);
  }

  deleteReply(id:string):Observable<boolean>{
    return this.http.delete<boolean>(environment.baseUrl + `Comment/reply/delete?replyId=${id}`);
  }
  
}
