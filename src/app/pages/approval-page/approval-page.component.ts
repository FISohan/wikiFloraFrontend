import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FloraService } from 'src/app/Services/flora.service';
import { UserService } from 'src/app/Services/user.service';
import { Flora } from 'src/app/models/flora.model';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-approval-page',
  templateUrl: './approval-page.component.html',
  styleUrls: ['./approval-page.component.css']
})
export class ApprovalPageComponent {
  /**
   *
   */
  constructor(private floraService : FloraService,private userService:UserService) {
  }
    disapproveFlora$:Observable<Flora[]> = this.floraService.getDisapprovePost();
    selectedFlora$?:Observable<Flora>;
    showPreview(id:string){
      console.log(id);

      this.selectedFlora$ = this.floraService.getFloraById(id); 
           
    }
    approve(id:string){
      this.floraService.approveFlora(id).subscribe(d=>{
        if(d){
          //this.selectedFlora$ = undefined;
          console.log(d);
          
        }
      });
    }
    getUser(userId:string):Observable<User>{
      
      
      return this.userService.getUser(userId);
    }
}
