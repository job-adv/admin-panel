import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { UserRepository } from "../../repositories/user/user.repository";
import { SessionManager } from "../../util/managers/session.manager";
import { LoginRequest } from '../../models/user/login_request';
import { MessageService } from 'primeng/api';

@Injectable()
export class AuthenticationService {

  public static readonly AUTHORIZATION_KEY = "Authorization";
  private static readonly USER_KEY = "User";

  private static readonly LOGIN_ROUTE = "/login";
  private static readonly HOME_ROUTE = "/";

  private sessionManager = inject(SessionManager);
  private userRepository = inject(UserRepository);
  private router = inject(Router);
  private messageService = inject(MessageService);

  public getUserToken(): string | null {
    return this.sessionManager.getValue(AuthenticationService.AUTHORIZATION_KEY);
  }

  public getUserData(): Observable<any> {
    return this.userRepository.getUserDetails();
  }

  public login(loginRequest: LoginRequest): void {
    this.userRepository.login(loginRequest).subscribe({
      next: (loginResponse) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged in' });
        this.sessionManager.setValue(AuthenticationService.AUTHORIZATION_KEY, loginResponse.token);
        this.router.navigate([AuthenticationService.HOME_ROUTE]);
      },
      error: () => {
        console.log("error");
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'email or password is incorrect' });
      }
    });
  }

  public logout() {
    this.sessionManager.removeItem(AuthenticationService.AUTHORIZATION_KEY);
    this.sessionManager.removeItem(AuthenticationService.USER_KEY);

    this.router.navigate([AuthenticationService.LOGIN_ROUTE]).then(() => {
    });
  }

  public isUserLoggedIn(): boolean {
    if(this.getUserToken() == null) {
      return false;
    } else {
      return true;
    }
  }
}
