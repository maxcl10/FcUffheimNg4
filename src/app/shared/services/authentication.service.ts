import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user.model';
import { AppConfig } from '../../app.config';

@Injectable()
export class AuthenticationService {
  private playerUrl = AppConfig.settings.apiServer.url + '/authentication';

  constructor(private http: HttpClient) {}

  public authenticate(user: string, password: string): Observable<User> {
    return this.http.get<User>(this.playerUrl + '/' + user + '/' + password);
  }
  public logout() {
    sessionStorage.removeItem('user');
  }

  public getLoggedUserId() {
    return sessionStorage.getItem('user');
  }

  public checkCredentials() {
    if (sessionStorage.getItem('user') === null) {
      return false;
    }

    return true;
  }
}
