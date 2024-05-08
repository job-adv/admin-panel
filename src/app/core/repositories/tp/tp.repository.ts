import { Injectable } from "@angular/core";
import { HttpService } from "../../services/http/http.service";
import { Observable } from "rxjs";
import { TpCreationRequest } from "../../models/tp/tp_creation_request";

@Injectable()
export class TpRepository {
    constructor(private http: HttpService) {}

    get(): Observable<any> {
        return this.http.get('/userCondition/view', true);
    }

    create(condition: TpCreationRequest): Observable<any> {
        return this.http.post('/userCondition/add', condition);
    }
}