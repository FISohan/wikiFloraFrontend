import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
    constructor(private userService:UserService) {

    }
    users$:Observable<User[]> = this.userService.getTopContibuter();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
