import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service'
import { ApiService } from '../../services/api.service'
import { ParseService } from '../../services/parse.service'
import { AuthService } from '../../services/auth.service'
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Item } from './item';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

const RAW_FIELDS = [
  `BRANCH`,
  `Cost`,
  `Customer Unit of Measure`,
  `Description`,
  `"G.W. ↵(lb)"`,
  `Inventory ID`,
  `Packing Info`,
  `Subcharge (20%)`,
  `Subtotal`,
  `"Total ↵G.W. (lb)"`,
  `Vendor Description`,
  `max order q'ty`,
  `sorting order by weights`,
];
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
    private toast: ToastrService,
    private authService: AuthService
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

  fileUpload = (e) => {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = e.target.files[0];
    this.loading = true;
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.process_data_from_xlxs(jsonData)
      this.loading = false;
    }
    reader.readAsBinaryString(file);
  }
  process_data_from_xlxs = (data) => {
    let ret = [];
    for(let property in data){
      let category = '';
      let items = [];
      switch (property) {
        case 'Dry Food' :
          category = 'dry';
          break;
        case 'Frozen Food' :
          category = 'frozen';
          break;
        default:
          category = 'order';
          break;
      }
      [...data[property].map(raw_item => {
        let _item = new Item();
        Object.entries(raw_item).map(([key, value]) => {
          switch (key) {
            case 'BRANCH' :
              _item.branch = value.toString();
              break;
            case 'Cost' :
              _item.price = value.toString();
              break;
            case 'Customer Unit of Measure' :
              _item.uom = value.toString();
              break;
            case 'Description' :
              _item.description = value.toString();
              break;
            case 'G.W.\r\n(lb)' :
              _item.gross_weight = value.toString();
              break;
            case 'Inventory ID' :
              _item.inventory_id = value.toString();
              break;
            case 'Packing Info' :
              _item.packing_info = value.toString();
              break;
            case 'Q\'ty' :
              _item.qty = value.toString();
              break;
            case 'Subcharge (20%)' :
              break;
            case 'Subtotal' :
              break;
            case 'Total \nG.W. (lb)' :
              break;
            case 'Vendor Description' :
              _item.vendor_description = value.toString();
              break;
            case 'max order q\'ty' :
              _item.moq = value.toString();
              break;
            case 'sorting order by weights' :
              break;
            default:
              break;
          }
        })
        _item.category = category;
        _item.created_user_id = this.authService.currentUser()['id'];
        if(_item.inventory_id != ""){
          items.push(_item)
        }
      })]
      if(category != 'order'){
        ret.push({
          category: category,
          items: items
        })
      }
    }
    this.globalService.items = ret[0].items
    console.log(ret)
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to save the items to database?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if(result.value) {
        this.upload_to_db(ret[0].items)
      }else{

      }
    })
  }

  upload_to_db = (data) => {
    
  }
}
