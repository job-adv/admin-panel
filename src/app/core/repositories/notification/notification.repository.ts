import { Injectable } from "@angular/core";
import { HttpService } from "../../services/http/http.service";
import { NotificationCreationRequest } from "../../models/notification/notification_creation_request";
import { Observable } from "rxjs";

@Injectable()
export class NotificationRepository {
    constructor(private http: HttpService) {}

    public create(content: NotificationCreationRequest): Observable<any> {
        return this.http.post('/notification/notifyAll', content);
    }
}