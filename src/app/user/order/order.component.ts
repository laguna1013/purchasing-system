import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { customAlphabet } from 'nanoid'

import { ApiService } from '../../services/api.service';
import { ParseService } from '../../services/parse.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import * as moment from 'moment';
import * as XLSX from 'xlsx';

import { GlobalService } from '../../services/global.service'

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 17)
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

  dry_cbf_pallet = 83.50;
  frozen_cbf_pallet = 76.00;

  loading = false;
  item_display_style = 'grid';
  category: string = 'all';
  categories = []
  ticket_created: boolean = false;

  ordered_item: Array<Object> = [];

  selected_item: Object;
  selected_ordered_item: Object;

  selected_order: Object;

  qty: number = 1;

  ordered_item_details: Array<Object> = [];

  po_number: String = '';
  order_id = ''
  order_selected: boolean = false;

  cbm_tbded: boolean = false;

  user: Object;
  admin: Object;

  search_key = '';

  ngOnInit(): void {
    this.globalService.menu = 'order';
    this.user = this.authService.currentUser();
    this.getItem();
    this.getCurrentOrder()
  }

  category_change = (event) => {
    this.category = event.target.value;
  }
  item_display_style_change = (style) => {
    this.item_display_style = style;
  }
  getItem = () => {
    this.loading = true;
    this.api.purchasingSystemGetUserItems(
      this.parseService.encode({
        company: this.authService.currentUser()['company'],
        shop: this.authService.currentUser()['shop_name']
      })
    ).pipe(first()).subscribe(
      data => {
        if (data['status'] == 'success') {
          let items = data['data'];
          items.forEach(item => {
            if(!this.categories.includes(item.category)){
              this.categories.push(item.category)
            }
          })
          this.globalService.items = [...items];
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

  getCurrentOrder = () => {
    this.api.purchasingSystemGetCurrentOrder(this.parseService.encode({
      company: this.authService.currentUser()['company'],
      shop: this.authService.currentUser()['shop_name']
    })).pipe(first()).subscribe(
      data => {
        if (data['status'] == 'success') {
          if(data['data'].length != 0){
            this.ticket_created = true
            this.po_number = data['data'][0].order_ref
            this.order_id = data['data'][0].id
            this.getOrderedItems(data['data'][0].id)
          }else{
            this.ticket_created = false
            this.ordered_item = []
          }
        } else {
          this.toast.error('There is an issue with server. Please try again.', 'Error');
        }
      },
      error => {
        console.log(error)
      }
    );
  }

  getOrderedItems = (order_id) => {
    this.api.purchasingSystemGetOrderedItems(this.parseService.encode({
      id: order_id
    })).pipe(first()).subscribe(
      data => {
        if (data['status'] == 'success') {
          let items = data['data']
          this.ordered_item = [...items]
        } else {
          this.toast.error('There is an issue with server. Please try again.', 'Error');
        }
      },
      error => {
        console.log(error)
      }
    );
  }


  getOrders = (user_id) => {

  }
  generate_po_number = () => {
    this.po_number = nanoid()
  }
  create_ticket = () => {
    this.ticket_created = true;
    this.api.purchasingSystemCreateOrder(this.parseService.encode({
      'company': this.authService.currentUser()['company'],
      'shop': this.authService.currentUser()['shop_name'],
      'branch': this.authService.currentUser()['branch_id'],
      'customer_id': this.authService.currentUser()['id'],
      'order_ref': this.po_number
    })).pipe(first()).subscribe(data => {
      if (data['status'] == 'success') {
        this.order_id = data['data']
        this.toast.success('Order created successfully. Please add items', 'Success');
      }
    }, error => {
      this.toast.error('There is an issue with server. Please try again later.', 'Error');
    });
  }
  select_item = (item) => {
    this.selected_item = item;
  }
  increase_item = () => {
    if (this.qty < this.selected_item['moq']) {
      this.qty++;
    }
  }
  decrease_item = () => {
    if (this.qty > 1) {
      this.qty--;
    }
  }
  manual_input_item = (event) => {
    let val = parseInt(event.target.value);
    if (event.target.value == '') val = 0;
    if (val < parseInt(this.selected_item['moq'])) {
      this.qty = val;
    } else {
      event.target.value = parseInt(this.selected_item['moq']);
      this.qty = parseInt(this.selected_item['moq']);
    }
  }
  add_item = () => {
    if (this.ticket_created) {
      let flag = false;
      this.ordered_item.forEach(item => {
        if (item['id'] == this.selected_item['id']) {
          flag = true;
        }
      })
      let final_qty = 0
      if (flag) {
        this.ordered_item.forEach(item => {
          if (item['id'] == this.selected_item['id']) {
            final_qty = parseInt(item['ordered_qty']) + this.qty
          }
        })
      } else {
        final_qty = this.qty
      }

      if(final_qty > parseFloat(this.selected_item['moq'])){
        this.toast.error('Order qty can not exceed max order qty.', 'Error');
      }else{
        this.api.purchasingSystemAddOrderedItem(this.parseService.encode({
          'order_ref': this.po_number,
          'order_qty': final_qty,
          'item_id': this.selected_item['id']
        })).pipe(first()).subscribe(data => {
          if (data['status'] == 'success') {
            this.ordered_item = [...data['data']]
          }
        }, error => {
          this.toast.error('There is an issue with server. Please try again later.', 'Error');
        });
      }


    } else {
      this.toast.error('You need to create a new order before adding items.', 'Error');
    }
    this.reset();
  }

  remove_item = (item_id) => {
    this.api.purchasingSystemRemoveOrderDetailItem(this.parseService.encode({
      'order_id': this.order_id,
      'item_id': item_id
    })).pipe(first()).subscribe(data => {
      if (data['status'] == 'success') {
        this.ordered_item = [...data['data']]
      }
    }, error => {
      this.toast.error('There is an issue with server. Please try again later.', 'Error');
    });
    //this.reset();
  }
  cancel_order = () => {
    this.api.purchasingSystemCancelOrder(this.parseService.encode({
      'order_id': this.order_id
    })).pipe(first()).subscribe(data => {
      if ((data['status'] == 'success') && data['data']) {
        this.getCurrentOrder()
        this.toast.success('Your order has been cancelled successfully.', 'Success');
      }
    }, error => {
      this.toast.error('There is an issue with server. Please try again later.', 'Error');
    });
  }
  place_order = () => {
    this.api.purchasingSystemPlaceOrder(this.parseService.encode({
      'order_id': this.order_id
    })).pipe(first()).subscribe(data => {
      if ((data['status'] == 'success') && data['data']) {
        this.getCurrentOrder()
        this.toast.success('Your order has been placed successfully.', 'Success');
      }
    }, error => {
      this.toast.error('There is an issue with server. Please try again later.', 'Error');
    });
  }

  reset = () => {
    this.selected_item = null;
    this.qty = 1;
  }
  send_mail_to_user = (items) => {
    this.api.sendMail(this.parseService.encode({
      item_details: JSON.stringify(this.globalService.get_item_details(items)),
      total_price: this.globalService.sum_total_price(items),
      info_dry: JSON.stringify(this.globalService.sum_total_cbm_dry(items)),
      info_frozen: JSON.stringify(this.globalService.sum_total_cbm_frozen(items)),
      order_id: this.po_number,
      user_name: this.user['name'],
      company: this.user['company'],
      to: this.user['email'],
      subject: "Your order has been placed successfully",
      message: "Your order has been placed successfully and notified to purchasing system department admin. You will be get notified when the order is approved and shipped.",
    })).pipe(first()).subscribe(data => {
      if (data['status'] == 'success') {
        this.send_mail_to_admin(items);
        this.toast.success('Purchasing order mail sent successfully to your email.', 'Success');
      }
      this.loading = false;
    }, error => {
      this.loading = false;
      this.toast.error('There is an issue with server. Please try again later.', 'Error');
    });
  }
  send_mail_to_admin = (items) => {
    this.api.sendMailToAdmin(this.parseService.encode({
      item_details: JSON.stringify(this.globalService.get_item_details(items)),
      total_price: this.globalService.sum_total_price(items),
      info_dry: JSON.stringify(this.globalService.sum_total_cbm_dry(items)),
      info_frozen: JSON.stringify(this.globalService.sum_total_cbm_frozen(items)),
      order_id: this.po_number,
      admin_name: this.admin['name'],
      user_name: this.user['name'],
      company: this.user['company'],
      to: this.admin['email'],
      subject: "There is an incoming order",
      message: `${this.user['name']} has placed an order. Please review it and take a further action.`,
    })).pipe(first()).subscribe(data => {
      if (data['status'] == 'success') {
        //this.toast.success('Purchasing order mail sent successfully to your email.', 'Success');
      }
      this.loading = false;
    }, error => {
      this.loading = false;
      this.toast.error('There is an issue with server. Please try again later.', 'Error');
    });
  }

  search_item = (event) => {
    this.search_key = event.target.value;
  }
  filter_item = (item) => {
    if (this.search_key == '') {
      return true;
    } else {
      if ((item['description'].toLowerCase().indexOf(this.search_key.toLowerCase()) != -1) || (item['vendor_description'].toLowerCase().indexOf(this.search_key.toLowerCase()) != -1)) {
        return true;
      }
      return false;
    }
  }

  export_excel = () => {
    /* table id is passed over here */
    let element = document.getElementById('export-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, `${this.po_number}.xlsx`);
  }

  get_pallet(cbf){
    return Math.ceil(cbf)
  }
  get_total_order_price(){
    let price = 0
    this.ordered_item.forEach(item => {
      price += (parseFloat(item['ordered_qty']) * parseFloat(item['price']))
    })
    return price
  }
  get_total_order_cbf(){
    let ret = {
      dry: 0,
      frozen: 0
    }
    this.ordered_item.forEach(item => {
      if(item['category'] == 'frozen'){
        ret.frozen += (parseFloat(item['cbf']) * item['qty'])
      }else{
        ret.dry += (parseFloat(item['cbf']) * item['qty'])
      }
    })
    return {...ret}
  }
}
