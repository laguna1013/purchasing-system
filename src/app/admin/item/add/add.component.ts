import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Item } from '../item';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  item_id: String = ''
  item = new Item();
  file: File;
  constructor(public globalService: GlobalService, private route: ActivatedRoute) { }

  ngOnInit(): void {
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
    console.log(this.item)
  }
}
