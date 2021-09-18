import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) { }

  sendMessage(data: any) {
    return this.http.post(environment.apiURL + "sendmail", data, { responseType: 'text' });
  }
}
