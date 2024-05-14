import { Injectable } from "@angular/core";
import { HttpService } from "../../services/http/http.service";
import { Observable } from "rxjs";
import { SubcategoryUpdateRequest } from "../../models/subcategory/subcategory_update_request";
import { SubcategoryCreationRequest } from "../../models/subcategory/subcategory_creation_request";

@Injectable()
export class SubcategoryRepository {
    constructor(private http: HttpService) {}

    public get(): Observable<any> {
        return this.http.get('/subcategory/view', true);
    }

    public create(data: SubcategoryCreationRequest): Observable<any> {
        return this.http.post('/subcategory/add', data);
    }

    public update(id: number, data: SubcategoryUpdateRequest): Observable<any> {
        return this.http.patch('/subcategory/update/' + id, data);
    }

    public delete(id: number): Observable<any> {
        return this.http.delete('/subCategory/delete/' + id);
    }
}