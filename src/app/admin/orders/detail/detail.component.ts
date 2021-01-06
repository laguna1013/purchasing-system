import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { first } from 'rxjs/operators';
import { ParseService } from '../../../services/parse.service';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    public globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private parseService: ParseService,
    private apiService: ApiService,
    private authService: AuthService,
    private toast: ToastrService
  ) { }

  order_id: string = ''
  loading = false;

  order_detail = {}
  order_items = []
  order_shipments = []
  partial_shipments = []
  order_approvements = []

  selected_item = {}


  approvement_qty = 0
  approvement_price = 0

  dry_cbf_pallet = 83.50;
  frozen_cbf_pallet = 76.00;

  ngOnInit(): void {
    this.order_id = this.route.snapshot.paramMap.get('id')
    this.globalService.menu = 'orders';
    this.get_info()
  }

  get_info(){
    this.apiService.purchasingSystemGetOrderDetails(this.parseService.encode({order_id: this.order_id}))
    .pipe(first())
    .subscribe(data =>{
      if(data['status'] == 'success'){
        this.order_detail = {...data['order_detail']}
        this.order_items = [...data['order_items']]
        this.order_shipments = [...data['order_shipments']]
        this.order_approvements = [...data['order_approvements']]
        
        if(JSON.stringify(this.selected_item) == '{}'){
          this.select_item(this.order_items[0])
        }else{
          this.order_items.forEach(item => {
            if(item.id == this.selected_item['id']){
              this.select_item(item)
            }
          })
        }
        this.get_partial_shipments()
      }
    }, error =>{});
  }

  approve_item(){
    if(this.approvement_qty != 0 && this.approvement_price != 0){
      if(this.approvement_qty > this.selected_item['order_qty'] - this.get_approved_qty(this.selected_item['id'])){
        this.toast.error(`Approvement qty can not exceed ${this.selected_item['order_qty'] - this.get_approved_qty(this.selected_item['id'])}`, 'Approval error')
        return
      }
      if((this.selected_item['qty_enabled'] == 'true') && (this.selected_item['qty'] < 1)){
        this.toast.error(`Not enough items in stock.`, 'Approval error')
        return
      }
      if((this.selected_item['qty_enabled'] == 'true') && (this.selected_item['qty'] - this.get_approved_qty(this.selected_item['id']) < 0)){
        this.toast.error(`Not enough items in stock.`, 'Approval error')
        return
      }
      if(this.approvement_qty > this.selected_item['moq']){
        this.toast.error(`Approvement qty can't excced max order qty.`, 'Approval error')
        return
      }
      this.apiService.purchasingSystemApproveItem(this.parseService.encode({
        qty_enabled: this.selected_item['qty_enabled'],
        order_id: this.order_detail['id'],
        item_id: this.selected_item['id'],
        approved_price: this.approvement_price,
        approved_qty: this.approvement_qty
      })).pipe(first())
      .subscribe(data =>{
        if(data['status'] == 'success'){
          this.toast.success('Approval success')
          this.get_info()
        }
      }, error =>{});
    }else{
      this.toast.error(`Please input valid qty and price.`, 'Approval error')
    }
  }

  ship_items(){
    if(this.order_approvements.length == 0){
      this.toast.error(`No items were approved.`, 'Ship error')
    }else{
      Swal.fire({
        title: 'Shipment date and reference number',
        html: `
          <div class="flex items-center mt-3">
            <div>Shipment date: </div>
            <div class="w-3/5 ml-auto">
              <input id="shipment_date" type="date" class="w-full outline-none border rounded-l-full rounded-r-full py-2 px-4 text-right w-1/2" value="${moment().format('yyyy-MM-DD')}"/>
            </div>
          </div>
          <div class="flex items-center mt-3">
            <div>Reference number: </div>
            <div class="w-3/5 ml-auto">
              <input id="shipment_ref_number" type="text" class="w-full outline-none border rounded-l-full rounded-r-full py-2 px-4 text-right w-1/2" />
            </div>
          </div>
        `,
        focusConfirm: false,
        allowOutsideClick: false,
        showCancelButton: true,
        preConfirm: () => {
          if (document.querySelector('#shipment_ref_number')['value'] == '') {
            this.toast.error('You need to assign reference number.', 'Error');
            return false;
          }
        }
      }).then((result) => {
        if (result.isDismissed) {
        } else {
          let shipment_date = document.querySelector('#shipment_date')['value'];
          let shipment_ref_number = document.querySelector('#shipment_ref_number')['value'];
          this.apiService.purchasingSystemShipOrder(this.parseService.encode({
            shipment_date: shipment_date,
            shipment_ref_number: shipment_ref_number,
            order_id: this.order_detail['id']
          })).pipe(first())
          .subscribe(data =>{
            if(data['status'] == 'success'){
              this.toast.success('Shipment success')
              this.get_info()
            }
          }, error =>{});
        }
      })
    }
  }
  
  complete_order(){
    if(this.order_approvements.length == 0){
      this.apiService.purchasingSystemCompleteOrder(this.parseService.encode({
        order_id: this.order_detail['id']
      })).pipe(first())
      .subscribe(data =>{
        if(data['status'] == 'success'){
          this.toast.success('Order completed successfully')
          this.get_info()
        }
      }, error =>{});
    }else{
      this.toast.error(`There is an approvement waiting for shipment. Please cancel it or ship this approvement.`, 'Approval error')
    }
  }

  select_item(item){
    this.selected_item = {...item}
    this.approvement_price = this.selected_item['price']
    this.approvement_qty = this.selected_item['order_qty'] - this.get_approved_qty(this.selected_item['id'])
  }

  get_approved_qty(item_id){
    let qty = 0
    this.order_approvements.forEach(item => {
      if(item.id == item_id){
        qty += parseFloat(item.approved_qty)
      }
    })
    this.order_shipments.forEach(item => {
      if(item.id == item_id){
        qty += parseFloat(item.approved_qty)
      }
    })
    return qty
  }
  get_total_approvement_price(){
    let price = 0
    this.order_approvements.forEach(item => {
      price += (item.approved_qty * item.approved_price)
    })
    return price
  }
  get_total_shipment_price(shipment_id){
    let price = 0
    this.order_shipments.forEach(item => {
      if(item.shipment_id == shipment_id){
        price += (item.approved_qty * item.approved_price)
      }
    })
    return price
  }
  get_total_approvement_cbf(){
    let ret = {
      dry: 0, 
      frozen: 0
    }
    this.order_approvements.forEach(item => {
      if(item.category == 'frozen'){
        ret.frozen += (parseFloat(item.cbf) * item.approved_qty)
      }else{
        ret.dry += (parseFloat(item.cbf) * item.approved_qty)
      }
    })
    return {...ret}
  }
  get_total_shipment_cbf(shipment_id){
    let ret = {
      dry: 0, 
      frozen: 0
    }
    this.order_shipments.forEach(item => {
      if(item.shipment_id == shipment_id){
        if(item.category == 'frozen'){
          ret.frozen += (parseFloat(item.cbf) * item.approved_qty)
        }else{
          ret.dry += (parseFloat(item.cbf) * item.approved_qty)
        }
      }
    })
    return {...ret}
  }
  get_pallet(cbf){
    return Math.ceil(cbf)
  }
  get_partial_shipments(){
    let partial_shipments = []
    let uniq_ids = []
    this.order_shipments.forEach(item => {
      if(!uniq_ids.includes(item.shipment_id)){
        uniq_ids.push(item.shipment_id)
        partial_shipments.push({
          shipment_id: item.shipment_id,
          shipment_date: item.shipment_date,
          shipment_ref_number: item.shipment_ref_number
        })
      }
    })
    this.partial_shipments = [...partial_shipments]
  }
  remove_approved_item(approvement_id){
    let approved_item = this.order_approvements.filter(item => item.approvement_id == approvement_id)[0]
    this.apiService.purchasingSystemRemoveApprovedItem(this.parseService.encode({
      approvement_id: approvement_id,
      qty_enabled: approved_item['qty_enabled'],
      approved_qty: parseInt(approved_item['approved_qty']),
      purchasing_id: approved_item['id']
    })).pipe(first())
    .subscribe(data =>{
      if(data['status'] == 'success'){
        this.toast.success('Removal success')
        this.get_info()
      }
    }, error =>{});
  }
  back(){
    this.router.navigate(['/orders']);
  }
}
