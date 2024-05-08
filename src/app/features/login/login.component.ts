import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { LoginRequest } from '../../core/models/user/login_request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})

export class LoginComponent {
  public isLoading = false;
  protected authenticationService: AuthenticationService;

  public loginCredentials: FormGroup;

  constructor(private authService: AuthenticationService, private fb: FormBuilder) {
    this.authenticationService = authService;
    this.loginCredentials = this.fb.group({
      email: '',
      password: ''
    });
  }

  login(): void {
    const email = this.loginCredentials.get('email')?.value;
    const password = this.loginCredentials.get('password')?.value;

    const loginRequest: LoginRequest = {
      email: email,
      password: password,
    };

    this.authenticationService.login(loginRequest);
  }
}
