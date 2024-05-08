import { Injectable } from "@angular/core";
import { TpRepository } from "../../repositories/tp/tp.repository";
import { Observable } from "rxjs";
import { TpCreationRequest } from "../../models/tp/tp_creation_request";

@Injectable()
export class TpService {
    constructor(private tp: TpRepository) {}

    get(): Observable<any> {
        return this.tp.get();
    }

    create(request: TpCreationRequest): Observable<any> {
        return this.tp.create(request);
    }
}