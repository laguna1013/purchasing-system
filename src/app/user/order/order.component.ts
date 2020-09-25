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
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private parseService: ParseService,
    private toast: ToastrService,
    private authService: AuthService
  ) { }

  loading = false;
  orders: Array<Object> = [];

  item_display_style: String = 'list';
  ticket_created: boolean = false;

  ordered_item: Array<Object> = [];

  selected_item: Object;
  selected_ordered_item: Object;

  po_number: String = '';
  order_selected: boolean = false;

  ngOnInit(): void {
    this.globalService.menu = 'order';
    this.getItem();
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
  item_display_style_change = style => {
    this.item_display_style = style;
  }

  generate_po_number = () => {
    this.po_number = 'david' + moment().format('hhmmssMMDDYYYY');
  }
  create_ticket = () => {
    this.ticket_created = true;
  }

  select_item = item => {
    this.selected_item = item;
    if(this.selected_item['max_order_qty'] == 0){
      this.selected_item['added_qty'] = 0;
    }else{
      this.selected_item['added_qty'] = 1;
    }
  }

  select_ordered_item = item => {
    this.selected_item = null;
    this.selected_ordered_item = item;
    this.globalService.items.forEach(item => {
      if(item['id'] == this.selected_ordered_item['id']){
        this.selected_item = item;
      }
    })
  }

  increase_selected_item = () => {
    if(this.selected_item['added_qty'] < this.selected_item['max_order_qty']){
      this.selected_item['added_qty']++;
    }else{
      // Show error alert
    }
  }
  decrease_selected_item = () => {
    if(0 < this.selected_item['added_qty']){
      this.selected_item['added_qty']--;
    }
  }
  added_qty_change = (e) => {
    this.selected_item['added_qty'] = parseInt(e.target.value);
  }

  order_item = () => {
    this.selected_ordered_item = null;
    if(this.selected_item['added_qty'] != 0){
      if(this.ordered_item.length != 0){
        this.ordered_item.forEach(item => {
          if(item['id'] == this.selected_item['id']){
            this.selected_ordered_item = item;
          }
        })
      }
      if(this.selected_ordered_item){
        if(this.selected_item['max_order_qty'] < this.selected_ordered_item['ordered_qty'] + this.selected_item['added_qty']){ // Check if ordered too much than stock
          this.selected_ordered_item['ordered_qty'] += this.selected_item['max_order_qty'];
          this.selected_item['max_order_qty'] = 0;
          this.selected_item['added_qty'] = this.selected_item['max_order_qty'];
        }
        this.selected_ordered_item['ordered_qty'] += this.selected_item['added_qty'];
        this.selected_item['max_order_qty'] -= this.selected_item['added_qty'];
      }else{
        if(this.selected_item['max_order_qty'] < this.selected_item['added_qty']){ // Check if ordered too much than stock
          this.selected_item['added_qty'] = this.selected_item['max_order_qty'];
          this.selected_item['max_order_qty'] = 0;
        }else{
          this.selected_item['max_order_qty'] -= this.selected_item['added_qty'];
        }
        this.ordered_item.push({
          id: this.selected_item['id'],
          image: this.selected_item['image'],
          description: this.selected_item['description'],
          vendor_description: this.selected_item['vendor_description'],
          cost: this.selected_item['cost'],
          packing_info: this.selected_item['packing_info'],
          ordered_qty: this.selected_item['added_qty'],
          base_uom: this.selected_item['base_uom'],
          uom: this.selected_item['uom'],
          primary_unit: this.selected_item['primary_unit'],
          secondary_unit: this.selected_item['secondary_unit'],
          big_unit: this.selected_item['big_unit'],
          cbm: this.selected_item['cbm'],
        })
      }
    }else{
      // Show error alert
    }
    this.selected_item['added_qty'] = 0;
  }

  remove_ordered_item = () => {
    this.selected_item['max_order_qty'] += this.selected_ordered_item['ordered_qty'];
    this.ordered_item = [...this.ordered_item.filter(item => item['id'] != this.selected_ordered_item['id'])];
    this.selected_ordered_item = null;
  }

  clear_ordered_items = () => {
    this.order_selected = false;
    this.selected_item = null;
    this.selected_ordered_item = null;
    this.ordered_item = [];
  }

  place_order = () => {
    if(this.ordered_item.length != 0){
      if(this.order_selected){
        if(this.ordered_item.length != 0){
          this.orders.map(item => {
            if(item['po_id'] == this.po_number){
              item['po_date'] = moment().format('hh:mm MMM DD, ddd');
              item['charge'] = this.sum_total_price();
              item['items'] = [...this.ordered_item];
            }
          })
        }
      }else{
        this.orders.push({
          po_id: this.po_number,
          customer_name: 'David',
          po_date: moment().format('hh:mm MMM DD, ddd'),
          status: 'pending',
          charge: this.sum_total_price(),
          items: [...this.ordered_item]
        });
      }
      this.ticket_created = false;
      this.clear_ordered_items();
    }else{

    }
  }
  edit_order = item => {
    this.order_selected = true;
    this.ordered_item = [...item.items];
    this.po_number = item.po_id;
    this.ticket_created = true;
  }

  sum_total_price = () => {
    let sum = 0;
    if(this.ordered_item.length != 0){
      this.ordered_item.forEach(item => {
        sum += item['cost'] * item['ordered_qty'];
      })
    }
    return sum;
  }
  sum_total_cbm = () => {
    let sum = 0;
    if(this.ordered_item.length != 0){
      this.ordered_item.forEach(item => {
        sum += item['cbm'] * item['ordered_qty'];
      })
    }
    return sum;
  }
}
