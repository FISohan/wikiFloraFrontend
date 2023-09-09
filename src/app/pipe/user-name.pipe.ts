import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Observable, map, take } from 'rxjs';

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
    
    return this.userService.getUser(value).pipe(take(1),map(({givenName})=>givenName))
  }

}
