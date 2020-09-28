import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ParseService } from '../../services/parse.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { Item } from '../../admin/item/item';
import * as moment from 'moment';

import { GlobalService } from '../../services/global.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    public globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private parseService: ParseService,
    private toast: ToastrService,
    private authService: AuthService
  ) { }

  loading = false;
  orders: Array<Object> = [];
  category: string = 'all';
  ticket_created: boolean = false;

  ordered_item: Array<Object> = [];

  selected_item: Object;
  selected_ordered_item: Object;

  qty: number = 1;

  po_number: String = '';
  order_selected: boolean = false;

  price_tbded: boolean = false;
  cbm_tbded: boolean = false;

  user: Object;

  ngOnInit(): void {
    this.globalService.menu = 'order';
    this.getItem();
    this.user = this.authService.currentUser();
  }

  getItem = () => {
    this.loading = true;
    this.api.getItem().pipe(first()).subscribe(
      data => {
        if (data['status'] == 'success') {
          let items = data['data'];
          this.globalService.items = [...items]
        } else {
          this.toast.error('There is an issue with server. Please try again.', 'Error');
        }
        this.loading = false;
      },
      error => {
        console.log(error)
        this.loading = false;
      }
    );
  }

  generate_po_number = () => {
    this.po_number = this.user['name'] + moment().format('hhmmssMMDDYYYY');
  }
  create_ticket = () => {
    this.ticket_created = true;
  }
  select_item = (item) => {
    this.selected_item = item;
  }
  increase_item = () => {
    this.qty++;
  }
  decrease_item = () => {
    if(this.qty > 1){
      this.qty--;
    }
  }
  manual_input_item = (event) => {
    this.qty = event.target.value;
  }
  add_item = () => {
    if(this.ticket_created){
      let flag = false;
      this.ordered_item.forEach(item => {
        if(item['item_id'] == this.selected_item['id']){
          flag = true;
        }
      })
      if(flag){
        this.ordered_item.forEach(item => {
          if(item['item_id'] == this.selected_item['id']){
            item['qty'] += this.qty;
          }
        })
      }else{
        this.ordered_item.push({
          item_id: this.selected_item['id'],
          qty: this.qty
        })
      }
    }else{
      this.toast.error('You need to create a new order before adding items.', 'Error');
    }
    this.reset();
  }
  edit_item = (id) => {
    this.reset();
    this.selected_item = this.globalService.items.filter(item => item['id'] == id)[0];
    this.qty = this.ordered_item.filter(item => item['item_id'] == id)[0]['qty'];
  }
  edit_item_confirm = () => {
    this.ordered_item.map(item => {
      if(item['item_id'] == this.selected_item['id']){
        item['qty'] = this.qty;
      }
    })
    this.reset();
  }
  remove_item = () => {
    this.ordered_item = [...this.ordered_item.filter(item => item['item_id'] != this.selected_item['id'])];
    this.reset();
  }
  confirm_order = () => {
    this.place_order(this.ordered_item);
    this.ordered_item = [];
    this.ticket_created = false;
    this.reset();
  }
  sum_total_price = () => {
    let sum = 0;
    this.price_tbded = false;
    if(this.ordered_item.length != 0){
      this.ordered_item.forEach(item => {
        this.globalService.items.forEach(_item => {
          if(item['item_id'] == _item['id']){
            if((_item['price'] != '') && (_item['price'] != 'Market Price')){
              sum += this.parse_float(_item['price']) * item['qty'];
            }else{
              this.price_tbded = true;
            }
          }
        })
      })
    }
    return sum;
  }
  sum_total_cbm = () => {
    let sum = 0;
    this.cbm_tbded = false;
    if(this.ordered_item.length != 0){
      this.ordered_item.forEach(item => {
        this.globalService.items.forEach(_item => {
          if(item['item_id'] == _item['id']){
            if(_item['cbm'] != ''){
              sum += this.parse_float(_item['cbm']) * item['qty'];
            }else{
              this.cbm_tbded = true;
            }
          }
        })
      })
    }
    return sum;
  }
  parse_float = (val) => {
    return Math.floor(parseFloat(val) * 100) / 100;
  }
  parse_int = (val) => {
    return parseInt(val);
  }
  reset = () => {
    this.selected_item = null;
    this.qty = 1;
  }
  place_order = (items) => {
    console.log(items)
  }
}
