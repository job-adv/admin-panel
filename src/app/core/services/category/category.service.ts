import { Injectable } from "@angular/core";
import { CategoryRepository } from "../../repositories/category/category.repository";
import { Observable } from "rxjs";
import { CategoryCreationRequest } from "../../models/category/category_creation_request";
import { CategoryUpdateRequest } from "../../models/category/category_update_request";

@Injectable()
export class CategoryService {
    constructor(private category: CategoryRepository) {}

    public get(): Observable<any> {
        return this.category.get();
    }

    public create(data: CategoryCreationRequest): Observable<any> {
        return this.category.create(data);
    }

    public update(id: number, data: CategoryUpdateRequest): Observable<any> {
        return this.category.update(id, data);
    }

    public delete(id: number): Observable<any> {
        return this.category.delete(id);
    }
}