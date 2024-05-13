import { Injectable } from "@angular/core";
import { ServiceRepository } from "../../repositories/service/service.repository";
import { Observable } from "rxjs";

@Injectable()
export class UserServiceService {
    constructor(private service: ServiceRepository) {}

    get(): Observable<any> {
        return this.service.get();
    }

    delete(id: number): Observable<any> {
        return this.service.delete(id);
    }
}