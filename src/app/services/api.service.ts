import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { CookieService } from '../services/cookie.service';

const api_url = 'http://198.11.172.117/sbm-dashboard';

const controller = 'ps';

const purchasing_controller = 'purchasing';

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
  getItem(data) {
    return this.http.post(`${api_url}/${controller}/get_item`, data)
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
  getAllOrders(data){
    return this.http.post(`${api_url}/${controller}/get_all_orders`, data)
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
  getPsAdmin(data){
    return this.http.post(`${api_url}/${controller}/get_ps_admin`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  updateOrderStatus(data){
    return this.http.post(`${api_url}/${controller}/update_order_status`, data)
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
  deleteOrderedItem(data){
    return this.http.post(`${api_url}/${controller}/delete_ordered_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  updateOrder(data){
    return this.http.post(`${api_url}/${controller}/update_order`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  addAdditionalItemsToOrder(data){
    return this.http.post(`${api_url}/${controller}/add_additional_items_to_order`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  sendMail(data){
    return this.http.post(`${api_url}/${controller}/send_mail_to_user`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  sendMailToAdmin(data){
    return this.http.post(`${api_url}/${controller}/send_mail_to_admin`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  sendStatusUpdateMail(data){
    return this.http.post(`${api_url}/${controller}/send_status_update_mail`, data)
      .pipe(map(res => {
        return res;
      }))
  }



  // Rebase 
  purchasingSystemGetItem(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/get_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemAddBatchItem(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/add_batch_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemUpdateItemStatus(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/update_item_status`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemRemoveItem(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/remove_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemAddItem(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/add_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemGetItemById(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/get_item_by_id`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemUpdateItem(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/update_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }

  // Orders 
  purchasingSystemGetAllOrders(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/get_all_orders`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemGetOrderDetails(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/get_order_details`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemApproveItem(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/approve_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemRemoveApprovedItem(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/remove_approved_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemShipOrder(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/ship_order`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemCompleteOrder(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/complete_order`, data)
      .pipe(map(res => {
        return res;
      }))
  }

  // User 
  purchasingSystemGetUserItems(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/get_user_items`, data)
      .pipe(map(res => {
        return res;
      }))
  }

  purchasingSystemCreateOrder(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/create_order`, data)
      .pipe(map(res => {
        return res;
      }))
  }

  purchasingSystemGetCurrentOrder(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/get_current_order`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemGetOrderedItems(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/get_ordered_items`, data)
      .pipe(map(res => {
        return res;
      }))
  }

  purchasingSystemAddOrderedItem(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/add_ordered_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }

  purchasingSystemRemoveOrderDetailItem(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/remove_order_detail_item`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemPlaceOrder(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/place_order`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemCancelOrder(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/cancel_order`, data)
      .pipe(map(res => {
        return res;
      }))
  }

  purchasingSystemGetOrderHistory(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/get_order_history`, data)
      .pipe(map(res => {
        return res;
      }))
  }
  purchasingSystemAcceptItem(data: FormData) {
    return this.http.post(`${api_url}/${purchasing_controller}/accept_item_purchasing`, data)
      .pipe(map(res => {
        return res;
      }))
  }
}
