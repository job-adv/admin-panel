import { Injectable } from "@angular/core";
import { UserRepository } from "../../repositories/user/user.repository";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    constructor(public user: UserRepository) {}

    get():Observable<any> {
        return this.user.getAllUsers();
    }

    verifyUser(id: string): Observable<any> {
        return this.user.verifyUser(id);
    }
}