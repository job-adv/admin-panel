import { Injectable } from "@angular/core";
import { HttpService } from "../../services/http/http.service";
import { Observable } from "rxjs";
import { CategoryCreationRequest } from "../../models/category/category_creation_request";
import { CategoryUpdateRequest } from "../../models/category/category_update_request";

@Injectable()
export class CategoryRepository {
    constructor(private http: HttpService) {}

    public get(): Observable<any> {
        return this.http.get('/category/view', true);
    }

    public create(data: CategoryCreationRequest): Observable<any> {
        return this.http.post('/category/add', data);
    }

    public update(id: number, data: CategoryUpdateRequest): Observable<any> {
        return this.http.patch('/category/update/' + id, data);
    }

    public delete(id: number): Observable<any> {
        return this.http.delete('/category/delete/' + id);
    }
}