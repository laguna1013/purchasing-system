import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { first } from 'rxjs/operators';
import { Item } from '../item';
import { ParseService } from '../../../services/parse.service';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {

  constructor(
    public globalService: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private parseService: ParseService,
    private apiService: ApiService,
    private authService: AuthService,
    private toast: ToastrService
  ) { }

  item_id: string = ''
  item = new Item();
  original_item = new Item();
  file: File;
  loading = false;

  ngOnInit(): void {
    this.globalService.menu = 'items';
    this.item_id = this.route.snapshot.paramMap.get('id')
    this.apiService.purchasingSystemGetItemById(this.parseService.encode({id: this.item_id}))
      .pipe(first())
      .subscribe(data =>{
        this.item = {...data['data']}
        this.original_item = {...data['data']}
      }, error =>{});
  }

  onSelect(event: { addedFiles: File[]; }) {
    const reader = new FileReader();
    this.file = event.addedFiles[0];
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.item.image = reader.result;
    };
  }
  remove_item_image = () => {
    this.item.image = '';
  }
  switch($e, property){
    if(property == 'status'){
      this.item.status = $e.target.checked
    }else{
      this.item.qty_display = $e.target.checked
    }
  }
  onSubmit = () => {
    this.loading = true;
    this.apiService.purchasingSystemUpdateItem(this.parseService.encode(this.item))
      .pipe(first())
      .subscribe(
        data => {
          if(data['status'] == 'success'){
            if(data['data'] == 1){
              this.toast.success('Item updated successfully!', 'Success');
              this.router.navigate(['/items']);
            }else if(data['data'] == 0){
              this.toast.error('Duplicating inventory ID.', 'Error');
            }else if(data['data'] == -1){
              this.toast.error('Database error. Please try again.', 'Error');
            }else{
              this.toast.warning('Image not uploaded. Please try with different image.', 'Warning');
            }
            this.loading = false;
          }
        },
        error => {
          this.toast.error('Server error. Please try again later.', 'Error');
          this.loading = false;
        }
      )
  }

}
