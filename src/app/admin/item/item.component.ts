import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service'
import { ApiService } from '../../services/api.service'
import { ParseService } from '../../services/parse.service'
import { first } from 'rxjs/operators';
import { Item } from './item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  loading: Boolean = false;

  constructor(public globalService: GlobalService, private route: ActivatedRoute, private router: Router, private api: ApiService, private parseService: ParseService) { }

  ngOnInit(): void {
    this.globalService.menu = 'item';
    this.get_item();
  }

  get_item = () => {
    this.api.getItem().pipe(first()).subscribe(
      data => {
        if(data['status'] == 'success'){
          let items = data['data'];
          this.globalService.items = [...items]
        }
      },
      error => {
        console.log(error)
      }
    );
  }

  status_change = item => {
    if(item.status == 'true'){
      item.status = 'false'
    }else{
      item.status = 'true'
    }
    this.api.updateItemStatus(this.parseService.encode({
      status: item.status,
      inventory_id: item.inventory_id
    })).pipe(first()).subscribe(data => {
      console.log(data)
    }, error => {});
  }

  delete_item = item => {

  }



  edit_item = id => {
    this.router.navigate(['/item/edit', id])
  }
}
