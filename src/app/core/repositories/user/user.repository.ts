import {inject, Injectable} from "@angular/core";
import {HttpService} from "../../services/http/http.service";
import {map, Observable} from "rxjs";
import { LoginRequest } from "../../models/user/login_request";

@Injectable()
export class UserRepository {
  private httpService = inject(HttpService);

  login(loginRequest: LoginRequest): Observable<any> {
    return this.httpService.post('/login', loginRequest).pipe(map(data => data.body))
  }

  getUserDetails(): Observable<any> {
    return this.httpService.get('/user/getUser', false);
  }

  getAllUsers(): Observable<any> {
    return this.httpService.get('/user/viewAll', false);
  }

  delete(id: string) {
    return this.httpService.delete('/user/delete/' + id);
  }

  verifyUser(id: string): Observable<any> {
    return this.httpService.patch('/user/accept/' + id, {});
  }
}
