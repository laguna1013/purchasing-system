import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { first } from 'rxjs/operators';
import { Item } from '../item';
import { ParseService } from '../../../services/parse.service';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  item_id: String = ''
  item = new Item();
  file: File;
  constructor(public globalService: GlobalService, private route: ActivatedRoute, private parseService: ParseService, private apiService: ApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.item.created_user_id = this.authService.currentUser()['id']
  }
  onSelect(event) {
    const reader = new FileReader();
    this.file = event.addedFiles[0];
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.item.image = reader.result;
    };
  }
  remove_item_image = () => {
    this.item.image = [];
  }
  onSubmit = () => {
    //console.log(this.parseService.encode(this.item))
    this.apiService.addItem(this.parseService.encode(this.item))
      .pipe(first())
      .subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
  }
}
