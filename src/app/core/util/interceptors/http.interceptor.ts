import {inject, Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  private authenticationService = inject(AuthenticationService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authenticationService.getUserToken();

    if (token) {
      request = request.clone({
        headers: request.headers.set(AuthenticationService.AUTHORIZATION_KEY, 'Bearer ' + token)
      });

      return next.handle(request).pipe(
        tap({
          next: () => {
          },
          error: (error) => {
            if (error.status === 401) {
              this.authenticationService.logout();
            }
          }
        })
      );
    } else {
      return next.handle(request);
    }
  }
}

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
];
