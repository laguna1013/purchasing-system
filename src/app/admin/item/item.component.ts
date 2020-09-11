import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../services/global.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.menu = 'item';
  }

}
