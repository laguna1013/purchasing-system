import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  items: Array<Object> = [
    {
      "id": 7850,
      "description": "Brown Sugar & Peanut Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=55",
      "vendor_description": "芋頭風味粉",
      "cost": 20.6,
      "packing_info": "0.6kg/bag 24bags/ctn",
      "uom": "bottle",
      "base_uom": "g",
      "max_order_qty": 40
    },
    {
      "id": 9366,
      "description": "Mung Bean Cake",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=50",
      "vendor_description": "黑糖粉",
      "cost": 20.6,
      "packing_info": "600ml/bottle 20 bottles/ctn",
      "uom": "ctn",
      "base_uom": "pcs",
      "max_order_qty": 10
    },
    {
      "id": 8695,
      "description": "Q Mochi - Brown Sugar ",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=93",
      "vendor_description": "杏仁粉 ",
      "cost": 120,
      "packing_info": "600ml/bottle 20 bottles/ctn",
      "uom": "box",
      "base_uom": "sets",
      "max_order_qty": 60
    },
    {
      "id": 8738,
      "description": "Q Mochi - Brown Sugar ",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=21",
      "vendor_description": "杏仁粉 ",
      "cost": 120,
      "packing_info": "600ml/bottle 20 bottles/ctn",
      "uom": "ctn",
      "base_uom": "g",
      "max_order_qty": 60
    },
    {
      "id": 5791,
      "description": "Sweet potato Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=24",
      "vendor_description": "雞蛋仔專用粉-原味",
      "cost": 30.5,
      "packing_info": "600ml/bottle 20 bottles/ctn",
      "uom": "set",
      "base_uom": "sets",
      "max_order_qty": 40
    },
    {
      "id": 5248,
      "description": "Taro",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=76",
      "vendor_description": "杏仁粉 ",
      "cost": 30.5,
      "packing_info": "1kg/bag 6bags/ctn",
      "uom": "bottle",
      "base_uom": "kg",
      "max_order_qty": 10
    },
    {
      "id": 7528,
      "description": "Mini Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=47",
      "vendor_description": "雞蛋仔專用粉-原味",
      "cost": 120,
      "packing_info": "1kg/bag 6bags/ctn",
      "uom": "bag",
      "base_uom": "kg",
      "max_order_qty": 20
    },
    {
      "id": 7857,
      "description": "Q Mochi - Original",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=97",
      "vendor_description": "黑糖粉",
      "cost": 10.5,
      "packing_info": "600ml/bottle 20 bottles/ctn",
      "uom": "box",
      "base_uom": "ml",
      "max_order_qty": 70
    },
    {
      "id": 5916,
      "description": "Raw Soy Milk",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=32",
      "vendor_description": "焦糖粉",
      "cost": 30.3,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "bag",
      "base_uom": "kg",
      "max_order_qty": 10
    },
    {
      "id": 4002,
      "description": "Barley",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=27",
      "vendor_description": "茉香綠茶",
      "cost": 40.2,
      "packing_info": "12pcs/box 18boxes/ctn",
      "uom": "bag",
      "base_uom": "g",
      "max_order_qty": 40
    },
    {
      "id": 1139,
      "description": "Rice balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=46",
      "vendor_description": "杏仁粉 ",
      "cost": 10.5,
      "packing_info": "12pcs/box 18boxes/ctn",
      "uom": "set",
      "base_uom": "kg",
      "max_order_qty": 60
    },
    {
      "id": 6351,
      "description": "Rice balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=51",
      "vendor_description": "鮮芋仙‐燒仙草粉",
      "cost": 20.6,
      "packing_info": "1kg/bag 6bags/ctn",
      "uom": "box",
      "base_uom": "sets",
      "max_order_qty": 10
    },
    {
      "id": 3914,
      "description": "Brown Sugar & Peanut Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=77",
      "vendor_description": "奶精粉",
      "cost": 40.2,
      "packing_info": "12pcs/box 18boxes/ctn",
      "uom": "bag",
      "base_uom": "ml",
      "max_order_qty": 20
    },
    {
      "id": 8407,
      "description": "Jelly Noodle",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=13",
      "vendor_description": "茉香綠茶",
      "cost": 40.2,
      "packing_info": "12pcs/box 18boxes/ctn",
      "uom": "set",
      "base_uom": "pcs",
      "max_order_qty": 50
    },
    {
      "id": 7680,
      "description": "Barley",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=34",
      "vendor_description": "奶蓋粉",
      "cost": 30.5,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "ctn",
      "base_uom": "pcs",
      "max_order_qty": 70
    },
    {
      "id": 6042,
      "description": "Mini Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=97",
      "vendor_description": "雞蛋仔專用粉-原味",
      "cost": 30.3,
      "packing_info": "12pcs/box 18boxes/ctn",
      "uom": "bottle",
      "base_uom": "sets",
      "max_order_qty": 40
    },
    {
      "id": 2994,
      "description": "Jelly Noodle",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=99",
      "vendor_description": "鮮芋仙‐燒仙草粉",
      "cost": 130.7,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "bottle",
      "base_uom": "g",
      "max_order_qty": 30
    },
    {
      "id": 4554,
      "description": "Brown Sugar & Sesame Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=87",
      "vendor_description": "鮮芋仙紅茶",
      "cost": 10.5,
      "packing_info": "0.6kg/bag 24bags/ctn",
      "uom": "bottle",
      "base_uom": "kg",
      "max_order_qty": 70
    },
    {
      "id": 7237,
      "description": "Q Mochi - Brown Sugar ",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=63",
      "vendor_description": "杏仁粉 ",
      "cost": 130.7,
      "packing_info": "600ml/bottle 20 bottles/ctn",
      "uom": "box",
      "base_uom": "g",
      "max_order_qty": 40
    },
    {
      "id": 1511,
      "description": "Raw Soy Milk",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=73",
      "vendor_description": "蜜香紅茶",
      "cost": 20.6,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "bottle",
      "base_uom": "pcs",
      "max_order_qty": 50
    },
    {
      "id": 9412,
      "description": "Taro",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=36",
      "vendor_description": "奶香金萱(青茶)",
      "cost": 30.3,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "ctn",
      "base_uom": "ml",
      "max_order_qty": 10
    },
    {
      "id": 6231,
      "description": "Passion Fruit Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=23",
      "vendor_description": "寒天凍粉",
      "cost": 20.6,
      "packing_info": "0.6kg/bag 24bags/ctn",
      "uom": "bag",
      "base_uom": "g",
      "max_order_qty": 70
    },
    {
      "id": 2438,
      "description": "Q Mochi - Original",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=81",
      "vendor_description": "奶精粉",
      "cost": 130.7,
      "packing_info": "0.6kg/bag 24bags/ctn",
      "uom": "set",
      "base_uom": "g",
      "max_order_qty": 70
    },
    {
      "id": 4921,
      "description": "Mung Bean Cake",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=64",
      "vendor_description": "雞蛋仔專用粉-原味",
      "cost": 20.6,
      "packing_info": "600ml/bottle 20 bottles/ctn",
      "uom": "box",
      "base_uom": "sets",
      "max_order_qty": 50
    },
    {
      "id": 9060,
      "description": "Raw Soy Milk",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=97",
      "vendor_description": "奶蓋粉",
      "cost": 120,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "set",
      "base_uom": "ml",
      "max_order_qty": 20
    },
    {
      "id": 9777,
      "description": "Mini Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=39",
      "vendor_description": "芋頭風味粉",
      "cost": 10.5,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "set",
      "base_uom": "g",
      "max_order_qty": 70
    },
    {
      "id": 9229,
      "description": "Rice balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=13",
      "vendor_description": "奶蓋粉",
      "cost": 130.7,
      "packing_info": "0.6kg/bag 24bags/ctn",
      "uom": "set",
      "base_uom": "kg",
      "max_order_qty": 60
    },
    {
      "id": 9442,
      "description": "Brown Sugar & Sesame Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=48",
      "vendor_description": "芋頭風味粉",
      "cost": 20.6,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "bottle",
      "base_uom": "sets",
      "max_order_qty": 70
    },
    {
      "id": 3139,
      "description": "Passion Fruit Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=42",
      "vendor_description": "蜜香紅茶",
      "cost": 30.5,
      "packing_info": "0.6kg/bag 24bags/ctn",
      "uom": "set",
      "base_uom": "ml",
      "max_order_qty": 10
    },
    {
      "id": 1194,
      "description": "Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=2",
      "vendor_description": "寒天凍粉",
      "cost": 30.5,
      "packing_info": "1kg/bag 6bags/ctn",
      "uom": "bottle",
      "base_uom": "ml",
      "max_order_qty": 70
    },
    {
      "id": 1096,
      "description": "Sesame Rice Balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=56",
      "vendor_description": "焦糖布丁粉",
      "cost": 10.5,
      "packing_info": "1kg/bag 6bags/ctn",
      "uom": "ctn",
      "base_uom": "pcs",
      "max_order_qty": 30
    },
    {
      "id": 1426,
      "description": "Mung Bean Cake",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=58",
      "vendor_description": "寒天凍粉",
      "cost": 10.5,
      "packing_info": "1kg/bag 6bags/ctn",
      "uom": "box",
      "base_uom": "sets",
      "max_order_qty": 10
    },
    {
      "id": 4285,
      "description": "Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=71",
      "vendor_description": "黑糖粉",
      "cost": 130.7,
      "packing_info": "0.6kg/bag 24bags/ctn",
      "uom": "set",
      "base_uom": "ml",
      "max_order_qty": 50
    },
    {
      "id": 8017,
      "description": "Taro balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=99",
      "vendor_description": "奶香金萱(青茶)",
      "cost": 30.5,
      "packing_info": "1kg/bag 6bags/ctn",
      "uom": "bag",
      "base_uom": "sets",
      "max_order_qty": 10
    },
    {
      "id": 1928,
      "description": "Taro",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=12",
      "vendor_description": "芋頭風味粉",
      "cost": 10.5,
      "packing_info": "0.6kg/bag 24bags/ctn",
      "uom": "box",
      "base_uom": "sets",
      "max_order_qty": 40
    },
    {
      "id": 1648,
      "description": "Brown Sugar & Sesame Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=96",
      "vendor_description": "芋頭風味粉",
      "cost": 40.2,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "set",
      "base_uom": "g",
      "max_order_qty": 60
    },
    {
      "id": 2170,
      "description": "Jelly Noodle",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=87",
      "vendor_description": "寒天凍粉",
      "cost": 30.3,
      "packing_info": "600ml/bottle 20 bottles/ctn",
      "uom": "set",
      "base_uom": "ml",
      "max_order_qty": 30
    },
    {
      "id": 4487,
      "description": "Raw Soy Milk",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=30",
      "vendor_description": "寒天凍粉",
      "cost": 30.3,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "box",
      "base_uom": "kg",
      "max_order_qty": 70
    },
    {
      "id": 8823,
      "description": "Lemon Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=0",
      "vendor_description": "豆花粉",
      "cost": 30.5,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "ctn",
      "base_uom": "pcs",
      "max_order_qty": 60
    },
    {
      "id": 4671,
      "description": "Taro",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=76",
      "vendor_description": "鮮芋仙‐燒仙草粉",
      "cost": 20.6,
      "packing_info": "1kg/bag 6bags/ctn",
      "uom": "bottle",
      "base_uom": "pcs",
      "max_order_qty": 40
    },
    {
      "id": 4646,
      "description": "Raw Soy Milk",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=94",
      "vendor_description": "奶蓋粉",
      "cost": 130.7,
      "packing_info": "12pcs/box 18boxes/ctn",
      "uom": "bag",
      "base_uom": "g",
      "max_order_qty": 10
    },
    {
      "id": 9211,
      "description": "Raw Soy Milk",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=15",
      "vendor_description": "鮮芋仙紅茶",
      "cost": 40.2,
      "packing_info": "600ml/bottle 20 bottles/ctn",
      "uom": "set",
      "base_uom": "kg",
      "max_order_qty": 60
    },
    {
      "id": 3015,
      "description": "Refined Sugar",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=22",
      "vendor_description": "雞蛋仔專用粉-原味",
      "cost": 10.5,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "box",
      "base_uom": "g",
      "max_order_qty": 10
    },
    {
      "id": 3220,
      "description": "Brown Sugar & Peanut Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=77",
      "vendor_description": "寒天凍粉",
      "cost": 30.5,
      "packing_info": "0.6kg/bag 24bags/ctn",
      "uom": "bottle",
      "base_uom": "pcs",
      "max_order_qty": 20
    },
    {
      "id": 7351,
      "description": "Sesame Rice Balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=50",
      "vendor_description": "奶蓋粉",
      "cost": 30.5,
      "packing_info": "0.6kg/bag 24bags/ctn",
      "uom": "box",
      "base_uom": "g",
      "max_order_qty": 60
    },
    {
      "id": 6795,
      "description": "Q Mochi - Brown Sugar ",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=64",
      "vendor_description": "奶香金萱(青茶)",
      "cost": 130.7,
      "packing_info": "600ml/bottle 20 bottles/ctn",
      "uom": "ctn",
      "base_uom": "ml",
      "max_order_qty": 60
    },
    {
      "id": 8781,
      "description": "Sesame Rice Balls",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=17",
      "vendor_description": "寒天凍粉",
      "cost": 20.6,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "bag",
      "base_uom": "sets",
      "max_order_qty": 40
    },
    {
      "id": 6956,
      "description": "Brown Sugar & Sesame Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=90",
      "vendor_description": "雞蛋仔專用粉-原味",
      "cost": 30.3,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "ctn",
      "base_uom": "sets",
      "max_order_qty": 60
    },
    {
      "id": 7565,
      "description": "Lemon Syrup",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=98",
      "vendor_description": "寒天凍粉",
      "cost": 30.5,
      "packing_info": "1kg/bag 6bags/ctn",
      "uom": "bag",
      "base_uom": "pcs",
      "max_order_qty": 50
    },
    {
      "id": 5031,
      "description": "Brown Sugar & Peanut Mochi",
      "image": "https://source.unsplash.com/collection/1163637/480x480/?sig=55",
      "vendor_description": "焦糖粉",
      "cost": 40.2,
      "packing_info": "1.2kg/bag 12bags/ctn",
      "uom": "bag",
      "base_uom": "sets",
      "max_order_qty": 10
    }
  ];
  orders: Array<Object> = [];

  item_display_style: String = 'list';
  ticket_created: boolean = false;

  ordered_item: Array<Object> = [];

  selected_item: Object;
  selected_ordered_item: Object;

  po_number: String = '';
  order_selected: boolean = false;;

  ngOnInit(): void {
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
    this.items.forEach(item => {
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
        this.selected_ordered_item['ordered_qty'] += this.selected_item['added_qty'];
        this.selected_item['max_order_qty'] -= this.selected_item['added_qty'];
      }else{
        this.selected_item['max_order_qty'] -= this.selected_item['added_qty'];
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
}
