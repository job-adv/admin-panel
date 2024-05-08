import {Injectable} from "@angular/core";

@Injectable()
export class StorageManager {

  setValue(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  getValue(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
