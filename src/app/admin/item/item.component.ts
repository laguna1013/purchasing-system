import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../services/global.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.menu = 'item';
  }

  status_change = item => {
    item.status = !item.status;
  }
}
