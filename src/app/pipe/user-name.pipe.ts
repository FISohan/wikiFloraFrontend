import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Observable, Subscriber, map, of, take } from 'rxjs';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {
/**
 *
 */
constructor(private userService:UserService) {
}

  transform(value: string, ...args: unknown[]): Observable<string> {
    
    if(value == "Anonymous")
        return of("Annoynomus");
    return this.userService.getUser(value).pipe(take(1),map(({givenName})=>givenName))
  }

}
