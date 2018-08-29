import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user.model';

@Injectable()
export class AuthenticationService {
  private playerUrl = 'https://fcuwebapi.azurewebsites.net/api/authentication';

  constructor(private http: HttpClient) {}

  public authenticate(user: string, password: string): Observable<User> {
    return this.http.get<User>(this.playerUrl + '/' + user + '/' + password);
  }
  public logout() {
    sessionStorage.removeItem('user');
  }

  // public login(user: User): Promise<boolean> {
  //   const response = this.authenticate(user.email, user.password).toPromise();
  //   return response;
  //   // ret(result => {
  //   //   if (result === true) {
  //   //     sessionStorage.setItem('user', user.email);
  //   //     return true;
  //   //   } else {
  //   //     return false;
  //   //   }
  //   // });
  // }

  public checkCredentials() {
    if (sessionStorage.getItem('user') === null) {
      return false;
    }

    return true;
  }
}
