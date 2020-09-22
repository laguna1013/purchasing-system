import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service'
import { ApiService } from '../../services/api.service'
import { ParseService } from '../../services/parse.service'
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Item } from './item';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  loading: Boolean = false;
  constructor(
    public globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private parseService: ParseService,
    private toast: ToastrService
  ){ }

  ngOnInit(): void {
    this.globalService.menu = 'item';
    this.get_item();
  }

  get_item = () => {
    this.loading = true;
    this.api.getItem().pipe(first()).subscribe(
      data => {
        if(data['status'] == 'success'){
          let items = data['data'];
          this.globalService.items = [...items]
        }else{
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

  status_change = item => {
    if(item.status == 'true'){
      item.status = 'false'
    }else{
      item.status = 'true'
    }
    this.loading = true;
    this.api.updateItemStatus(this.parseService.encode({
      status: item.status,
      inventory_id: item.inventory_id
    })).pipe(first()).subscribe(data => {
      if(data['data'] == 1){
        this.toast.success('Item status changed successfully!', 'Success');
      }else{
        this.toast.error('There is an issue with server. Please try again after refreshing browser.', 'Error');
      }
      this.loading = false;
    }, error => {
      this.loading = false;
      this.toast.error('There is an issue with server. Please try again after refreshing browser.', 'Error');
    });
  }

  delete_item = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to remove this item? ' + item.inventory_id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if(result.value) {
        this.loading = true;
        this.api.removeItem(this.parseService.encode({
          inventory_id: item.inventory_id
        })).pipe(first()).subscribe(data => {
          console.log(data)
          this.get_item()
          this.loading = false;
        }, error => {
          this.loading = false;
          this.toast.error('There is an issue with server. Please try again after refreshing browser.', 'Error');
        });
      }else{

      }
    })
  }

  edit_item = id => {
    this.router.navigate(['/item/edit', id])
  }
}
