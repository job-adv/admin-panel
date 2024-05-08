import {Injectable} from "@angular/core";

@Injectable()
export class SessionManager {

  setValue(key: string, value: any) {
    sessionStorage.setItem(key, value);
  }

  setItem<T>(key: string, value: T) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  getItem<T>(key: string): T | null {
    let item = sessionStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }

    return null;
  }

  removeItem(key: string) {
    sessionStorage.removeItem(key);
  }
}
