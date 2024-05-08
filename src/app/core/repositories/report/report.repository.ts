import { Injectable } from "@angular/core";
import { HttpService } from "../../services/http/http.service";
import { Observable, ObservedValueOf } from "rxjs";

@Injectable()
export class ReportRepository {
    constructor(private http: HttpService) {}

    get(): Observable<any> {
        return this.http.get('/report/view', true);
    }

    delete(id: string): Observable<any> {
        return this.http.delete('/report/delete/' + id);
    }
}