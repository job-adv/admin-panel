import { Injectable } from "@angular/core";
import { SuggestionRepository } from "../../repositories/suggestion/suggestion.repository";
import { Observable } from "rxjs";

@Injectable()
export class SuggestionService {
    constructor(private suggestion: SuggestionRepository) {}

    get(): Observable<any> {
        return this.suggestion.get();
    }

    delete(id: string): Observable<any> {
        return this.suggestion.delete(id);
    }
}