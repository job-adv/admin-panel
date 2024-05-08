import { Injectable } from "@angular/core";
import { CategoryRepository } from "../../repositories/category/category.repository";
import { Observable } from "rxjs";

@Injectable()
export class CategoryService {
    constructor(private category: CategoryRepository) {}

    public get(): Observable<any> {
        return this.category.get();
    }
}