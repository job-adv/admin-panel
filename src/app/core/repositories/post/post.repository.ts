import { Injectable } from "@angular/core";
import { HttpService } from "../../services/http/http.service";
import { Observable } from "rxjs";

@Injectable()
export class PostRepository {
    constructor(private http: HttpService) {}

    get(): Observable<any> {
        return this.http.get('/post/viewall', true);
    }

    delete(id: number): Observable<any> {
        return this.http.delete('/post/delete/' + id);
    }
}