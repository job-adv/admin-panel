import { Injectable } from "@angular/core";
import { HttpService } from "../../services/http/http.service";
import { Observable } from "rxjs";

@Injectable()
export class ServiceRepository {
    constructor(private http: HttpService) {}

    get(): Observable<any> {
        return this.http.get('/service/viewall', true);
    }

    delete(id: number): Observable<any> {
        return this.http.delete('/service/delete/' + id);
    }
}