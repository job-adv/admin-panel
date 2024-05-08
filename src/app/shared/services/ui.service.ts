import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public sideBarVisibility: boolean = false;

  public setVisibility() {
    this.sideBarVisibility = true;
  }
}
