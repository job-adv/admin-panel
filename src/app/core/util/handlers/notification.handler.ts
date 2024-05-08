import {inject, Injectable} from "@angular/core";
import {MessageService} from "primeng/api";
import {BusinessErrorHandler} from "./business-error.handler";

@Injectable()
export class NotificationHandler {

  private messageService = inject(MessageService);
  private businessErrorHandler = inject(BusinessErrorHandler);


  public notifyValidationOperationFailure(toastId: string, summary: string, message: string) {
    this.messageService.add({
      key: toastId,
      severity: 'error',
      summary: 'Opération échouée',
      detail: message
    });
  }

  public notifyErrorOperationFailure(toastId: string, error: any) {
    this.messageService.add({
      key: toastId,
      severity: 'error',
      summary: 'Opération échouée',
      detail: this.businessErrorHandler.convert(error)
    });
  }

  public notifyOperationSuccess(toastId: string) {
    this.messageService.add({
      key: toastId,
      severity: 'success',
      summary: 'Opération réussie',
      detail: 'Opération faite avec succés'
    });
  }
}
