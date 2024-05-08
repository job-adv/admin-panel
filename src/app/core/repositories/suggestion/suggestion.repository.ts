import { Injectable } from "@angular/core";
import { HttpService } from "../../services/http/http.service";
import { Observable } from "rxjs";

@Injectable()
export class SuggestionRepository {
    constructor(private http: HttpService) {}

    get(): Observable<any> {
        return this.http.get('/suggestion/view', true);
    }

    delete(id: string): Observable<any> {
        return this.http.patch('/suggestion/delete/' + id, {});
    }
}