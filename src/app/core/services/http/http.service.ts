import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, retry} from 'rxjs';
import {APP_CONFIG} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private API_URL = APP_CONFIG.apiUrl;
  private RETRY_ATTEMPTS_COUNT = 3;

  httpClient = inject(HttpClient);

  get(url: string, observe: boolean): Observable<any> {
    if (observe) {
      return this.httpClient.get(this.API_URL + url, {observe: 'response'}).pipe(retry(this.RETRY_ATTEMPTS_COUNT));
    } else {
      return this.httpClient.get(this.API_URL + url).pipe(retry(this.RETRY_ATTEMPTS_COUNT));
    }
  }
  
  post(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.API_URL + url, data, {observe: 'response'}).pipe(retry(this.RETRY_ATTEMPTS_COUNT));
  }

  put(url: string, data: any): Observable<any> {
    return this.httpClient.put(this.API_URL + url, data, {observe: 'response'}).pipe(retry(this.RETRY_ATTEMPTS_COUNT));
  }

  patch(url: string, data: any): Observable<any> {
    return this.httpClient.patch(this.API_URL + url, data, {observe: 'response'}).pipe(retry(this.RETRY_ATTEMPTS_COUNT));
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(this.API_URL + url, {observe: 'response'}).pipe(retry(this.RETRY_ATTEMPTS_COUNT));
  }

  getPdf(url: string, data: any): Observable<Blob> {
    return this.httpClient.post(this.API_URL + url, data, {responseType: 'blob'}).pipe(retry(this.RETRY_ATTEMPTS_COUNT));
  }
}
