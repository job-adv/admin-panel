import {Injectable} from "@angular/core";

@Injectable()
export class DateConverter {

  public toString(date: Date): any {
    return date.toISOString();
  }

  public fromString(date: string) {
    return new Date(date);
  }
}
