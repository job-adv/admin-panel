import { Injectable } from "@angular/core";
import { HttpService } from "../../services/http/http.service";
import { Observable } from "rxjs";

@Injectable()
export class CategoryRepository {
    constructor(private http: HttpService) {}

    public get(): Observable<any> {
        return this.http.get('/category/view', true);
    }
}