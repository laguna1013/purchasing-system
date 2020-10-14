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
  constructor(private http: HttpClient, private cookieService: CookieService) { }
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
  getItem() {
    return this.http.post(`${api_url}/${controller}/get_item`, '')
      .pipe(map(res => {
        return res;
      }))
  }
  getItemById(data) {
    return this.http.post(`${api_url}/${controller}/get_item_by_id`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  addItem(data) {
    return this.http.post(`${api_url}/${controller}/add_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  updateItem(data) {
    return this.http.post(`${api_url}/${controller}/update_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  updateItemStatus(data) {
    return this.http.post(`${api_url}/${controller}/update_item_status`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  removeItem(data) {
    return this.http.post(`${api_url}/${controller}/remove_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  addBatchItem(data) {
    return this.http.post(`${api_url}/${controller}/add_batch_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  addOrder(data){
    return this.http.post(`${api_url}/${controller}/add_order`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  getOrders(data){
    return this.http.post(`${api_url}/${controller}/get_orders`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  getAllOrders(){
    return this.http.post(`${api_url}/${controller}/get_all_orders`, '')
      .pipe(map(res => {
        return res;
      }))
  }
  getOrderDetails(data){
    return this.http.post(`${api_url}/${controller}/get_order_details`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  getPsUsers(){
    return this.http.post(`${api_url}/${controller}/get_ps_users`, '')
      .pipe(map(res => {
        return res;
      }))
  }
  approveOrder(data){
    return this.http.post(`${api_url}/${controller}/approve_order`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  deleteOrder(data){
    return this.http.post(`${api_url}/${controller}/delete_order`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  sendMail(data){
    return this.http.post(`${api_url}/${controller}/send_mail`, data)
      .pipe(map(res => {
        return res;
      }))
  }
}
