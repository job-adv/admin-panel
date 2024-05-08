import {Injectable} from "@angular/core";

@Injectable()
export class BusinessErrorHandler {

  public convert(error: any): string {
    const status = error.status;

    if (status == 409) {
      // User error
      const errorDetails = error.error;

      if (errorDetails) {
        const _embedded = errorDetails._embedded;

        if (_embedded) {
          const errors: ErrorPayload[] = _embedded.errors;

          if (errors) {
            const firstError = errors[0];

            if (firstError) {
              return this.toString(firstError);
            }
          }
        }
      }
    }

    return "Opération échouée, veuillez réessayer plus tard";
  }

  private toString(errorPayload: ErrorPayload): string {
    switch (errorPayload.message) {
      case 'product_category_in_use':
        return "La catégorie est déja utilisée";
    }

    return errorPayload.message;
  }
}

interface ErrorPayload {
  message: string;
}
