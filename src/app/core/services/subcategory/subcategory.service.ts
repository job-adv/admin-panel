import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SubcategoryRepository } from "../../repositories/subcategory/subcategory.repository";
import { SubcategoryCreationRequest } from "../../models/subcategory/subcategory_creation_request";
import { SubcategoryUpdateRequest } from "../../models/subcategory/subcategory_update_request";

@Injectable()
export class SubcategoryService {
    constructor(private subcategory: SubcategoryRepository) {}

    public get(): Observable<any> {
        return this.subcategory.get();
    }

    public create(data: SubcategoryCreationRequest): Observable<any> {
        return this.subcategory.create(data);
    }

    public update(id: number, data: SubcategoryUpdateRequest): Observable<any> {
        return this.subcategory.update(id, data);
    }

    public delete(id: number): Observable<any> {
        return this.subcategory.delete(id);
    }
}