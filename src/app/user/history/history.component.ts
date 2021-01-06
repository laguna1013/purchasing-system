import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api.service';
import { ParseService } from '../../services/parse.service';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(
    public globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private parseService: ParseService,
    private toast: ToastrService,
    private authService: AuthService
  ) { }

  loading = false
  orders = []
  filter = 'all'

  ngOnInit(): void {
    this.globalService.menu = 'history';
    this.get_orders();
  }
  get_orders = () => {
    this.loading = true;
    this.api.purchasingSystemGetOrderHistory(this.parseService.encode({
      company: this.authService.currentUser()['company'],
      shop: this.authService.currentUser()['shop_name'],
      branch: this.authService.currentUser()['branch_id']
    })).pipe(first()).subscribe(
      data => {
        if (data['status'] == 'success') {
          this.orders = data['data'].filter((item: { [x: string]: string; }) => item['status'] != 'draft');
        } else {
          this.toast.error('There had been a database error. Please try again later.', 'Error');
        }
        this.loading = false;
      },
      error => {
        this.toast.error('There had been a database error. Please try again later.', 'Error');
        this.loading = true;
      }
    );
  }
  get_order_details = (order_id) => {
    this.router.navigate(['/history/detail/', order_id])
  }
  change_filter = (filter: string) => {
    this.filter = filter;
  }
  get_filtered_order_length = () => {
    if (this.filter == 'all') {
      return this.orders.length;
    } else {
      return this.orders.filter(item => item['status'] == this.filter).length;
    }
  }
  format_date_time = (date) => {
    return moment(date, 'YYYY-MM-DD HH:mm:ss').format('hh:mm A MMM DD ddd, YYYY')
  }
}
