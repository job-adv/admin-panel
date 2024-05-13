import { Injectable } from "@angular/core";
import { NotificationRepository } from "../../repositories/notification/notification.repository";
import { NotificationCreationRequest } from "../../models/notification/notification_creation_request";
import { Observable } from "rxjs";

@Injectable()
export class NotificationService {
    constructor(private notifcation: NotificationRepository) {}

    create(content: NotificationCreationRequest): Observable<any> {
        return this.notifcation.create(content);
    }
}