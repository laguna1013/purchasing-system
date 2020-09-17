import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { CookieService } from '../services/cookie.service';

const api_url = 'http://198.11.172.117/sbm-dashboard';

const controller = 'ps';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor( private http: HttpClient, private cookieService: CookieService ) { }
  // Admin APIs
  login(data) {
    return this.http.post(`${api_url}/auth/ps_login`, data)
      .pipe(map(res => {
        //login successful if the status is success
        if (res['status'] == 'success') {
            this.cookieService.setCookie('currentUser', JSON.stringify(res['res']), 1);
        }
        return res;
      }));
  }
}
