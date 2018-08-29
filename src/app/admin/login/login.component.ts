import { Component, ElementRef } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../shared/services/user.model';

@Component({
  selector: 'login-form',
  providers: [AuthenticationService],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public user = new User();
  public errorMessage = '';

  constructor(private service: AuthenticationService, private router: Router) {}

  public login() {
    this.service
      .authenticate(this.user.alias, this.user.password)
      .subscribe(result => {
        if (result == null) {
          this.errorMessage = 'Failed to login';
        } else {
         sessionStorage.setItem('user', result.userId);
           this.router.navigate(['/admin']);
        }
      });
  }

  public goBack() {
    window.history.back();
  }
}
